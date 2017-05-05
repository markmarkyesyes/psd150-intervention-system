const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let StudentSchema = new Schema({
  fname: {type: String},
  lname: {type: String},
  hrTeacher: {type: Schema.ObjectId, ref: "Faculty", allowNull: false},
  grade: {type: Number},
  school: {type: String},
  tierTwo: [
    {
      problemID: {type: String},
      problemAnalysis: {type: String},
      subject: {type: String},
      goal: {type: String},
      descriptionTierOne: {type: Object},
      descriptionTierTwo: {type: Object},
      startDate: {type: Date},
      endDate: {type: Date},
      completedDate: {type: Date},
      sessionsPerWeek: {type: String},
      minutesPerSession: {type: String},
      interventionistName: {type: String},
      pmTools: {type: Object},
      pmFrequency: {type: String},
      pmFacultyName: {type: String},
      notes: {type: String},
      regression: {type: Boolean},
      noChange: {type: Boolean},
      decreaseDiscrepancy: {type: Boolean},
      discontinueIntervention: {type: Boolean},
      fadeIntervention: {type: Boolean},
      modifyIntervention: {type: Boolean},
      continueIntervention: {type: Boolean},
      intensityIntervention: {type: Boolean},
      recycleThroughPSProcess: {type: Boolean},
      seekEntitlement: {type: Boolean},
      numStudsinInt: {type: Number},
      numStudsDecreasedDisc: {type: Number},
      effectivenessOfIntervention: {type: Number}
    }
  ]
});

var Student = mongoose.model("Student", StudentSchema);

module.exports = Student;
