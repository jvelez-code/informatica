package com.udistrital.service;

import java.util.List;

import com.udistrital.model.Editorial;

public interface IEditorialService extends ICRUD<Editorial, String> {

}


//interface para desaclopar, no se recomienda en el codigo se puede complicar
//una pieza de lego sacas e ingresas


//public interface IEditorialService {
//	
//	Editorial registrar(Editorial aut);
//	Editorial modificar(Editorial aut);
//	List<Editorial> listar();
//	Editorial listarPorId(String id);
//	void eliminar(String id);
//
//}


//abstrayendo lo repetitivo una interface que hereda otra interface
