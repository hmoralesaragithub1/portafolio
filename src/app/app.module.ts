import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/*modulo http*/
import {HttpModule} from "@angular/http";

/*routes*/
import {app_routing} from "./app.routes"

/*servicios*/
import {InformacionService} from "./services/informacion.service"
import {ProductosService} from "./services/productos.service";

/*components*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    PortfolioItemComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpModule
  ],
  providers: [InformacionService,ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
