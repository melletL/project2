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

    let create = (body, callback) => {
        let queryString = 'INSERT INTO users (username, pw) VALUES ($1,$2) RETURNING *';
        let hash = sha256(body.pw);
        let value = [body.username, hash];
        console.log(body);
        dbPoolInstance.query(queryString, value, (errObj, result) => {
            if (errObj) {
                callback(errObj,null);
            } else {
                callback(null, result.rows[0]);
            }
        });
    }

    let authenticate = (body, callback) => {
        console.log("body",body);
        let queryString = `SELECT * FROM users WHERE username = '${body.username}'`;
        dbPoolInstance.query(queryString, (errObj, result) => {
            console.log(result);
            if (errObj) {
                callback(errObj,null);
            } else {
                console.log(result.rows[0]);
                callback(null, result.rows[0]);
            }
        });
    }



  return {
    // getAll,
    create,
    authenticate,
  };
};