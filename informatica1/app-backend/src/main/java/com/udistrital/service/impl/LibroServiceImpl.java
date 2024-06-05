package com.udistrital.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udistrital.model.Libro;
import com.udistrital.repo.ILibroRepo;
import com.udistrital.repo.IGenericRepo;
import com.udistrital.service.ILibroService;

@Service
public class LibroServiceImpl extends CRUDimpl<Libro, String> implements ILibroService {
	
	@Autowired
	private ILibroRepo repo;

	@Override
	protected IGenericRepo<Libro, String> getRepo() {		
		return repo;
	}

}


//public class LibroServiceImpl implements ILibroService {
//	
//	@Autowired
//	private ILibroRepo repo;
//
//	@Override
//	public Libro registrar(Libro aut) {
//		return repo.save(aut);
//		}
//
//	@Override
//	public Libro modificar(Libro aut) {
//		return repo.save(aut);
//	}
//
//	@Override
//	public List<Libro> listar() {
//		return repo.findAll();
//	}
//
//	@Override
//	public Libro listarPorId(String id) {
//		 /*Optional se utiliza para evitar que devuelvas un null
//	    return repo.findById(id)	*/
//		Optional<Libro> op = repo.findById(id);
//		return op.isPresent()? op.get() : new Libro();
//		
//	}
//
//	@Override
//	public void eliminar(String id) {
//		repo.deleteById(id);
//	}
//
//}
