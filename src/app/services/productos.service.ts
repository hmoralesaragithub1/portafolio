import { Injectable } from '@angular/core';

import {Http} from "@angular/http";

@Injectable()
export class ProductosService {

  /*arreglo de productos*/
  productos:any[]=[];
  productos_filtrados:any[]=[];

  cargando_productos:boolean=true;
  constructor(private http:Http) {
    this.cargar_productos();
   }

   public buscar_producto(termino:string){
     // console.log("Buscando producto");
     // console.log(this.productos.length);

     if(this.productos.length===0){
       this.cargar_productos().then(()=>{
         /*sabemos que termino la carga gracias a la promesa*/
         this.filtrar_productos(termino);
       });
     }else{
        this.filtrar_productos(termino);
     }


   }

   private filtrar_productos(termino:string){
     this.productos_filtrados=[];
     termino=termino.toLowerCase();
     this.productos.forEach(prod=>{
       // console.log(prod);
       if(prod.categoria.indexOf(termino)>=0 || prod.titulo.toLowerCase().indexOf(termino)>=0){
         this.productos_filtrados.push(prod);
       }
     });
   }

   public cargar_producto(id:string){
     return this.http.get(`https://webpageangular.firebaseio.com/productos/${id}.json`);
   }

  public cargar_productos(){

    if(this.productos.length==0){
      this.cargando_productos=true

        /*agregando promesas*/
        let promesa=new Promise((resolve,teject)=>{
          this.http.get('https://webpageangular.firebaseio.com/productos_idx.json')
          .subscribe(res=>{
            // console.log(res.json());
            /*asignando un delay para ver la animacion del loader*/
            setTimeout(()=>{
              this.productos=res.json();
              this.cargando_productos=false;
              resolve();
            },1500);

          });
        });
        return promesa;

    }
  }

}
