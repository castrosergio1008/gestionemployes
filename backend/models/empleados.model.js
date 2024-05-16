const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmpleadosapisSchema = new Schema({
    name:{type: String, require:true,max:60},
    position:{type: String, required: true, max:60},
    office:{type: String, required: true, max:40},
    salary:{type: Number, required: true},
});

module.exports = mongoose.model("empleadosapis", EmpleadosapisSchema);