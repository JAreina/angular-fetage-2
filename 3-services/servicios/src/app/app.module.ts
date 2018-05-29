import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Pagina1Component } from './componentes/pagina1/pagina1.component';
import { Pagina2Component } from './componentes/pagina2/pagina2.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { RouterModule, Routes } from '@angular/router';
import { Hijo1Component } from './componentes/pagina1/hijo1/hijo1.component';
import { Hijo2Component } from './componentes/pagina2/hijo2/hijo2.component';
import { Servicio1Service } from './servicios/servicio1.service';
import { ServicioAppService } from './servicios/servicioapp.service';
import { Servicio1Hijo1Service } from './servicios/servicio1hijo1.service';
import { Servicio2Service } from './servicios/servicio2.service';
import { Servicio2Hijo2Service } from './servicios/servicio2hijo2.service';
import { PadreToterComponent } from './componentes/padre-toter/padre-toter.component';




const routes: Routes = [
  { path: 'pagina1', component: Pagina1Component },
  { path: 'pagina2', component: Pagina2Component },
  { path: 'pagina2/:datos1/:datos2', component: Pagina2Component },
  { path: 'padreTotal', component: PadreToterComponent },
  { path: '*', component: AppComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    Pagina1Component,
    Pagina2Component,
    CabeceraComponent,
    Hijo1Component,
    Hijo2Component,
    PadreToterComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes) 
  ],
  providers:[Servicio1Service,
             ServicioAppService,
            Servicio1Hijo1Service,
          Servicio2Service,
        Servicio2Hijo2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
