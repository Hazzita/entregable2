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
}

function GuardarArticulo() {
    var id_usuario = sessionStorage.getItem("id_usuario");
    let mensaje = document.getElementById("mensaje");

    let data = {
        id_usuario: id_usuario,
        titulo: document.getElementById("titulo").value,
        contenido: document.getElementById("contenido").value,
        imagen: document.getElementById("imagen").value
    };

    fetch(baseUrl + "/articuloadd", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": 'application/json; charset=UTF-8'
        }
    }).then(res => {
        ObtenerUsuarios();
    });
}