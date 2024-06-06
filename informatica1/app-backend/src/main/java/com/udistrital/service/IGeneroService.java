package com.udistrital.service;

import java.util.List;

import com.udistrital.model.Genero;

public interface IGeneroService extends ICRUD<Genero, String> {

}


//interface para desaclopar, no se recomienda en el codigo se puede complicar
//una pieza de lego sacas e ingresas


//public interface IGeneroService {
//	
//	Genero registrar(Genero aut);
//	Genero modificar(Genero aut);
//	List<Genero> listar();
//	Genero listarPorId(String id);
//	void eliminar(String id);
//
//}


//abstrayendo lo repetitivo una interface que hereda otra interface
