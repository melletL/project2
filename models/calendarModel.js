const express = require('express');
const methodOverride = require('method-override');
const sha256 = require('js-sha256');
const cookieParser = require('cookie-parser')
const app = express();
app.use(cookieParser());

/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  // let getAll = (callback) => {

  //   let query = 'SELECT * FROM pokemons';

  //   dbPoolInstance.query(query, (error, queryResult) => {
  //     if( error ){

  //       // invoke callback function with results after query has executed
  //       callback(error, null);

  //     }else{

  //       // invoke callback function with results after query has executed

  //       if( queryResult.rows.length > 0 ){
  //         callback(null, queryResult.rows);

  //       }else{
  //         callback(null, null);

  //       }
  //     }
  //   });
  // };

    const getAll = (body, callback) => {
        console.log("body",body);
        let queryString = "SELECT * FROM events WHERE username = $1";
        let value = [body.username];
        dbPoolInstance.query(queryString, value, (errObj,result) => {
            if (errObj) {
                callback(errObj,null);
            } else {
                // console.log("results.rows",result.rows);
                callback(null, result.rows);
            }
        })
    }

    const getMonthEvents = (body, callback) => {
        console.log("body",body);
        let queryString = "SELECT * FROM events WHERE startDate BETWEEN $1 AND $2 AND username = $3";
        let date1 = `${body.year}-${body.month}-1`;
        // console.log(date1);
        let date2 = new Date(`${body.year}`,`${body.month}`,0);
        // console.log(date2);
        // console.log("date1/2", date1, date2);
        let value = [date1, date2, body.username];
        dbPoolInstance.query(queryString, value, (errObj,result) => {
            if (errObj) {
                console.log("ERRRRRR");
                // callback(errObj);
            } else {
                // console.log("results.rows",result.rows);
                callback(null, result.rows);
            }
        })
    }

    const getDayEvents = (body, callback) => {
        console.log("body",body);
        let queryString = "SELECT * FROM events WHERE startDate=$1 AND username=$2";
        let value = [body.date, body.username];
        dbPoolInstance.query(queryString, value, (errObj,result) => {
            if (errObj) {
                console.log("ERRRRRR");
            } else {
                callback(null, result.rows);
            }
        });
    }

    const addEvent = (body, callback) => {
        // console.log("adding")
        let queryString = "INSERT INTO events (startdate, starttime, enddate, endtime, nodays, eventname, eventtype, eventlocation, eventnotes, username) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)";
        let value = [body.startdate, body.starttime, body.startdate,body.starttime,1,body.eventname, body.eventtype, body.eventlocation, body.eventnotes, body.username];
        console.log("value", value);
        // console.log(value);
        dbPoolInstance.query(queryString, value, (errObj,result) => {
            if (errObj) {
                console.log(errObj);
                callback(errObj,null);
            } else {
                callback(null, result.rows[0]);
            }
    })
  }



  return {
    getAll,
    getDayEvents,
    getMonthEvents,
    addEvent,
  };
};