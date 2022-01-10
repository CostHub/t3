import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RouterModule} from "@angular/router";
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent } from './app.component';
import {BoardComponent} from "./components/board/board.component";
import { CardComponent } from './components/card/card.component';

import { DonePageComponent } from "./store/containers/done-page/done-page.component";
import { StaffPageComponent } from "./store/containers/staff-page/staff-page.component";
import { LogoutPageComponent } from "./store/containers/logout-page/logout-page.component";
import { IncidentsPageComponent } from "./store/containers/incidents-page/incidents-page.component";
import { AppRoutingModuleModule } from "./app-routing-module/app-routing-module.module";
import { LoginPageComponent } from './store/containers/login-page/login-page.component';
import { CardsFormComponent } from './components/cards-form/cards-form.component';




@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CardComponent,
    DonePageComponent,
    StaffPageComponent,
    LogoutPageComponent,
    IncidentsPageComponent,
    LoginPageComponent,
    CardsFormComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModuleModule,
        FormsModule,
        StoreModule.forRoot(  reducers, {
            metaReducers
        }),
        StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
        EffectsModule.forRoot([AppEffects]),
        RouterModule,
        StoreRouterConnectingModule.forRoot(),
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
