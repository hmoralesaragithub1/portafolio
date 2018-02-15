import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

@Injectable()
export class ProductosService {

  /*arreglo de productos*/
  productos:any[]=[];
  cargando_productos:boolean=true;
  constructor(private http:Http) {
    this.cargar_productos();
   }

   public cargar_producto(id:string){
     return this.http.get(`https://webpageangular.firebaseio.com/productos/${id}.json`);
   }

  public cargar_productos(){

    if(this.productos.length==0){
      this.cargando_productos=true
      this.http.get('https://webpageangular.firebaseio.com/productos_idx.json')
      .subscribe(res=>{
        // console.log(res.json());
        /*asignando un delay para ver la animacion del loader*/
        setTimeout(()=>{
          this.productos=res.json();
          this.cargando_productos=false;
        },1500);

      });
    }
  }

}
