import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types'

const Formulario = ({ busqueda, setBusqueda, setConsultar }) => {

    const [error, setError] = useState(false)

    //extraigo ciudad y pais
    const { ciudad, pais } = busqueda

    //funcion que pone los elementos en el state
    const handbleChange = e => {
        //actualizar el state
        setBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        })
    }

    const handbleSubmit = e => {
        e.preventDefault();

        //validar
        if (ciudad.trim() === '' || pais.trim() === '') {
            setError(true)
            return;
        }
        setError(false)

        //pasarlo a componente principal

        setConsultar(true)
    }

    return (
        <form
            onSubmit={handbleSubmit}
        >
            {error ? <Error mensaje="Ambos campos son obligatorios" /> : null}
            <div className='input-field col s12'>
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handbleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>

            <div className='input-field col s12'>
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handbleChange}
                >
                    <option value="">-- Seleccione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="pais">Pais: </label>
                <div className='input-field col s12'>
                    <div className='waves-effect waves-light btn-large btn-block yellow accent-4'>
                        <input
                            type="submit"
                            value="Buscar Clima"
                            style={{ width: "100%", height: "100%", cursor: "pointer" }}
                        />
                    </div>
                </div>
            </div>
        </form>
    )
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    setBusqueda: PropTypes.func.isRequired,
    setConsultar: PropTypes.func.isRequired,
}

export default Formulario;
