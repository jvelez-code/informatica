package com.udistrital.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "genero")
public class Genero {
	
	@Id
	@Column(name = "id_genero",nullable = true)
	private int idGenero; 
	
	@Column(name = "nombre_genero",nullable = true)
	private String nombreGenero; 
	
	@Column(name = "descripcion",nullable = true)
	private String descripcion;
	
//	@OneToMany(mappedBy = "genero")
//    private List<Libro> libros;

	public int getIdGenero() {
		return idGenero;
	}

	public void setIdGenero(int idGenero) {
		this.idGenero = idGenero;
	}

	public String getNombreGenero() {
		return nombreGenero;
	}

	public void setNombreGenero(String nombreGenero) {
		this.nombreGenero = nombreGenero;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}

//	public List<Libro> getLibros() {
//		return libros;
//	}
//
//	public void setLibros(List<Libro> libros) {
//		this.libros = libros;
//	}
	
	

}
