import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GymnaseService } from './service/gymnase.service';
import { AccueilComponent } from './accueil/accueil/accueil.component';
import { GymnaseListPageComponent } from './GymnaseListPage/gymnase-list-page/gymnase-list-page.component';
import { CardComponent } from './card/card/card.component';
import { GymnaseDetailsComponent } from './gymnase-details/gymnase-details/gymnase-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    GymnaseListPageComponent,
    CardComponent,
    GymnaseDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
