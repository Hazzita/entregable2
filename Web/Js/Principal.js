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
    console.log(id_usuario);

    let navbar = document.getElementById("datosNav"); //gurdamos el id de la etiqueta html donde colocaremos el navbar
    if (id_usuario != null) { //validamos que el id no sea nulo (seguridad al acceder a la pagina)
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
        VerArticulos();
    } else { //retornamos al login si no hay id_usuario
        window.location.href = "../pantallas/Login.html";
    }
}

//Veremos la lista de articulos
function VerArticulos() {
    //Traemos el id del usuario
    var id_usuario = sessionStorage.getItem("id_usuario");

    //creamos la variable que recibe el id donde vamos a mapear la lista
    let articulos = document.getElementById("Articulos");
    //Recorremos el foreach
    usuarios.forEach(element => {
        //validamos el id del usuario con el de la base de datos
        if (element.id_usuario == id_usuario) {
            //Enviamos el mapeo de los articulos
            articulos.innerHTML += MapearArticulos(element);
        }
    });
}

function MapearArticulos(element) {
    return `<div class="card mb-4">
    <div class="card-header text-center">
        <img src="${element.imagen}" class="" alt="..." width="300">
    </div>

    <div class="card-body">
        <h5 class="card-title">${element.titulo}</h5>
        <p class="card-text">${element.contenido}</p>
        <div class="dropdown">
            <button class="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                Opciones del articulo
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item bg-danger fw-bold mb-1" href="../pantallas/ActualizarArticulo.html?idArticulo=${element.id_articulo}">Actualizar</a></li>
            </ul>
        </div>
    </div>
</div>`;
}
