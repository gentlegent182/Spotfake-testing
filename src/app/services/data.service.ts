import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage, private mibasededatos : Storage, private http: HttpClient) {
    this.init();
   }

   init() {
    this.storage.create();
   }

   agregar(){
    this.mibasededatos.set("asdf", { nombre: "asdf" });
    }
   obtenerNombre(){
    this.mibasededatos.get( "nombre").then((val) => { 
      console.log('El nombre de la cancion es', val);
  });
 }
}
