package com.udistrital.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import jakarta.validation.Valid;
import com.udistrital.model.Genero;
import com.udistrital.service.IGeneroService;


//Se definen los servicios rest
//entidad-- cliente se comunica con el conttroller --> service --> dao/repo y devulve la cominicacion

@RestController
@RequestMapping("/generos")
public class GeneroController {
	
	@Autowired
	private IGeneroService service;

	@GetMapping
	public ResponseEntity<List<Genero>> listar() throws Exception{
		List<Genero> lista = service.listar();
		return new ResponseEntity<List<Genero>>(lista, HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Genero> listarPorId(@PathVariable("id") String id) throws Exception{  //@RequestParam
		System.out.print(id);
		Genero obj = service.listarPorId(id);		
			
		if(obj == null) {
			//throw new ModeloNotFoundException("ID NO ENCONTRADO: " + id);
		}
		return new ResponseEntity<Genero>(obj, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Void> registrar(@Valid @RequestBody Genero paciente) throws Exception{		
		Genero obj = service.registrar(paciente);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getIdGenero()).toUri();
		
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping
	public ResponseEntity<Genero> modificar(@Valid @RequestBody Genero Genero) throws Exception{
		Genero obj = service.modificar(Genero);
		return new ResponseEntity<Genero>(obj, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable("id") String id) throws Exception{
		Genero obj = service.listarPorId(id);
		if(obj == null) {
			System.out.print(id +"delete");
			//throw new ModeloNotFoundException("ID NO ENCONTRADO: " + id);
		}
		service.eliminar(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	

}