import { Component } from '@angular/core';

/*importamos el servicio*/
import {InformacionService} from "../../services/informacion.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: []
})
export class AboutComponent  {

  constructor(public is:InformacionService) { }



}
