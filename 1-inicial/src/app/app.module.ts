import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CocheComponent } from './componentes/coche/coche.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormularioComponent } from './componentes/formulario/formulario.component';

@NgModule({
	declarations: [ AppComponent, CocheComponent, CabeceraComponent, FooterComponent, FormularioComponent ],
	imports: [ BrowserModule, FormsModule],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
