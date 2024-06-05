import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { AutorService } from 'src/app/_services/autor.service';
import { Autor } from 'src/app/_model/autor';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  id : number = 1 ;
  

  displayedColumns = ['codigoAutor', 'nacionalidad', 'nombreAutor', 'acciones'];
  dataSource!: MatTableDataSource<Autor>;

  constructor(
    private autorService: AutorService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log('hola');
    this.autorService.getAutorCambio().subscribe(data => {  
      this.dataSource = new MatTableDataSource(data);
    });

    this.autorService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.autorService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    });
  }



  eliminar(idAutor: number) {
    this.autorService.eliminar(idAutor).pipe(switchMap(() => {
      return this.autorService.listar()
    })).subscribe(data => {
      this.autorService.setAutorCambio(data);
      this.autorService.setMensajecambio('SE ELIMINÓ');
    });
  }

}

