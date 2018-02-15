import { Component} from '@angular/core';

/*importamos el servicio*/
import {InformacionService} from "../../services/informacion.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'

})
export class FooterComponent{
  anio:number = new Date().getFullYear();

  constructor(public is:InformacionService){

  }

}
