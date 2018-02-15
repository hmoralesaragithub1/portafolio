import { Component} from '@angular/core';

/*importamos la ruta activa para poder capturar el parametro*/
import {ActivatedRoute} from "@angular/router";

import {ProductosService} from "../../services/productos.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'

})
export class SearchComponent  {

  termino:string=undefined;

  constructor(private route:ActivatedRoute,private ps:ProductosService) {
    route.params.subscribe(parametros=>{
    this.termino=parametros['termino'] ;
    console.log(this.termino);
    ps.buscar_producto(this.termino);

    }

    );
   }


}
