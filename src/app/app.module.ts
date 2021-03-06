import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';
import { CandidatosPage } from '../pages/candidatos/candidatos';
import { CandidatosDescricaoPage } from '../pages/candidatosDescricao/candidatosDescricao';
import { PerguntasPage } from '../pages/perguntas/perguntas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http'; 
import { CandidatosProvider } from '../providers/candidatos/candidatos';
import { CandidatosDescricaoProvider } from '../providers/candidatos-descricao/candidatos-descricao';
import { PerguntasProvider } from '../providers/perguntas/perguntas';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CandidatosPage,
    SobrePage,
    CandidatosDescricaoPage,
    PerguntasPage   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage,
    CandidatosPage,
    CandidatosDescricaoPage,
    PerguntasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CandidatosProvider,
    CandidatosDescricaoProvider,
    PerguntasProvider
  ]
})
export class AppModule {}
