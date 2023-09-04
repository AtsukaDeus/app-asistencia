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

  constructor(private router: Router) { 


  }

  ngOnInit() {
  
  }

  irPrincipal(){
      let parametros: NavigationExtras = {
        state: {
          username: this.mdl_username,
          password: this.mdl_password
        }
      }

      this.router.navigate(['principal'], parametros);
  }

  irSignup(){
    this.router.navigate(['signup']);
  }

}
