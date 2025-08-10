
const calcularNotaFinal = () => {
    const primerNota = document.querySelector('#primerNota').value;
    const segundaNota = document.querySelector('#segundaNota').value;
    const tercerNota = document.querySelector('#tercerNota').value;
    const resultadoNota = document.querySelector('#notaFinal').value;
    const mensajeNota = document.querySelector('#mensaje');

    if (primerNota === "") {
        alerta('El campo "Primera Nota" está vacio, favor ingrese su nota ');
    } else if (segundaNota === "") {
        alerta('El campo "Segunda Nota" está vacio, favor ingrese su nota ');
    } else if (tercerNota === "") {
        alerta('El campo "Tercer Nota" está vacio, favor ingrese su nota ');
    } else {

        let primerNotaNum = Number(primerNota);
        let segundaNotaNum = Number(segundaNota);
        let tercerNotaNum = Number(tercerNota);

        if (primerNotaNum < 0 || primerNotaNum > 30) {
            alerta('El campo "Primera Nota" no debe ser menor a 0 ni mayor a 30');
        } else if (segundaNotaNum < 0 || segundaNotaNum > 30) {
            alerta('El campo "Segunda Nota" no debe ser menor a 0 ni mayor a 30');
        } else if (tercerNotaNum < 0 || tercerNotaNum > 40) {
            alerta('El campo "Tercer Nota" no debe ser menor a 0 ni mayor a 40');
        } else {
            let sumaNota = primerNotaNum + segundaNotaNum + tercerNotaNum;
            let mensajeText = "";

            if (sumaNota < 60) {
                mensajeText = "Reprobado";
            } else if (sumaNota <= 79) {
                mensajeText = "Bueno";
            } else if (sumaNota <= 89) {
                mensajeText = "Muy Bueno"
            } else if (sumaNota <= 100) {
                mensajeText = "Sobresaliente"
            } else {
                mensajeText = "No es posible que la nota sea mayor a 100 pts"
            }

            resultadoNota = sumaNota;
            mensajeNota.textContent = mensajeText;
        }
    }
}


const alerta = (mensaje) => {
    Swal.fire({
        title: mensaje,
        icon: "warning"
    });
}