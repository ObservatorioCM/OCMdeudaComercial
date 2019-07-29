import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndiceComponent } from './indice/indice.component';
import { AboutComponent } from './shared/about/about.component';
import { ResumenPorTerceroComponent } from './resumen-por-tercero/resumen-por-tercero.component';
import { DetalleComponent } from './detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndiceComponent,
    AboutComponent,
    ResumenPorTerceroComponent,
    DetalleComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
