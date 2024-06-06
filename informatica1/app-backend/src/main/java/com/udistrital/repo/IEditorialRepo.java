package com.udistrital.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.udistrital.model.Editorial;

//inteerface implementa o hereda a otra interface?  hereda
//paquete repo acceso a datos
//service logica de negocio
//controller capa de servicio rest

//JpaReposytoria lo podemos manejar de una maner mas abstracta

//@Repository Opcional porque jpaya maneja la anotacion
//public interface IEditorialRepo extends JpaRepository <Editorial, String> {
public interface IEditorialRepo extends IGenericRepo <Editorial, String> {

	//@Query(JPQL)
}
