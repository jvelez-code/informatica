package com.udistrital.service;

import java.util.List;


public interface ICRUD<T ,ID > {
	
	T registrar(T aut) throws Exception;
	T modificar(T aut) throws Exception;
	List<T> listar() throws Exception;
	T listarPorId(ID id) throws Exception;
	void eliminar(ID id) throws Exception;

}
