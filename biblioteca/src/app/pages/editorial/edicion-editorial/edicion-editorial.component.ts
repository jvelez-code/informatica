import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Editorial } from 'src/app/_model/editorial';
import { EditorialService } from 'src/app/_services/editorial.service';

@Component({
  selector: 'app-edicion-editorial',
  templateUrl: './edicion-editorial.component.html',
  styleUrls: ['./edicion-editorial.component.css']
})
export class EdicionEditorialComponent implements OnInit {

  form!: FormGroup;
  id!: number;
  edicion!: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private editorialService: EditorialService
  ) { }

    
  ngOnInit(): void {
    
    this.form = new FormGroup({
      'codigoEditorial': new FormControl(''),
      'nombreEditorial': new FormControl(''),
      'contacto': new FormControl(''),
      'telefono': new FormControl(''),
    });

    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] != null;
    });

    this.initForm();

  }


  private initForm() {
    if (this.edicion) {

      this.editorialService.listarPorId(this.id).subscribe(data => {
        this.form = new FormGroup({
          'codigoEditorial': new FormControl(data.codigoEditorial),
          'nombreEditorial': new FormControl(data.nombreEditorial),
          'contacto': new FormControl(data.contacto),
          'telefono': new FormControl(data.telefono),
        });

      });
    }
  }

  operar() {

    if (this.form.invalid) { return; }

    let editorial = new Editorial();
    editorial.codigoEditorial = this.form.value['codigoEditorial'];
    editorial.nombreEditorial = this.form.value['nombreEditorial'];
    editorial.contacto = this.form.value['contacto'];
    editorial.telefono = this.form.value['telefono'];

    if (this.edicion) {
      //MODIFICAR

    this.editorialService.modificar(editorial).subscribe(() => {
        this.editorialService.listar().subscribe(data => {
          //this.editorialService.editorialCambio.next(data);
          this.editorialService.seteditorialCambio(data);
        });
      });
    } else {
      //REGISTRAR
      this.editorialService.registrar(editorial).subscribe(() => {
        this.editorialService.listar().subscribe(data => {
          this.editorialService.seteditorialCambio(data);
          this.editorialService.setMensajecambio('SE REGISTRÓ');
        });
      });
    }

    this.router.navigate(['editorial']);
  }

}
