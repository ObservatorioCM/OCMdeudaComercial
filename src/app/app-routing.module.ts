import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { IndiceComponent } from './indice/indice.component';
import { AboutComponent } from './shared/about/about.component';
import { ResumenComponent } from './resumen/resumen.component';
import { DetalleComponent } from './detalle/detalle.component';

const app_routes: Routes = [
    { path: 'home', component: IndiceComponent },
    { path: 'about', component: AboutComponent },
    { path: 'Resumen', component: ResumenComponent },
    { path: 'Detalle', component: DetalleComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
