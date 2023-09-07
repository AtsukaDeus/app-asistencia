import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  mdl_username: string = "";
  mdl_password: string = "";

  credencial_user: string = "";
  credencial_pass: string = "";

  constructor(private router: Router) { 


  }
  
  ngOnInit() {

    let parametros = this.router.getCurrentNavigation();

    if (parametros?.extras.state){
      if(parametros.extras.state['username_signup']){
        console.log("Se pasaron los datos del signup");
        this.credencial_user = parametros.extras.state['username_signup'];
        this.credencial_pass = parametros.extras.state['password_signup'];
      }

      if(parametros.extras.state['password_retrive']){
        console.log("Se pasó el password del retrive");
        this.credencial_user = parametros.extras.state['username_retrive'];
        this.credencial_pass = parametros.extras.state['password_retrive'];
      }

    }
    else{
      console.log('No se pasaron datos en la navegacion');
    }

  }

  irPrincipal(){
      
      if(this.mdl_username == this.credencial_user && this.mdl_password == this.credencial_pass){
          
        let parametros: NavigationExtras = {
            state: {
              username: this.credencial_user,
              password: this.credencial_pass
            },
            replaceUrl: true,
          }

          this.router.navigate(['principal'], parametros);
      }
      else{
        console.log('No se pasaron los datos o no son iguales');
        console.log(this.credencial_user);
        console.log(this.credencial_pass);

      }
      
  }

  irSignup(){
    this.router.navigate(['signup'], {replaceUrl: true});
  }

  irRetrive(){
    let parametros: NavigationExtras = {
      state: {
        username_login: this.credencial_user,
      },
      replaceUrl: true,
    }
    this.router.navigate(['retrive'], parametros);
  }

}
