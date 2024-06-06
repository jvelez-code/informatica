import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { Libro } from 'src/app/_model/libro';
import { LibroService } from 'src/app/_services/libro.service';


@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

 
  

  displayedColumns = ['codigoLibro', 'nombreLibro', 'existencias', 'precio', 'autor.nombreAutor','editorial.nombreEditorial', 'genero.nombreGenero', 'descripcion', 'acciones'];
  dataSource!: MatTableDataSource<Libro>;

  constructor(
   
    private libroService: LibroService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
    this.libroService.getLibroCambio().subscribe(data => {  
      this.dataSource = new MatTableDataSource(data);
    });

    this.libroService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.libroService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    });
  }

  eliminar(idLibro: number) {
    this.libroService.eliminar(idLibro).pipe(switchMap(() => {
      return this.libroService.listar()
    })).subscribe(data => {
      this.libroService.setLibroCambio(data);
      this.libroService.setMensajecambio('SE ELIMINÓ');
    });
  }


}
