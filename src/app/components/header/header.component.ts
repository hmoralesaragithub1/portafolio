import { Component} from '@angular/core';

/*importamos el servicio*/
import {InformacionService} from "../../services/informacion.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'

})
export class HeaderComponent {

/*instanciamos el servicio*/
constructor (public is:InformacionService){

}

}
