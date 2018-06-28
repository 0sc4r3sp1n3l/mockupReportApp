import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
  }
  goToCrearCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CrearCuentaPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }
}
