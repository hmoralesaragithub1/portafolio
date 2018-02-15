import { Injectable } from '@angular/core';

/*importamos http*/
import {Http} from "@angular/http";

@Injectable()
export class InformacionService {

  /*creamos un objeto vacio*/
  info:any={};
  data_cargada:boolean=false;

  constructor(public http:Http) {
      this.http.get("assets/data/info.pagina.json").
      subscribe(data=>{
        console.log(data.json());
        this.info=data.json();
        this.data_cargada=true;
      });
   }

}
