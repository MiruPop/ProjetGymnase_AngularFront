import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil/accueil.component';
// import { GymnaseDetailsComponent } from './gymnase-details/gymnase-details/gymnase-details.component';
import { GymnaseListPageComponent } from './GymnaseListPage/gymnase-list-page/gymnase-list-page.component';

const routes: Routes = [
  { path: "gymnase/liste", component: GymnaseListPageComponent }
  ,{ path: "gymnase/add", component: GymnaseListPageComponent }
  ,{ path: "gymnase/delete/{{id}}", component: GymnaseListPageComponent }
  // ,{ path: "gymnase/nom", component: GymnaseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
