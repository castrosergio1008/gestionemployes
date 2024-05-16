const Paciente = require("../models/pacientes.models");
const now = new Date();

//formato de la respuesta
let response = {
    msg: "",
    exito: false,
    hora : now
}

//funcion para crear un paciente nuevo
exports.create = function(req,res){
    let paciente = new Paciente({
        numero_identificacion: req.body.numero_identificacion,
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion
    })

    //guarda el paciente nuevo
    paciente.save().then(() => {
        response.exito = true,
        response.msg= "El paciente se guardó correctamente"
        console.log('paciente guardado exitosamente');
        res.json(response)
        }).catch((error) => {
            console.error('Error al guardar el paciente', error);
        });
}

//funcion para mostrar todos los datos de los pacientes
exports.find = function (req, res){
    Paciente.find()
    .then(pacientes =>
        res.json(pacientes))
}

//funcion para mostrar el dato de un paciente dado su id.
exports.findById = function(req, res){
    Paciente.findById(req.params.id)
    .then(pacientes =>
        res.json(pacientes))
}

//funcion para actualizar los datos de un paciente dado su id.
exports.update = function(req, res){
    let paciente = {
        numero_identificacion: req.body.numero_identificacion,
        nombre: req.body.nombre,
        apellido_p: req.body.apellido_p,
        apellido_m: req.body.apellido_m,
        telefono: req.body.telefono,
        mail: req.body.mail,
        direccion: req.body.direccion,
        pass: req.body.pass
    }
//actualiza un contacto usando el id_
    Paciente.findByIdAndUpdate(req.params.id, {$set: paciente})
        .then(
        response.exito = true,
        response.msg= "El paciente se actualizó correctamente",
        res.json(response))
        .catch( error => {
            response.exito = false,
            response.msg = "Error al actualizar el paciente",
            res.json(response)})
}

exports.remove = function(req, res){
    Paciente.findByIdAndDelete(req.params.id)
        .then(
        response.exito = true,
        response.msg= "El paciente se eliminó correctamente",
        res.json(response))
        .catch(
            error => {
            response.exito = false,
            response.msg = "Error al eliminar el paciente",
            res.json(response)})
}

