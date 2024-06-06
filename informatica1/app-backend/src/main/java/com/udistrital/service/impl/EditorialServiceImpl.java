package com.udistrital.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.udistrital.model.Editorial;
import com.udistrital.repo.IEditorialRepo;
import com.udistrital.repo.IGenericRepo;
import com.udistrital.service.IEditorialService;

@Service
public class EditorialServiceImpl extends CRUDimpl<Editorial, String> implements IEditorialService {
	
	@Autowired
	private IEditorialRepo repo;

	@Override
	protected IGenericRepo<Editorial, String> getRepo() {		
		return repo;
	}

}


//public class EditorialServiceImpl implements IEditorialService {
//	
//	@Autowired
//	private IEditorialRepo repo;
//
//	@Override
//	public Editorial registrar(Editorial aut) {
//		return repo.save(aut);
//		}
//
//	@Override
//	public Editorial modificar(Editorial aut) {
//		return repo.save(aut);
//	}
//
//	@Override
//	public List<Editorial> listar() {
//		return repo.findAll();
//	}
//
//	@Override
//	public Editorial listarPorId(String id) {
//		 /*Optional se utiliza para evitar que devuelvas un null
//	    return repo.findById(id)	*/
//		Optional<Editorial> op = repo.findById(id);
//		return op.isPresent()? op.get() : new Editorial();
//		
//	}
//
//	@Override
//	public void eliminar(String id) {
//		repo.deleteById(id);
//	}
//
//}
