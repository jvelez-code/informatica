import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { GeneroService } from 'src/app/_services/genero.service';
import { Genero  } from 'src/app/_model/genero';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.css']
})
export class GeneroComponent implements OnInit {

  id !: number ;
  

  displayedColumns = ['idGenero', 'nombreGenero', 'descripcion', 'acciones'];
  dataSource!: MatTableDataSource<Genero>;

  constructor(
    private generoService: GeneroService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    console.log('hola');
    this.generoService.getGeneroCambio().subscribe(data => {  
      this.dataSource = new MatTableDataSource(data);
    });

    this.generoService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.generoService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    });
  }



  eliminar(idgenero: number) {
    this.generoService.eliminar(idgenero).pipe(switchMap(() => {
      return this.generoService.listar()
    })).subscribe(data => {
      this.generoService.setGeneroCambio(data);
      this.generoService.setMensajecambio('SE ELIMINÓ');
    });
  }

}


