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

    let datos_registrarse = this.router.getCurrentNavigation();

    if (datos_registrarse?.extras.state){

      this.credencial_user = datos_registrarse.extras.state['username'];
      this.credencial_pass = datos_registrarse.extras.state['password'];
    }

  }

  irPrincipal(){
      
      if(this.mdl_username == this.credencial_user && this.mdl_password == this.credencial_pass){
          
        let parametros: NavigationExtras = {
            replaceUrl: true,
            state: {
              username: this.mdl_username,
              password: this.mdl_password
            }
          }

          this.router.navigate(['principal'], parametros);
      }
      else{
        // integrar mensaje flotante
      }
      
  }

  irSignup(){
    this.router.navigate(['signup']);
  }

}
