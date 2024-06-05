package com.udistrital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.udistrital.model.Libro;

//inteerface implementa o hereda a otra interface?  hereda
//paquete repo acceso a datos
//service logica de negocio
//controller capa de servicio rest

//JpaReposytoria lo podemos manejar de una maner mas abstracta

//@Repository Opcional porque jpaya maneja la anotacion
//public interface ILibroRepo extends JpaRepository <Libro, String> {
public interface ILibroRepo extends IGenericRepo <Libro, String> {

	//@Query(JPQL)
}
