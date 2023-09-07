import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-retrive',
  templateUrl: './retrive.page.html',
  styleUrls: ['./retrive.page.scss'],
})
export class RetrivePage implements OnInit {

  credencial_user: string = "";
  credencial_pass: string = "";


  credencial_user_confirmation: string = "";
  new_credencial_pass: string = "";

  constructor(private router: Router) { }

  ngOnInit() {

    let datos_usuario = this.router.getCurrentNavigation();

    if (datos_usuario?.extras.state){
      this.credencial_user = datos_usuario.extras.state["username_login"];

    }
  }

  cambiarContrasena(){

    if (this.credencial_user_confirmation == this.credencial_user) {
      this.new_credencial_pass = this.credencial_pass;

      let parametros: NavigationExtras = {
        state: {
          username_retrive: this.credencial_user,
          password_retrive: this.new_credencial_pass
        },
        replaceUrl: true,
      }

      this.router.navigate(['login'], parametros);
    }
    else{
      console.error("El usuario no existe");
    }

  }

}
