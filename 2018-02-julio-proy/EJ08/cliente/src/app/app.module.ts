import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CondicionesComponent } from './componentes/condiciones/condiciones.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { AppRutasModule } from './app.rutas.module';
import { ProductoComponent } from './componentes/producto/producto.component';
import { PedidosService } from './servicios/pedidosService';
import { CestaComponent } from './componentes/cesta/cesta.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CondicionesComponent,
    PrincipalComponent,
    RegistroComponent,
    CabeceraComponent,
    InicioComponent,
    PerfilComponent,
    ProductoComponent,
    CestaComponent
  ],  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRutasModule
  ],
  providers: [ PedidosService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
