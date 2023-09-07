import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  mdl_username: string = "";
  mdl_password: string = "";


  constructor(private router: Router) { }

  ngOnInit() {
  
  }

  irLogin(){

      
      let parametros: NavigationExtras = {
          state: {
            username_signup: this.mdl_username,
            password_signup: this.mdl_password
          },
          replaceUrl: true,
      }
      
      // integrar mensaje flotante de usuario creado!

      this.router.navigate(['login'], parametros);

  }


}
