const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/express')

// const contact1 = new Contact({
//     name: "Rizki ajah",
//     email: "rizki@gmail.com"
// })

// contact1.save().then((contact) => {
//     console.log(contact);
// }).catch((error) => {
//     console.log(error)
// })