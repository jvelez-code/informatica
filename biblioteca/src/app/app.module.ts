import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutorComponent } from './pages/autor/autor.component';
import { EditorialComponent } from './pages/editorial/editorial.component';
import { EdicionAutorComponent } from './pages/autor/edicion-autor/edicion-autor.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router'; 

import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneroComponent } from './pages/genero/genero.component';
import { LibroComponent } from './pages/libro/libro.component';
import { EdicionLibroComponent } from './pages/libro/edicion-libro/edicion-libro.component';
import { EdicionGeneroComponent } from './pages/genero/edicion-genero/edicion-genero.component';
import { EdicionEditorialComponent } from './pages/editorial/edicion-editorial/edicion-editorial.component';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    AutorComponent,
    EditorialComponent,
    EdicionAutorComponent,
    GeneroComponent,
    LibroComponent,
    EdicionLibroComponent,
    EdicionGeneroComponent,
    EdicionEditorialComponent,
    
  ],
  imports: [    
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDividerModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
