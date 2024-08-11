import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { InicioComponent } from './component/inicio/inicio.component';
import { GenerarCitaComponent } from './component/generar-cita/generar-cita.component';
import { VerDisponibilidadComponent } from './component/ver-disponibilidad/ver-disponibilidad.component';
import { TratamientoFacialComponent } from './component/tratamiento-facial/tratamiento-facial.component';
import { TratamientoCorporalComponent } from './component/tratamiento-corporal/tratamiento-corporal.component';
import { ProductosComponent } from './component/productos/productos.component';
import { ConsultaProductosComponent } from './component/consulta-productos/consulta-productos.component';
import { FaqComponent } from './component/faq/faq.component';
import { ConsultarFaqComponent } from './component/consultar-faq/consultar-faq.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    GenerarCitaComponent,
    VerDisponibilidadComponent,
    TratamientoFacialComponent,
    TratamientoCorporalComponent,
    ProductosComponent,
    ConsultaProductosComponent,
    FaqComponent,
    ConsultarFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
