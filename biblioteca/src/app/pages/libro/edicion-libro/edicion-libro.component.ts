import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Autor } from 'src/app/_model/autor';
import { Editorial } from 'src/app/_model/editorial';
import { Genero } from 'src/app/_model/genero';
import { Libro } from 'src/app/_model/libro';
import { AutorService } from 'src/app/_services/autor.service';
import { EditorialService } from 'src/app/_services/editorial.service';
import { GeneroService } from 'src/app/_services/genero.service';
import { LibroService } from 'src/app/_services/libro.service';

@Component({
  selector: 'app-edicion-libro',
  templateUrl: './edicion-libro.component.html',
  styleUrls: ['./edicion-libro.component.css']
})
export class EdicionLibroComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  edicion!: boolean;

  autor$ !: Observable<Autor[]>;
  editorial$ !: Observable<Editorial[]>;
  genero$ !: Observable<Genero[]>;

  idAutor!: string;
  idEditorial!: string;
  idGenero!: number;

  constructor(
    private autorService: AutorService ,
    private editorialService: EditorialService,
    private generoService: GeneroService,
    private route: ActivatedRoute,
    private router: Router,
    private LibroService: LibroService
  ) { }

    
  ngOnInit(): void {
   
    
    this.autor$= this.autorService.listar();
    this.editorial$= this.editorialService.listar();
    this.genero$= this.generoService.listar();

    this.form = new FormGroup({
      'codigoLibro': new FormControl(''),
      'nombreLibro': new FormControl(''),
      'existencias': new FormControl(''),
      'precio': new FormControl(''),
      'descripcion': new FormControl(''),
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
    });

    this.initForm();

  }

  get f() { return this.form.controls; }

  private initForm() {
    if (this.edicion) {

      this.LibroService.listarPorId(this.id).subscribe(data => {
        
        this.idAutor = data.autor.codigoAutor;
        this.idEditorial = data.editorial.codigoEditorial;
        this.idGenero = data.genero.idGenero;

        this.form = new FormGroup({
          'codigoLibro': new FormControl(data.codigoLibro),
          'nombreLibro': new FormControl(data.nombreLibro),
          'existencias': new FormControl(data.existencias),
          'precio': new FormControl(data.precio),
          'descripcion': new FormControl(data.descripcion),
        });

      });
    }
  }

  operar() {

    if (this.form.invalid) { return; }

    let autor = new Autor();
    autor.codigoAutor = this.idAutor;

    let editorial = new Editorial();
    editorial.codigoEditorial = this.idEditorial;

    let genero = new Genero();
    genero.idGenero = this.idGenero;

    let libro = new Libro();
    libro.codigoLibro = this.form.value['codigoLibro'];
    libro.nombreLibro = this.form.value['nombreLibro'];
    libro.existencias = this.form.value['existencias'];
    libro.precio = this.form.value['precio'];
    libro.autor = autor;
    libro.editorial = editorial;
    libro.genero = genero;
    libro.descripcion = this.form.value['descripcion'];

    if (this.edicion) {
      //MODIFICAR

    this.LibroService.modificar(libro).subscribe(() => {
        this.LibroService.listar().subscribe(data => {
          //this.LibroService.libroCambio.next(data);
          this.LibroService.setLibroCambio(data);
        });
      });
    } else {
      //REGISTRAR
      this.LibroService.registrar(libro).subscribe(() => {
        this.LibroService.listar().subscribe(data => {
          this.LibroService.setLibroCambio(data);
          this.LibroService.setMensajecambio('SE REGISTRÓ');
        });
      });
    }

    this.router.navigate(['libros']);
  }

}