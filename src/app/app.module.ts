import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { IndiceComponent } from './indice/indice.component';
import { AboutComponent } from './shared/about/about.component';
import { DetalleComponent } from './detalle/detalle.component';
import { ResumenComponent } from './resumen/resumen.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndiceComponent,
    AboutComponent,
    DetalleComponent,
    ResumenComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
