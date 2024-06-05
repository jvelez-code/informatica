package com.udistrital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.udistrital.model.Autor;

//inteerface implementa o hereda a otra interface?  hereda
//paquete repo acceso a datos
//service logica de negocio
//controller capa de servicio rest

//JpaReposytoria lo podemos manejar de una maner mas abstracta

//@Repository Opcional porque jpaya maneja la anotacion
//public interface IAutorRepo extends JpaRepository <Autor, String> {
public interface IAutorRepo extends IGenericRepo <Autor, String> {

	//@Query(JPQL)
}
