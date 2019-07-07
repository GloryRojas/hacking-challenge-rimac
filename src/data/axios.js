import axios from "axios";

const personas = {
    "asegurados": [
        {
            "nombre": "Eva",
            "paterno": "Pinedo",
            "materno": "",
            "dni": "76543210",
            "correo": "eva.pinedo@rimac.com.pe",
            "fechaNacimiento": "11/04/1956",
            "genero": "Femenino",
            "asegurados": [
                {
                    "nombre": "Matías",
                    "paterno": "Pinedo",
                    "materno": "Lozano",
                    "dni": "76543210",
                    "fechaNacimiento": "09/04/1998",
                    "genero": "Masculino"
                },
                {
                    "nombre": "Joaquín",
                    "paterno": "Pinedo",
                    "materno": "Lozano",
                    "dni": "76543210",
                    "fechaNacimiento": "18/04/2001",
                    "genero": "Masculino"
                }
            ]
        }
    ]
}

export const postPersonas = () => {
    axios({
        url: "https://freestyle.getsandbox.com/dummy/obtenerdatospersona",
        method: "POST",
        mode: 'cors',
        header: {},
        body: JSON.stringify(personas)
    })
    .then(resp => console.log(resp.data.data))  
    .catch(err => console.log(err))
};