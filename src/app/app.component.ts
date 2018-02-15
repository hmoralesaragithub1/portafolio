import { Component } from '@angular/core';
import {InformacionService} from "./services/informacion.service";
import {ProductosService} from "./services/productos.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/*
  title = 'Hola Mundo';
  description="Mi primera pagina";
  */
/*haciendo la llamada al constructor del servicio*/
constructor(public is:InformacionService, public ps:ProductosService){

}
}
