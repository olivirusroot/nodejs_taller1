const fs = require("fs");

let users = [];

const registro = (nombre, edad) => {
    const datos = { "name": nombre, "age": edad };
    users.push(datos);
};

const escribir = () => {
    // Leer el archivo primero para obtener los datos existentes
    fs.readFile("usuarios.json", "utf-8", (err, data) => {
        if (!err && data) {
            users = users.concat(JSON.parse(data));
        }
        
        // Escribir los datos actualizados al archivo
        fs.writeFile("usuarios.json", JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error al escribir en el archivo:', err);
            } else {
                console.log("Archivo actualizado exitosamente");
                console.log(users);
            }
        });
    });
};

const buscar = (nombre) => {
    fs.readFile("usuarios.json", "utf-8", (err, info) => {
        if (info.includes(nombre)) {
            console.log('El nombre se encuentra en el archivo.');
        } else {
            console.log('El nombre no se encuentra en el archivo.');
        }
    });
};

module.exports = {
    users,
    registro,
    escribir,
    buscar
};
