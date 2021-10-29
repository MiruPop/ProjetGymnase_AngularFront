import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymnaseListPageComponent } from './gymnase-list-page/gymnase-list-page.component';

const routes: Routes = [
  { path: "gymnase/liste", component: GymnaseListPageComponent }
  ,{ path: "gymnase/add", component: GymnaseListPageComponent }
  ,{ path: "gymnase/delete/{{id}}", component: GymnaseListPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
