let baseUrl = "http://localhost:8080";
let usuarios = [];

//Obtenemos los usuatios
function ObtenerUsuarios() {
    fetch(baseUrl + '/usuario/all').then(res => {
        res.json().then(json => {
            usuarios = json;
            ValidarUsuario();
        });
    });
}

function ValidarUsuario() {
    let Validar = document.getElementById("msgError");

    //Traemos los datos de la url
    const campos = window.location.search;
    const urlParams = new URLSearchParams(campos);
    var correo = urlParams.get('correo');
    var contrasena = urlParams.get('contrasena');
    var validacion = 0;

    console.log(usuarios);

    //Validamos que el arreglo de usuarios no sea nulo
   if (usuarios != null) {
        usuarios.forEach(elemento => { //recorremos el arreglo json
            if (elemento.correo == correo && elemento.contrasena == contrasena) { //validamos que encuentre el usuario y contraseña
                sessionStorage.setItem("id_usuario", elemento.id);
                window.location.href = `../pantallas/Principal.html`; //redireccionamos a principal
                console.log("Usuario y contraseña validos");
                validacion = 1;
            } else if (validacion == 0 && correo != null) { //si ya encontro al usuario y contraseña no entra, de otro modo si
                Validar.innerHTML = "Usuario y contraseña incorrectos"; //Mostramos este mensaje en caso usuario y contraseña sean erroneas
                console.log("Usuario y contraseña incorrectos");
            }
        });
    }
}