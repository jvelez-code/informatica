package com.udistrital.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udistrital.model.Autor;
import com.udistrital.repo.IAutorRepo;
import com.udistrital.repo.IGenericRepo;
import com.udistrital.service.IAutorService;

@Service
public class AutorServiceImpl extends CRUDimpl<Autor, String> implements IAutorService {
	
	@Autowired
	private IAutorRepo repo;

	@Override
	protected IGenericRepo<Autor, String> getRepo() {		
		return repo;
	}

}


//public class AutorServiceImpl implements IAutorService {
//	
//	@Autowired
//	private IAutorRepo repo;
//
//	@Override
//	public Autor registrar(Autor aut) {
//		return repo.save(aut);
//		}
//
//	@Override
//	public Autor modificar(Autor aut) {
//		return repo.save(aut);
//	}
//
//	@Override
//	public List<Autor> listar() {
//		return repo.findAll();
//	}
//
//	@Override
//	public Autor listarPorId(String id) {
//		 /*Optional se utiliza para evitar que devuelvas un null
//	    return repo.findById(id)	*/
//		Optional<Autor> op = repo.findById(id);
//		return op.isPresent()? op.get() : new Autor();
//		
//	}
//
//	@Override
//	public void eliminar(String id) {
//		repo.deleteById(id);
//	}
//
//}
