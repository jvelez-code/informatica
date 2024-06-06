import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Autor } from 'src/app/_model/autor';
import { AutorService } from 'src/app/_services/autor.service';

@Component({
  selector: 'app-edicion-autor',
  templateUrl: './edicion-autor.component.html',
  styleUrls: ['./edicion-autor.component.css']
})
export class EdicionAutorComponent  implements OnInit {

  form!: FormGroup;
  id!: number;
  edicion!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private autorService: AutorService
  ) { }

    
  ngOnInit(): void {
    console.log('hola mundo');
    this.form = new FormGroup({
      'codigoAutor': new FormControl(''),
      'nacionalidad': new FormControl(''),
      'nombreAutor': new FormControl('')
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
    });

    this.initForm();

  }


  private initForm() {
    if (this.edicion) {

      this.autorService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'codigoAutor': new FormControl(data.codigoAutor),
          'nacionalidad': new FormControl(data.nacionalidad),
          'nombreAutor': new FormControl(data.nombreAutor)
        });

      });
    }
  }

  operar() {

    if (this.form.invalid) { return; }

    let autor = new Autor();
    autor.codigoAutor = this.form.value['codigoAutor'];
    autor.nacionalidad = this.form.value['nacionalidad'];
    autor.nombreAutor = this.form.value['nombreAutor'];

    if (this.edicion) {
      //MODIFICAR

    this.autorService.modificar(autor).subscribe(() => {
        this.autorService.listar().subscribe(data => {
          //this.autorService.AutorCambio.next(data);
          this.autorService.setAutorCambio(data);
        });
      });
    } else {
      //REGISTRAR
      this.autorService.registrar(autor).subscribe(() => {
        this.autorService.listar().subscribe(data => {
          this.autorService.setAutorCambio(data);
          this.autorService.setMensajecambio('SE REGISTRÓ');
        });
      });
    }

    this.router.navigate(['autor']);
  }

}
