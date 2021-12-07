const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers');

module.exports = function() {

    // Agrega nuevos pacientes via POST
    router.post('/pacientes', 
        pacienteController.nuevoCliente
    );

    // Obtiene todos los registros de pacientes en la BD
    router.get('/pacientes',
        pacienteController.obeterPacientes
    );

    // Obtiene un paciente en especifico (ID)
    router.get('/pacientes/:_id',
        pacienteController.obeterPaciente
    )

    // Actualiza un paciente por su ID
    router.put('/pacientes/:_id',
        pacienteController.actualizarPaciente
    )

    // Elimina un paciente por su ID
    router.delete('/pacientes/:_id',
        pacienteController.eliminarPaciente
    )

    return router;
}
