package com.udistrital.service.impl;

import java.util.List;

import com.udistrital.repo.IGenericRepo;
import com.udistrital.service.ICRUD;

//caracteristicas : permite atributos y metodos abstractos

public abstract class CRUDimpl<T, ID> implements ICRUD<T, ID> {
	
	//protegido solo quqiero que este en estet paquete
	protected abstract IGenericRepo<T, ID> getRepo();

	
	@Override
	public T registrar(T obj) throws Exception {
		return getRepo().save(obj);
	}

	@Override
	public T modificar(T obj) throws Exception {
		return getRepo().save(obj);
	}

	@Override
	public List<T> listar() throws Exception {
		return getRepo().findAll();
	}
	
	@Override
	public T listarPorId(ID id) throws Exception {
		return getRepo().findById(id).orElse(null);		
	}
	
	@Override
	public void eliminar(ID id) throws Exception {
		getRepo().deleteById(id);
	}
}
