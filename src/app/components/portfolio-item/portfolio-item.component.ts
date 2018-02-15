import { Component} from '@angular/core';

/*importamos la ruta activa para poder capturar el parametro*/
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {

  constructor(private route:ActivatedRoute) {
    /*obtenemos los parametros**/
    route.params.subscribe(parametros=>{
        console.log(parametros);
      console.log(parametros['id']);
    });
  }



}
