import { Component} from '@angular/core';

/*importamos la ruta activa para poder capturar el parametro*/
import {ActivatedRoute} from "@angular/router";

/*importamos el servicio*/
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {

producto:any=undefined;
cod:string=undefined;

  constructor(private route:ActivatedRoute, private ps:ProductosService) {
    /*obtenemos los parametros**/
    route.params.subscribe(parametros=>{
      //   console.log(parametros);
      // console.log(parametros['id']);
      ps.cargar_producto(parametros['id'])
      .subscribe(res=>{
        this.cod=parametros['id'];
        this.producto=res.json();
        console.log(this.producto);
      });
  })

}
}
