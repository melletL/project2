module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR POKEMON CONTROLLER
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const controller = require('./controllers/masterController')(allModels);

//   app.get('/pokemons', pokemonControllerCallbacks.index);
//   //app.get('/pokemons/:id', pokemons.getPokemon);
// };

    app.get('/', controller.mainGate);
    app.post('/login', controller.login);
    app.get('/register', controller.register);
    app.post('/register', controller.registered);
    app.get('/main', controller.renderMain);

    app.get('/date/:year/:month/:day', controller.show);

    // app.get('/main/:year/:month/:day/add', controller.addEvent);
    app.post('/date/:year/:month/:day', controller.writeEvent);

    // app.put('/date', controller.editEvent);
    // app.delete('/date', controller.deleteEvent);

    // app.post('/', controller.login);
    // app.get('/register', controller.register);
    // app.post('/register', controller.registered );
    // app.get('/login', pokemons.login);
};