import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  username: string = "";
  password: string = "";


  constructor(private router: Router, private alertController: AlertController) { 

  }

  ngOnInit() {

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (storedUsername && storedPassword) {
        
        this.username = storedUsername;
        this.password = storedPassword;
    }
    else{
      this.irLogin();
    }

  }

  irChange(){
    this.router.navigate(['change'], {replaceUrl: true})
  }

  irLogin(){
    this.router.navigate(['login'], {replaceUrl: true})
  }

  async cerrarSesion(){
    localStorage.removeItem("username");
    localStorage.removeItem("password");

    const alert = await this.alertController.create({
      header: 'Se ha cerrado la sesión...',
      subHeader: 'Vuelve pronto!!',
      buttons: [
        {
          text: 'Continuar',
          handler: () => {
            this.irLogin();
          }
        }
      ]
    });
    
    await alert.present();

  }

}
