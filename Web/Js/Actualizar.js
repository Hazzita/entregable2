let baseUrl = "http://localhost:8080";
let usuarios = [];

//Obtenemos los usuatios
function ObtenerUsuarios() {
    fetch(baseUrl + '/articulousuario/all').then(res => {
        res.json().then(json => {
            usuarios = json;
            VerNavUsuario();
        });
    });
}

function VerNavUsuario() {
    var id_usuario = sessionStorage.getItem("id_usuario");
    const campos = window.location.search;
    const urlParams = new URLSearchParams(campos);
    var idArticulo = urlParams.get('idArticulo');

    sessionStorage.setItem("idArticulo", idArticulo);

    let navbar = document.getElementById("datosNav"); //gurdamos el id de la etiqueta html donde colocaremos el navbar
    usuarios.forEach(usuario => {
        if (usuario.id_usuario == id_usuario) { //validamos el id enviado con el id de la base de datos para traer los datos
            //mapeamos el navbar en el html
            navbar.innerHTML = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="../pantallas/Principal.html">
                    <img src="../img/logo.png" alt="Bootstrap" width="30" height="30">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../pantallas/Principal.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="../pantallas/GuardarArticulo.html">Añadir articulo</a>
                        </li>
                    </ul>
                    <div class="d-flex" style=margin-right:80px;>
                        <div class="dropdown">
                            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                ${usuario.nombre}
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="../pantallas/Perfil.html">Perfil</a></li>
                                <li><a class="dropdown-item" href="../pantallas/Login.html">Cerrar Sesion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>`;
        }
    });
    VerInformacion();
}

function VerInformacion() {
    var idArticulo = sessionStorage.getItem("idArticulo");
    let Actualizar = document.getElementById("Actualizar");
    usuarios.forEach(usuario => {
        if (usuario.id_articulo == idArticulo) {
            Actualizar.innerHTML = `<p id="mensaje"></p>
        <label for="titulo" class="mt-2">Escriba el titulo de su articulo</label>
        <input type="text" name="titulo" value="${usuario.titulo}" id="titulo" class="form-control mb-4" placeholder="Titulo" required>
        <label for="contenido">Escriba el contenido de su articulo</label>
        <input type="text" name="contenido" value="${usuario.contenido}" id="contenido" class="form-control mb-4" placeholder="Contenido"
            required>
        <label for="imagen">Ingrese la URL de su imagen</label>
        <input type="text" value="${usuario.imagen}" name="imagen" id="imagen" class="form-control mb-4" placeholder="Url imagen"
            required>`;
        }
    });

}

function ActualizarArticulo() {
    var id_articulo = sessionStorage.getItem("idArticulo");

    let data = {
        id: id_articulo,
        titulo: document.getElementById("titulo").value,
        contenido: document.getElementById("contenido").value,
        imagen: document.getElementById("imagen").value
    };

    fetch(baseUrl + "/articuloupdate", {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(res => {
        ObtenerUsuarios();
    });
}

function EliminarArticulo() {
    fetch(baseUrl + '/eliminararticulo/' + sessionStorage.getItem("idArticulo"), { method: "Delete" }).then(res => {
        console.log(res);
        window.location.href = "../pantallas/Principal.html";
    });
}