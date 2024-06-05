import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutorComponent } from './pages/autor/autor.component';
import { EdicionAutorComponent } from './pages/autor/edicion-autor/edicion-autor.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { LibroComponent } from './pages/libro/libro.component';
import { EdicionLibroComponent } from './pages/libro/edicion-libro/edicion-libro.component';
import { GeneroComponent } from './pages/genero/genero.component';
import { EdicionGeneroComponent } from './pages/genero/edicion-genero/edicion-genero.component';
import { EdicionEditorialComponent } from './pages/editorial/edicion-editorial/edicion-editorial.component';

const routes: Routes = [
  {
    path: 'autor', component: AutorComponent , children: [
      { path: 'nuevo', component: EdicionAutorComponent },
      { path: 'edicion/:id', component: EdicionAutorComponent }
    ]},
  {
    path: 'editorial', component: EditorialComponent , children: [
      { path: 'nuevo', component: EdicionEditorialComponent },
      { path: 'edicion/:id', component: EdicionEditorialComponent }
    ]},
  {
    path: 'genero', component: GeneroComponent , children: [
      { path: 'nuevo', component: EdicionGeneroComponent },
      { path: 'edicion/:id', component: EdicionGeneroComponent }
     ]},
  {
     path: 'libros', component: LibroComponent , children: [
       { path: 'nuevo', component: EdicionLibroComponent },
       { path: 'edicion/:id', component: EdicionLibroComponent }
     ]},
  { path: '**', redirectTo: 'autor'  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
