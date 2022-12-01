CREATE DATABASE deportes;

USE deportes;

CREATE TABLE usuario(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50),
    correo VARCHAR(50),
    cedula VARCHAR(50),
    profesion VARCHAR(50),
    contrasena VARCHAR(50)
);

CREATE TABLE articulo(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    CONSTRAINT articulo_id_usuario_fk FOREIGN KEY (id_usuario)
    REFERENCES usuario(id),
    titulo VARCHAR(500),
    contenido VARCHAR(500),
    imagen VARCHAR(500)
);

INSERT INTO usuario (nombre, correo, cedula, profesion, contrasena)
VALUES ("Ruben Jaen", "ruben.jaen@utp.ac.pa","8-947-1049","Periodista","12345"),
("Maria Alvarez", "maria.alvarez@utp.ac.pa","1-321-5432","Reportero","12345");

INSERT INTO articulo (id_usuario, titulo, contenido, imagen)
VALUES (1,"¿Messi volvera al barcelona?","1 de julio de 2023, Lionel Messi será jugador del Barça. 
La fecha mencionada es el día que, a priori, el jugador quedará libre. 
Cabe recordar que el máximo anotador de la historia de la selección 
argentina firmó un contrato por dos años más un opcional",
"https://us.123rf.com/450wm/ververidis/ververidis1711/ververidis171100296/ververidis171100296.jpg?ver=6"),
(1,"¿España campeon del mundo?","La selección de fútbol de España ganó la Copa Mundial de Fútbol de 2010, cuya fase final 
se disputó en Sudáfrica entre el 11 de junio y el 11 de julio de 2010",
"https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/160px-Flag_of_Spain.svg.png"),
(2,"¿Quien ha ganado mas mundiales de futbol?","Brasil es la selección con más títulos de la Copa del Mundo 
con cinco trofeos (1958, 1962, 1970, 1994, 2002). Le siguen de cerca Alemania e Italia con cuatro.",
"https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png");

delimiter //
CREATE PROCEDURE pa_info_usuario()
BEGIN
	SELECT articulo.id as 'id_articulo', articulo.id_usuario, articulo.titulo, 
    articulo.contenido, articulo.imagen, usuario.nombre, 
    usuario.correo,usuario.cedula, usuario.profesion, usuario.contrasena
    FROM articulo JOIN usuario ON articulo.id_usuario = usuario.id;
END //

delimiter //
CREATE PROCEDURE pa_guardar_info(
    IN id_usuario INT,
    IN titulo VARCHAR(500),
    IN contenido VARCHAR(500),
    IN imagen VARCHAR(500)
)

BEGIN
	INSERT INTO articulo (id_usuario, titulo, contenido, imagen)
    VALUES (id_usuario, titulo, contenido, imagen);
END //

CALL pa_info_usuario();
CALL pa_guardar_info(1,"Messi al mundial","Messi ira al mundial Quatar 2022","https://www.elgrafico.com.ar/media/cache/pub_news_details_large/media/i/11/a4/11a47313853b3560b7fce26cceda60f171f897b3.jpg")