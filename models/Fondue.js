const mongoose = require('mongoose');

const FondueSchema = new mongoose.Schema({

    name: {
        type: mongoose.SchemaTypes.String,
    }

})

module.exports = mongoose.model('Gnocchi', FondueSchema);