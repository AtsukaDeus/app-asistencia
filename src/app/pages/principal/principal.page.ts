import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  username: string = "";
  password: string = "";


  constructor(private router: Router) { 


  }

  ngOnInit() {

    let parametros = this.router.getCurrentNavigation();
    
    if(parametros?.extras.state){
        this.username = parametros.extras.state['username'];
        this.password = parametros.extras.state['password'];
    }

  }




}
