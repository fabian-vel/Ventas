import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './component/sales-list/sales-list.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [
  //{path: 'home', component: HomeComponent},
  {path: 'view', component: ViewComponent},
  {path: 'sales-list', component: SalesListComponent}
  //{path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
