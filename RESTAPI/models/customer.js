let mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:admin@mockcluster-zet4a.mongodb.net/test?retryWrites=true', { useNewUrlParser: true, useCreateIndex: true })



let customerSchema = new mongoose.Schema({

    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    }
})


module.exports = mongoose.model('Customer', customerSchema)