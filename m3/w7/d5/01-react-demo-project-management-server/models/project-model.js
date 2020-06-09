//      models/project-model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATE THE SCHEMA
const projectSchema = new Schema({
  title: String,
  description: String,
  tasks: [{ type: Schema.Types.ObjectId, ref: 'Task' }]
})

// CREATE MODEL
//                              projects
const Project = mongoose.model('Project', projectSchema);

// EXPORT THE MODEL
module.exports = Project;

