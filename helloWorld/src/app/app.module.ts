import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { LoginPage } from '../pages/login/login';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';
import { PerfilPage } from '../pages/perfil/perfil';
import { AdministraciNPage } from '../pages/administraci-n/administraci-n';
import { ReportarRoboPage } from '../pages/reportar-robo/reportar-robo';
import { BotonDePagoPage } from '../pages/boton-de-pago/boton-de-pago';
import { MisVehiculosPage } from '../pages/mis-vehiculos/mis-vehiculos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    LoginPage,
    CrearCuentaPage,
    PerfilPage,
    AdministraciNPage,
    ReportarRoboPage,
    BotonDePagoPage,
    MisVehiculosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    LoginPage,
    CrearCuentaPage,
    PerfilPage,
    AdministraciNPage,
    ReportarRoboPage,
    BotonDePagoPage,
    MisVehiculosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}