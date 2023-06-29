// Podría agregar que las tablas Ordenadas sean ordenada con números



function sumarGol(button) {
    var span = button.parentNode.querySelector("span");
    var goles = parseInt(span.innerText);

    span.innerText = goles + 1;
    actualizarTablaOrdenada();
}


function restarGol(button) {
    var span = button.parentNode.querySelector("span");
    var goles = parseInt(span.innerText);

    if (goles > 0) {
        span.innerText = goles - 1;
        actualizarTablaOrdenada();
    }
}


function sumarAsistencia(button) {
    var span = button.parentNode.querySelector("span");
    var asistencias = parseInt(span.innerText);

    span.innerText = asistencias + 1;
    actualizarTablaOrdenada();
}


function restarAsistencia(button) {
    var span = button.parentNode.querySelector("span");
    var asistencias = parseInt(span.innerText);

    if (asistencias > 0) {
        span.innerText = asistencias - 1;
        actualizarTablaOrdenada();
    }
}


function actualizarTablaOrdenada() {
    var jugadores = [];
    var filasJugadores = document.querySelectorAll(".registro tr:not(:first-child)");

    filasJugadores.forEach(function (filaJugador) {
        var nombre = filaJugador.querySelector("td:first-child").innerText;
        var goles = parseInt(filaJugador.querySelector("td:nth-child(2) span").innerText);
        var asistencias = parseInt(filaJugador.querySelector("td:nth-child(3) span").innerText);
        jugadores.push({ nombre: nombre, goles: goles, asistencias: asistencias });
    });

    jugadores.sort(function (a, b) {
        var golesDiff = b.goles - a.goles;
        if (golesDiff === 0) {
            return b.asistencias - a.asistencias;
        } else {
            return golesDiff;
        }
    });

    var tablaOrdenada = document.getElementById("tablaOrdenada");
    tablaOrdenada.innerHTML = "";

    var headerRow = document.createElement("tr");
    var jugadorHeader = document.createElement("th");
    headerRow.appendChild(jugadorHeader);
    jugadorHeader.innerText = "Jugador";

    var golesHeader = document.createElement("th");
    golesHeader.innerText = "Goles";
    headerRow.appendChild(golesHeader);

    var asistenciasHeader = document.createElement("th");
    asistenciasHeader.innerText = "Asistencias";
    headerRow.appendChild(asistenciasHeader);
    tablaOrdenada.appendChild(headerRow);

    jugadores.forEach(function (jugador) {
        var filaJugador = document.createElement("tr");
        var nombreJugador = document.createElement("td");
        nombreJugador.innerText = jugador.nombre;
        filaJugador.appendChild(nombreJugador);

        var golesJugador = document.createElement("td");
        golesJugador.innerText = jugador.goles;
        filaJugador.appendChild(golesJugador);

        var asistenciasJugador = document.createElement("td");
        asistenciasJugador.innerText = jugador.asistencias;
        filaJugador.appendChild(asistenciasJugador);
        tablaOrdenada.appendChild(filaJugador);
    });
}
