package com.ruben.proyectofinal.Controlador;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ruben.proyectofinal.Modelos.Articulom;
import com.ruben.proyectofinal.Modelos.UsuarioArticulom;
import com.ruben.proyectofinal.Modelos.Usuariom;
import com.ruben.proyectofinal.Servicios.Deportes;

@RestController
public class Controlador {
    @GetMapping("/usuario/all")
    public List<Usuariom> ObtenerUsuario() {
        return new Deportes().ObtenerUsuario();
    }

    @GetMapping("/articulo/all")
    public List<Articulom> ObtenerArticulo() {
        return new Deportes().ObtenerArticulo();
    }

    @GetMapping("/articulousuario/all")
    public List<UsuarioArticulom> ObtenerUsuarioArticulo() {
        return new Deportes().ObtenerUsuarioArticulo();
    }

    @PostMapping("/articuloadd")
    public int GuardarArticulo(@RequestBody Articulom articulo) {
        return new Deportes().GuardarArticulo(articulo);
    }

    @PutMapping("/usuarioupdate")
    public int ActualizarUsuario(@RequestBody Usuariom usuariom) {
        return new Deportes().ActualizarUsuario(usuariom);
    }

    @PutMapping("/articuloupdate")
    public int ActualizarArticulo(@RequestBody Articulom articulom) {
        return new Deportes().ActualizarArticulo(articulom);
    }

    @DeleteMapping("/eliminararticulo/{idArticulo}")
    public int Delete(@PathVariable("idArticulo") int pid) {
        return new Deportes().EliminarArticulo(pid);
    }
}
