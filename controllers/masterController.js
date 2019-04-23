const express = require('express');
const methodOverride = require('method-override');
const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser());
const SALT = 'ABC123'

module.exports = (db) => {


  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */


    let showDate = (request,response) => {
        console.log("in show date")
        let dateRequested = {};
        let year = request.params.year;
        let month = request.params.month;
        let day = request.params.day;
        let date = `${year}-${month}-${day}`;
        dateRequested.year=year;
        dateRequested.month=month;
        dateRequested.day=day;
        dateRequested.date=date;
        // dateRequested.date2 = new Date(`${year}`,`${month}`,0);
        dateRequested.username = request.cookies.username;
        console.log("username", dateRequested);
        db.calendar.getDayEvents(dateRequested, (error, events) => {
            console.log("events",events);
            console.log("dateReq",dateRequested);
            response.render('date', {events:events, date:date, dateRequested:dateRequested});
        })
    }

    let renderMain = (request,response) => {
        const username = request.cookies.username;
        const shaUsername = request.cookies.loggedIn;
        const hash = sha256( SALT + request.cookies.username);
        // console.log("hash",hash);
        // console.log(shaUsername);
        // let d = new Date();
        // let dateRequested = {};
        // year = d.getFullYear();
        // month = d.getMonth()+1;
        if (hash === shaUsername) {
            response.render('main');
            // let dateRequested = {};
            // dateRequested.username = request.cookies.username;
            // db.calendar.getMonthEvents(dateRequested, (error, monthEvents) => {
            //     // console.log("passedback",monthEvents);
            //     response.render('main', {obj: dateRequested});
                // response.redirect(`/main/events/${year}/${month}`);
            // });
        } else {
            response.status(401).render('login');
        }
    }

    let mainGate = (request,response) => {
        const username = request.cookies.username;
        const shaUsername = request.cookies.loggedIn;
        const hash = sha256( SALT + request.cookies.username);
        if (hash === shaUsername) {
            response.redirect('/main');
        } else {
            response.status(401).render('login');
        }
    }

    let authenticateLogin = (request, response) => {
        // console.log('2')
        db.authenticate.authenticate(request.body, (error, registeredUser) => {
            const username = request.body.username;
            const pw = sha256(request.body.pw);
            console.log("registeredUser",registeredUser);
            console.log("request.body",request.body);
            if (registeredUser.username === username && registeredUser.pw === pw) { //user found and password authenticates
                const hash = sha256( SALT + request.body.username);
                response.cookie('username', request.body.username);
                response.cookie('loggedIn', hash);
                response.redirect('/main');
            } else if (registeredUser === undefined) {
                response.status(401).render('register'); // user not found
            } else {
                response.status(401).render('unauthorised'); //user found, password does not match
            }
        })
    }

    let register = (request,response) => {
        response.render('register');
    }

    let registered = (request,response) => {
        db.authenticate.create(request.body, (error, registeredUser) => {
            const hash = sha256( SALT + request.body.username);
            response.cookie('username', request.body.username);
            response.cookie('loggedIn', hash);
            response.redirect('/');
        });
    }


    // let addEvent = (request, response) => {
    //     let dateRequested = {};
    //     dateRequested.year = request.params.year;
    //     dateRequested.month = request.params.month;
    //     dateRequested.day = request.params.day;
    //     dateRequested.username = request.cookies.username;
    //     console.log(dateRequested);
    //     response.render('addEventAtDate', {dateRequested})
    // }

    let writeEvent = (request, response) => {
        console.log("writing");
        db.calendar.addEvent(request.body, (error, registeredUser) => {
            response.redirect('/');
        })
    }


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    // index: index,
    // register: register,
    // registered: registered,
    renderMain: renderMain,
    mainGate: mainGate,
    login:  authenticateLogin,
    register: register,
    registered: registered,
    show: showDate,
    writeEvent: writeEvent,
  };

}



            // let d = new Date();
            // let dateRequested = {};
            // dateRequested.year = d.getFullYear();
            // dateRequested.month = d.getMonth()+1;
            // console.log(dateRequested);
            // db.calendar.getMonthEvents(dateRequested, (error, monthEvents) => {
            //     // console.log("regUser",registeredUser);
            //     // console.log("dateReq",dateRequested);
            //     response.render('main', {monthEvents});