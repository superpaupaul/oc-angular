import { AuthGuard } from './services/auth-guard.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule } from '@angular/router';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';

const appRoutes = [
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent},
  { path: 'appareils/:id',canActivate: [AuthGuard], component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent},
  { path: 'auth', component: AuthComponent},
  {path: '', canActivate: [AuthGuard], component: AuthComponent},
  {path: 'not-found', component: FourOhFourComponent},
  {path: '**', redirectTo: 'not-found'}
]


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    FourOhFourComponent,
    EditAppareilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ // là où on met les services
    AuthService,
    AppareilService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
