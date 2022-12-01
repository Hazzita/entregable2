package com.ruben.proyectofinal.Modelos;

public class UsuarioArticulom {
    private int id_articulo;
    private int id_usuario;
    private String titulo;
    private String contenido;
    private String imagen;
    private String nombre;
    private String correo;
    private String cedula;
    private String profesion;
    private String contrasena;
    public UsuarioArticulom(int id_articulo, int id_usuario, String titulo, String contenido, String imagen,
            String nombre, String correo, String cedula, String profesion, String contrasena) {
        this.id_articulo = id_articulo;
        this.id_usuario = id_usuario;
        this.titulo = titulo;
        this.contenido = contenido;
        this.imagen = imagen;
        this.nombre = nombre;
        this.correo = correo;
        this.cedula = cedula;
        this.profesion = profesion;
        this.contrasena = contrasena;
    }
    public int getId_articulo() {
        return id_articulo;
    }
    public void setId_articulo(int id_articulo) {
        this.id_articulo = id_articulo;
    }
    public int getId_usuario() {
        return id_usuario;
    }
    public void setId_usuario(int id_usuario) {
        this.id_usuario = id_usuario;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public String getContenido() {
        return contenido;
    }
    public void setContenido(String contenido) {
        this.contenido = contenido;
    }
    public String getImagen() {
        return imagen;
    }
    public void setImagen(String imagen) {
        this.imagen = imagen;
    }
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    public String getCorreo() {
        return correo;
    }
    public void setCorreo(String correo) {
        this.correo = correo;
    }
    public String getCedula() {
        return cedula;
    }
    public void setCedula(String cedula) {
        this.cedula = cedula;
    }
    public String getProfesion() {
        return profesion;
    }
    public void setProfesion(String profesion) {
        this.profesion = profesion;
    }
    public String getContrasena() {
        return contrasena;
    }
    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    
}
