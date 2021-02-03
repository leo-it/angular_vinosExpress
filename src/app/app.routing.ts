import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { NosotrosPaginaComponent } from './paginas/nosotros-pagina/nosotros-pagina.component';
import { ProductosPaginaComponent } from './paginas/productos-pagina/productos-pagina.component';

const appRoutes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'nosotros', component: NosotrosPaginaComponent},
    {path: 'productos', component:ProductosPaginaComponent},
    {path: 'contacto', component:ContactoComponent},
    
    {path: 'inicio', component: InicioComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''},
];
export const routing = RouterModule.forRoot(appRoutes);