package com.udistrital.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.*;

@Entity
@Table(name = "libro")
public class Libro {
	
	@Id
	@Column(name = "codigo_libro",nullable = true)
	private String codigoLibro; 
	
	@Column(name = "nombre_libro",nullable = true)
	private String nombreLibro; 
	
	@Column(name = "existencias",nullable = true)
	private int existencias; 
	
	@Column(name = "precio",nullable = true)
	private double precio; 
	
	@ManyToOne
    @JoinColumn(name = "codigo_autor_fk", referencedColumnName = "codigo_autor", foreignKey = @ForeignKey(name = "fk_libro_autor"))
    private Autor autor;

    @ManyToOne
    @JoinColumn(name = "codigo_editorial_fk", referencedColumnName = "codigo_editorial", foreignKey = @ForeignKey(name = "fk_libro_editorial"))
    private Editorial editorial;

    @ManyToOne
    @JoinColumn(name = "id_genero_fk", referencedColumnName = "id_genero", foreignKey = @ForeignKey(name = "fk_libro_genero"))
    private Genero genero;
	
	@Column(name = "descripcion",nullable = true)
	private String descripcion;

	public String getCodigoLibro() {
		return codigoLibro;
	}

	public void setCodigoLibro(String codigoLibro) {
		this.codigoLibro = codigoLibro;
	}

	public String getNombreLibro() {
		return nombreLibro;
	}

	public void setNombreLibro(String nombreLibro) {
		this.nombreLibro = nombreLibro;
	}

	public int getExistencias() {
		return existencias;
	}

	public void setExistencias(int existencias) {
		this.existencias = existencias;
	}

	public double getPrecio() {
		return precio;
	}

	public void setPrecio(double precio) {
		this.precio = precio;
	}

	public Autor getAutor() {
		return autor;
	}

	public void setAutor(Autor autor) {
		this.autor = autor;
	}

	public Editorial getEditorial() {
		return editorial;
	}

	public void setEditorial(Editorial editorial) {
		this.editorial = editorial;
	}

	public Genero getGenero() {
		return genero;
	}

	public void setGenero(Genero genero) {
		this.genero = genero;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}
	
		

}
