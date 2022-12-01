package com.ruben.proyectofinal.Servicios;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexionBD {
    public Connection Conexion() {
        try {
            Class.forName("org.mariadb.jdbc.Driver");
            return DriverManager.getConnection("jdbc:mariadb://localhost:3306/deportes", "root", "");
        } catch (SQLException e) {
            System.out.println(e.getMessage());
        } catch (ClassNotFoundException cnfex) {
            System.out.println(cnfex.getMessage());
        }
        return null;
    }
}
