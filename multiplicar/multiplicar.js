const fs = require('fs');
const colors = require('colors');

let crearArchivo = base => {
    return new Promise((resolve, reject) => {

        if (!Number(base)){
            reject(`El valor introductio ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i < 10; i++) {
            data += `${base} *  ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`El archivo tabla-${base}.txt ha sido creado`)
        });

    });
}

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        console.log('===========================')
        console.log(`==tabla de ${base}=====`.green)
        console.log('===========================')

        if (!Number(base)){
            reject(`El valor introductio ${base} no es un número`);
            return;
        }

        let data = '';

        for (let i = 1; i < limite; i++) {
            data += `${base} *  ${i} = ${base * i}\n`;
        }

        resolve(data)
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}