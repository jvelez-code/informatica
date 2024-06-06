import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { switchMap } from 'rxjs/operators';
import { EditorialService } from 'src/app/_services/editorial.service';
import { Editorial } from 'src/app/_model/editorial';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  id !: number ;
  

  displayedColumns = ['codigoEditorial', 'nombreEditorial', 'contacto','telefono', 'acciones'];
  dataSource!: MatTableDataSource<Editorial>;

  constructor(
    private editorialService: EditorialService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.editorialService.geteditorialCambio().subscribe(data => {  
      this.dataSource = new MatTableDataSource(data);
    });

    this.editorialService.getMensajeCambio().subscribe(data => {
      this.snackBar.open(data, 'AVISO', { duration: 2000 });
    });

    this.editorialService.listar().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);

    });
  }



  eliminar(ideditorial: number) {
    this.editorialService.eliminar(ideditorial).pipe(switchMap(() => {
      return this.editorialService.listar()
    })).subscribe(data => {
      this.editorialService.seteditorialCambio(data);
      this.editorialService.setMensajecambio('SE ELIMINÓ');
    });
  }


}
