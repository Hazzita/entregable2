package com.ruben.proyectofinal.Modelos;

public class Articulom {
    private int id;
    private int id_usuario;
    private String titulo;
    private String contenido;
    private String imagen;

    public Articulom(int id, int id_usuario, String titulo, String contenido, String imagen) {
        this.id = id;
        this.id_usuario = id_usuario;
        this.titulo = titulo;
        this.contenido = contenido;
        this.imagen = imagen;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

}
