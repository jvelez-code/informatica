import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Genero } from 'src/app/_model/genero';
import { GeneroService } from 'src/app/_services/genero.service';

@Component({
  selector: 'app-edicion-genero',
  templateUrl: './edicion-genero.component.html',
  styleUrls: ['./edicion-genero.component.css']
})
export class EdicionGeneroComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  edicion!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private generoService: GeneroService
  ) { }

    
  ngOnInit(): void {

    this.form = new FormGroup({
      'idGenero': new FormControl(''),
      'nombreGenero': new FormControl(''),
      'descripcion': new FormControl('')
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
    });

    this.initForm();

  }


  private initForm() {
    if (this.edicion) {

      this.generoService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'idGenero': new FormControl(data.idGenero),
          'nombreGenero': new FormControl(data.nombreGenero),
          'descripcion': new FormControl(data.descripcion)
        });

      });
    }
  }

  operar() {

    if (this.form.invalid) { return; }

    let genero = new Genero();
    genero.idGenero = this.form.value['idGenero'];
    genero.nombreGenero = this.form.value['nombreGenero'];
    genero.descripcion = this.form.value['descripcion'];

    if (this.edicion) {
      //MODIFICAR

    this.generoService.modificar(genero).subscribe(() => {
        this.generoService.listar().subscribe(data => {
          //this.generoService.generoCambio.next(data);
          this.generoService.setGeneroCambio(data);
        });
      });
    } else {
      //REGISTRAR
      this.generoService.registrar(genero).subscribe(() => {
        this.generoService.listar().subscribe(data => {
          this.generoService.setGeneroCambio(data);
          this.generoService.setMensajecambio('SE REGISTRÓ');
        });
      });
    }

    this.router.navigate(['genero']);
  }


}
