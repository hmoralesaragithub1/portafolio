import { Injectable } from '@angular/core';

/*importamos http*/
import {Http} from "@angular/http";

@Injectable()
export class InformacionService {

  /*creamos un objeto vacio*/
  info:any={};
  /*creamos arreglo vacio*/
  equipo:any[]=[];
  data_cargada:boolean=false;
  data_cargada_sobre_nosotros:boolean=false;

  constructor(public http:Http) {
      this.carga_info();
      this.carga_sobre_nosotros();
   }

   public carga_info(){
     this.http.get("https://webpageangular.firebaseio.com/equipo.json").
     subscribe(data=>{

       this.equipo=data.json();
       this.data_cargada=true;
       // console.log(this.equipo);
     });
   }

   public carga_sobre_nosotros(){
     this.http.get("assets/data/info.pagina.json").
     subscribe(data=>{
       // console.log(data.json());
       this.info=data.json();
       this.data_cargada_sobre_nosotros=true;
     });
   }

}
