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
          replaceUrl: true,
          state: {
            username: this.mdl_username,
            password: this.mdl_password
          }
      }

      this.router.navigate(['login'], parametros);

  }


}
