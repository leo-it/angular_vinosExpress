import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';

import { CarouselInicioComponent } from './components/carousel-inicio/carousel-inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsNosotrosComponent } from './components/cards-nosotros/cards-nosotros.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { FormContactoComponent } from './components/form-contacto/form-contacto.component';
import { ProductosComponent } from './components/productos/productos.component';


import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NosotrosPaginaComponent } from './paginas/nosotros-pagina/nosotros-pagina.component';
import { ProductosPaginaComponent } from './paginas/productos-pagina/productos-pagina.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    CarouselInicioComponent,
    HeaderComponent,
    FooterComponent,
    CardsNosotrosComponent,
    NosotrosComponent,
    FormContactoComponent,
    ProductosComponent,
    InicioComponent,
    ContactoComponent,
    NosotrosPaginaComponent,
    ProductosPaginaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
