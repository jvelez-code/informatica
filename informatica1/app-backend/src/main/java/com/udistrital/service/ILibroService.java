package com.udistrital.service;

import java.util.List;

import com.udistrital.model.Libro;

public interface ILibroService extends ICRUD<Libro, String> {

}


//interface para desaclopar, no se recomienda en el codigo se puede complicar
//una pieza de lego sacas e ingresas


//public interface ILibroService {
//	
//	Libro registrar(Libro aut);
//	Libro modificar(Libro aut);
//	List<Libro> listar();
//	Libro listarPorId(String id);
//	void eliminar(String id);
//
//}


//abstrayendo lo repetitivo una interface que hereda otra interface
