import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PerfilPage } from '../pages/perfil/perfil';
import { MisVehiculosPage } from '../pages/mis-vehiculos/mis-vehiculos';
import { AdministraciNPage } from '../pages/administraci-n/administraci-n';
import { ReportarRoboPage } from '../pages/reportar-robo/reportar-robo';
import { BotonDePagoPage } from '../pages/boton-de-pago/boton-de-pago';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { InicioPage } from '../pages/inicio/inicio';


import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToPerfil(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PerfilPage);
  }goToMisVehiculos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MisVehiculosPage);
  }goToAdministraciN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AdministraciNPage);
  }goToReportarRobo(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReportarRoboPage);
  }goToBotonDePago(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BotonDePagoPage);
  }goToLogin(params){
    if (!params) params = {};
    this.navCtrl.setRoot(LoginPage);
  }goToCrearCuenta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CrearCuentaPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }
}
