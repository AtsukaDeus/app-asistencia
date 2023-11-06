import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  ruta_api = 'https://fer-sepulveda.cl/API_PRUEBA_2/api-service.php/'

  constructor(private http: HttpClient) { }

  createUser(usuario: string, correo: string, contrasena: string, nombre: string, apellido: string){
    return this.http.post(this.ruta_api, {
      nombreFuncion: 'UsuarioAlmacenar',
      parametros: [
        usuario, correo, contrasena, nombre, apellido
      ]
    }).pipe();
  }
  

  loginUser(usuario: string, contrasena: string){
    return this.http.post(this.ruta_api, {
      nombreFuncion: 'UsuarioLogin',
      parametros: [usuario, contrasena]
    }).pipe();
  }


  updatePassword(usuario: string, contrasenaNueva: string, contrasenaActual: string){
    return this.http.patch(this.ruta_api, {
      nombreFuncion: 'UsuarioModificarContrasena',
      parametros: [usuario, contrasenaNueva, contrasenaActual]
    }).pipe();
  }

}
