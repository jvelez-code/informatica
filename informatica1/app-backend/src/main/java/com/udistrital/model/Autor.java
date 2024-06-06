package com.udistrital.model;

import java.util.List;

import jakarta.persistence.*;

//Clase lógica que me ayuda a interprettar la información
@Entity
@Table(name = "autor")
public class Autor {
	
	@Id
	@Column(name = "codigo_autor",nullable = true)
	private String codigoAutor;
	
	@Column(name = "nombre_autor",nullable = true)
	private String nombreAutor; 
	
	@Column(name = "nacionalidad",nullable = true)
	private String nacionalidad;

//	@OneToMany(mappedBy = "autor")
//    private List<Libro> libros;

	public String getCodigoAutor() {
		return codigoAutor;
	}

	public void setCodigoAutor(String codigoAutor) {
		this.codigoAutor = codigoAutor;
	}

	public String getNombreAutor() {
		return nombreAutor;
	}

	public void setNombreAutor(String nombreAutor) {
		this.nombreAutor = nombreAutor;
	}

	public String getNacionalidad() {
		return nacionalidad;
	}

	public void setNacionalidad(String nacionalidad) {
		this.nacionalidad = nacionalidad;
	}

//	public List<Libro> getLibros() {
//		return libros;
//	}
//
//	public void setLibros(List<Libro> libros) {
//		this.libros = libros;
//	}
	
	
	
}
