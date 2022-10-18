const NouvellesModel = require('../models/nouvelles');
const Repository = require('../models/repository');
module.exports =
    class NouvellesController extends require('./Controller') {
        constructor(HttpContext) {
            super(HttpContext, new Repository(new NouvellesModel()));
        }
    }