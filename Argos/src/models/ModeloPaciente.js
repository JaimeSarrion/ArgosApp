import React from 'react';


class ModeloPaciente extends React.Component {
    constructor(props) {
        super(props);
    }

    getUsers = () => {
        const users = [
            {
                nombre: 'Bad',
                apellidos: 'Bunny',
                telefono: '654987321',
                calle: 'Avenida de las naciones num. 5',
                codigoPostal: '03025',
                pais: 'España',
                provincia: 'Alicante'
            },
            {
                nombre: 'Kidd',
                apellidos: 'Keo',
                telefono: '655687321',
                calle: 'Avenida Alfonso el Sabio num 45',
                codigoPostal: '03035',
                pais: 'España',
                provincia: 'Alicante'
            },
            {
                nombre: 'La Rosalia',
                apellidos: 'Garcia',
                telefono: '123456789',
                calle: 'La Rambla num 35',
                codigoPostal: '03005',
                pais: 'España',
                provincia: 'Barcelona'
            },
        ]
        return(users);
    }
}

module.exports = ModeloPaciente;