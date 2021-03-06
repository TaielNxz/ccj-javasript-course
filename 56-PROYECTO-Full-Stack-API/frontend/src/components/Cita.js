import React, { Fragment } from 'react';
import { useParams } from 'react-router';
import { useNavigate, Link } from 'react-router-dom';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

const Cita = ({citas, guardarConsultar}) => {

    // Extraer id de la URL
    const { id } = useParams();

    // Para redireccionar a otra pagina
    const navigate = useNavigate();

    // Filtrar la Cita Actual por su ID
    const citaArray = citas.filter( cita => cita._id === id )

    // Verificar si existe la Cita
    if( citaArray[0] === undefined ) {
        // Redireccionar
        navigate('/');
        return null;
    } 

    // Extraer Cita del array que crea el .filter
    const citaActual = citaArray[0];

    // Desestructurar la cita actual
    const { _id, nombre, propietario, fecha, hora, telefono, sintomas} = citaActual;

    // Elimina un registro
    const eliminarCita = id => {
        Swal.fire({
            title: '¿Estas seguro?',
            text: "Una cita eliminada no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar!',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
        
                // Alerta de eliminado
                Swal.fire(
                    'Eliminada!',
                    'La cita fue eliminada correctamente.',
                    'success'
                )

                // Eliminado de la base de datos
                clienteAxios.delete(`/pacientes/${id}`)
                .then(respuesta => {
                    guardarConsultar(true);
                    navigate('/');
                })
                .catch(error => {
                    console.log(error)
                })
            }
        })
    }

    return ( 
        <Fragment>
            <h1>Desde Cita: {nombre} </h1> 

            <div className="container mt-5 py-5">
                <div className="col-12 mb-5 d-flex justify-content-center">
                    <Link to={'/'} className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Volver</Link>
                </div>

                <div className="col-md-8 mx-auto">
                    <div className="list-group">
                        <div className="p-5 list-group-item list-group-item-action flex-column aling-items-center">
                            <div className="d-flex w-100 justify-content-between mb-4">
                                <h3 className="mb-3">{nombre}</h3>
                                <small className="fecha-alta">
                                    {fecha} - {hora}
                                </small>
                            </div>

                            <p className="mb-0">
                                {sintomas}
                            </p>
                            <div className="contacto py-3">
                                <p>Dueño: {propietario}</p>
                                <p>Telefono: {telefono}</p>
                            </div>

                            <div className="d-flex">
                                <button 
                                    type="button"
                                    className="text-uppercase py-2 px-5 font-weight-bold btn btn-danger col"
                                    onClick={ () => eliminarCita(_id) }
                                >
                                    Eliminar &times;
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default Cita;