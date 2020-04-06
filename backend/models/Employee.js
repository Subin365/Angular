const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee = new Schema({
   name: {
      type: String
   },
   idt: {
      type: Number
   },
   designation: {
      type: [String],
   }
}, {
   collection: 'employees'
})

module.exports = mongoose.model('Employee', Employee)