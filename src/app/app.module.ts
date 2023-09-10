import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './base/base.component';
import { LoginComponent } from './login/login.component';
import { ListExpenditureComponent } from './base/list-expenditure/list-expenditure.component';
import { AddExpenditureComponent } from './base/add-expenditure/add-expenditure.component';
import { DetailExpenditureComponent } from './base/detail-expenditure/detail-expenditure.component';
import { UpdateExpenditureComponent } from './base/update-expenditure/update-expenditure.component';
import { HistoriqueExpenditureComponent } from './base/historique-expenditure/historique-expenditure.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    LoginComponent,
    ListExpenditureComponent,
    AddExpenditureComponent,
    DetailExpenditureComponent,
    UpdateExpenditureComponent,
    HistoriqueExpenditureComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
