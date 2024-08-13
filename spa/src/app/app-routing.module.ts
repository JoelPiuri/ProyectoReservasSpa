import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './component/inicio/inicio.component';
import { ServiciosComponent } from './component/servicios/servicios.component';
import { TratamientoFacialComponent } from './component/tratamiento-facial/tratamiento-facial.component';
import { TratamientoCorporalComponent } from './component/tratamiento-corporal/tratamiento-corporal.component';
import { ProductosComponent } from './component/productos/productos.component';
import { FaqComponent } from './component/faq/faq.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  {
    path: 'servicios', component: ServiciosComponent
    , children: [
      { path: 'tratamiento-facial', component: TratamientoFacialComponent },
      { path: 'tratamiento-corporal', component: TratamientoCorporalComponent }
    ]
  },
  { path: 'productos', component: ProductosComponent },
  { path: 'faq', component: FaqComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
