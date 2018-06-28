import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MisVehiculosPage } from '../mis-vehiculos/mis-vehiculos';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {

  constructor(public navCtrl: NavController) {
  }
  goToMisVehiculos(params){
    if (!params) params = {};
    this.navCtrl.push(MisVehiculosPage);
  }
}
