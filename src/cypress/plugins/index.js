const { config } = require("cypress/types/bluebird");

module.exports = (on ,config) =>{

}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on , config)=>{
    on('file:preprocessor , cucumber()')
}