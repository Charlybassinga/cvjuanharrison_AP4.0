

document.getElementById('Boton4').onclick = function () {
    document.getElementById("Presentacion").style.display = 'block';
    document.getElementById("datos").style.display = 'none';
    document.getElementById("Experiencia").style.display = 'none';
    document.getElementById("Educación").style.display = 'none';
}

document.getElementById('Boton1').onclick = function () {
    document.getElementById("datos").style.display = 'block';
    document.getElementById("Presentacion").style.display = 'none';
    document.getElementById("Experiencia").style.display = 'none';
    document.getElementById("Educación").style.display = 'none';
    document.getElementById("Contacto").style.display = 'none';
}

document.getElementById('Boton2').onclick = function () {
    document.getElementById("Experiencia").style.display = 'block';
    document.getElementById("Presentacion").style.display = 'none';
    document.getElementById("datos").style.display = 'none';
    document.getElementById("Educación").style.display = 'none';
    document.getElementById("Contacto").style.display = 'none';
}


document.getElementById('Boton3').onclick = function () {
    document.getElementById("Educación").style.display = 'block';
    document.getElementById("Experiencia").style.display = 'none';
    document.getElementById("Presentacion").style.display = 'none';
    document.getElementById("datos").style.display = 'none';
    document.getElementById("Contacto").style.display = 'none';
}

document.getElementById('Boton5').onclick = function () {
    document.getElementById("Contacto").style.display = 'block';
    document.getElementById("Experiencia").style.display = 'none';
    document.getElementById("Presentacion").style.display = 'none';
    document.getElementById("datos").style.display = 'none';
    document.getElementById("Educación").style.display = 'none';
}