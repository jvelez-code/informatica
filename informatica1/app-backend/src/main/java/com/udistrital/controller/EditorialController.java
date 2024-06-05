package com.udistrital.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import jakarta.validation.Valid;
import com.udistrital.model.Editorial;
import com.udistrital.service.IEditorialService;


//Se definen los servicios rest
//entidad-- cliente se comunica con el conttroller --> service --> dao/repo y devulve la cominicacion

@RestController
@RequestMapping("/editoriales")
public class EditorialController {
	
	@Autowired
	private IEditorialService service;

	@GetMapping
	public ResponseEntity<List<Editorial>> listar() throws Exception{
		List<Editorial> lista = service.listar();
		return new ResponseEntity<List<Editorial>>(lista, HttpStatus.OK);
	}
	
	
	@GetMapping("/{id}")
	public ResponseEntity<Editorial> listarPorId(@PathVariable("id") String id) throws Exception{  //@RequestParam
		System.out.print(id);
		Editorial obj = service.listarPorId(id);		
			
		if(obj == null) {
			//throw new ModeloNotFoundException("ID NO ENCONTRADO: " + id);
		}
		return new ResponseEntity<Editorial>(obj, HttpStatus.OK);
	}
	
	@PostMapping
	public ResponseEntity<Void> registrar(@Valid @RequestBody Editorial paciente) throws Exception{		
		Editorial obj = service.registrar(paciente);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getCodigoEditorial()).toUri();
		
		return ResponseEntity.created(location).build();
	}
	
	@PutMapping
	public ResponseEntity<Editorial> modificar(@Valid @RequestBody Editorial Editorial) throws Exception{
		Editorial obj = service.modificar(Editorial);
		return new ResponseEntity<Editorial>(obj, HttpStatus.OK);
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> eliminar(@PathVariable("id") String id) throws Exception{
		Editorial obj = service.listarPorId(id);
		if(obj == null) {
			System.out.print(id +"delete");
			//throw new ModeloNotFoundException("ID NO ENCONTRADO: " + id);
		}
		service.eliminar(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
	

}
