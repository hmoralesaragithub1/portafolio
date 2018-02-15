import { Component} from '@angular/core';

/*importamos el servicio*/
import {InformacionService} from "../../services/informacion.service";

import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {

/*instanciamos el servicio*/
constructor (public is:InformacionService, private router:Router){

}

buscar_producto( termino: string) {
  console.log(termino);
  this.router.navigate(['buscar',termino]);
}

}
