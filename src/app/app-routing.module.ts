import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoApiRequestPageComponent } from './components/bo-api-request-page/bo-api-request-page.component';
import { ResultPageComponent } from './components/result-page/result-page.component';
import { SelectPageComponent } from './components/select-page/select-page.component';

const routes: Routes = [
  {path: 'selectPage', component: SelectPageComponent},
  {path: 'resultPage', component: ResultPageComponent},
  {path: 'boApiRequestPage', component: BoApiRequestPageComponent},
  {path: "", component: SelectPageComponent},
  {path: '', component: SelectPageComponent},
  {path: '**', component: SelectPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
