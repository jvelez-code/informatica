package com.udistrital.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import jakarta.validation.Valid;
import com.udistrital.model.Libro;
import com.udistrital.service.ILibroService;


//Se definen los servicios rest
//entidad-- cliente se comunica con el conttroller --> service --> dao/repo y devulve la cominicacion

@RestController
@RequestMapping("/libros")
public class LibroController {
	
	@Autowired
	private ILibroService service;

	@GetMapping
	public ResponseEntity<List<Libro>> listar() throws Exception{
		List<Libro> lista = service.listar();
		return new ResponseEntity<List<Libro>>(lista, HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Libro> listarPorId(@PathVariable("id") String id) throws Exception{  //@RequestParam
		System.out.print(id);
		Libro obj = service.listarPorId(id);		
			
		if(obj == null) {
			//throw new ModeloNotFoundException("ID NO ENCONTRADO: " + id);
		}
		return new ResponseEntity<Libro>(obj, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Void> registrar(@Valid @RequestBody Libro paciente) throws Exception{		
		Libro obj = service.registrar(paciente);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getCodigoLibro()).toUri();
		
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping
	public ResponseEntity<Libro> modificar(@Valid @RequestBody Libro Libro) throws Exception{
		Libro obj = service.modificar(Libro);
		return new ResponseEntity<Libro>(obj, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable("id") String id) throws Exception{
		Libro obj = service.listarPorId(id);
		if(obj == null) {
			System.out.print(id +"delete");
			//throw new ModeloNotFoundException("ID NO ENCONTRADO: " + id);
		}
		service.eliminar(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	

}
