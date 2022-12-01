package com.ruben.proyectofinal.Servicios;

import java.sql.Statement;
import java.sql.Connection;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import com.ruben.proyectofinal.Modelos.Articulom;
import com.ruben.proyectofinal.Modelos.UsuarioArticulom;
import com.ruben.proyectofinal.Modelos.Usuariom;

public class Deportes {
    Connection conn;

    public Deportes() {
        conn = new ConexionBD().Conexion();
    }

    public List<Usuariom> ObtenerUsuario() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM usuario";

            List<Usuariom> usuario = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Usuariom usuariom = new Usuariom(
                        result.getInt("id"),
                        result.getString("nombre"),
                        result.getString("correo"),
                        result.getString("cedula"),
                        result.getString("profesion"),
                        result.getString("contrasena"));

                usuario.add(usuariom);
            }

            result.close();
            stmt.close();
            return usuario;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public List<Articulom> ObtenerArticulo() {
        try {
            Statement stmt = conn.createStatement();
            String query = "SELECT * FROM articulo";

            List<Articulom> articulo = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                Articulom articulom = new Articulom(
                        result.getInt("id"),
                        result.getInt("id_usuario"),
                        result.getString("titulo"),
                        result.getString("contenido"),
                        result.getString("imagen"));

                articulo.add(articulom);
            }

            result.close();
            stmt.close();
            return articulo;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public List<UsuarioArticulom> ObtenerUsuarioArticulo() {
        try {
            Statement stmt = conn.createStatement();
            String query = "CALL pa_info_usuario()";

            List<UsuarioArticulom> articulousuario = new ArrayList<>();
            ResultSet result = stmt.executeQuery(query);
            while (result.next()) {
                UsuarioArticulom usuarioArticulom = new UsuarioArticulom(
                        result.getInt("id_articulo"),
                        result.getInt("id_usuario"),
                        result.getString("titulo"),
                        result.getString("contenido"),
                        result.getString("imagen"),
                        result.getString("nombre"),
                        result.getString("correo"),
                        result.getString("cedula"),
                        result.getString("profesion"),
                        result.getString("contrasena"));

                articulousuario.add(usuarioArticulom);
            }

            result.close();
            stmt.close();
            return articulousuario;

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return null;
    }

    public int GuardarArticulo(Articulom articulom) {
        int resultado = 0;
        try {
            Statement stm = conn.createStatement();
            String query = "INSERT INTO articulo (id_usuario, titulo, contenido, imagen) VALUES ('"
                    + articulom.getId_usuario() + "', '" + articulom.getTitulo() + "', '" + articulom.getContenido()
                    + "', '" + articulom.getImagen() + "');";

            resultado = stm.executeUpdate(query);

            return resultado;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int EliminarArticulo(int pid) {
        int resultado = 0;
        try {
            Statement stmt = conn.createStatement();
            String query = "DELETE FROM articulo WHERE id='" + pid + "'";

            return stmt.executeUpdate(query);

        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int ActualizarUsuario(Usuariom usuariom) {
        int resultado = 0;
        try {
            Statement stm = conn.createStatement();
            String query = "UPDATE usuario SET nombre='"+usuariom.getNombre()+"', cedula='"+usuariom.getCedula()+"', correo='"+usuariom.getCorreo()+"',profesion='"+usuariom.getProfesion()+"' WHERE id ='"+usuariom.getId()+"'";

            resultado = stm.executeUpdate(query);

            return resultado;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }

    public int ActualizarArticulo(Articulom articulom) {
        int resultado = 0;
        try {
            Statement stm = conn.createStatement();
            String query = "UPDATE articulo SET titulo='"+articulom.getTitulo()+"', contenido='"+articulom.getContenido()+"', imagen='"+articulom.getImagen()+"' WHERE id ='"+articulom.getId()+"'";

            resultado = stm.executeUpdate(query);

            return resultado;
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
        return resultado;
    }
}
