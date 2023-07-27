function agregar() {
    var comentarioInput = document.getElementById("nota").value;
    if (comentarioInput === "") {
        return;
    }

    var contenedorComentarios = document.getElementById("contenedor");
    var nuevoComentario = document.createElement("div");
    nuevoComentario.innerHTML = comentarioInput;
    nuevoComentario.classList.add("nota");

    var eliminar = document.createElement("button");
    eliminar.innerHTML = "-";
    eliminar.classList.add("btn-borrar");
    eliminar.addEventListener("click", function() {
        eliminarComentario(nuevoComentario);
    });

    nuevoComentario.appendChild(eliminar);
    contenedorComentarios.appendChild(nuevoComentario);

    document.getElementById("nota").value = "";
}

function eliminarComentario(comentario) {
    var contenedorComentarios = document.getElementById("contenedor");
    contenedorComentarios.removeChild(comentario);
}
