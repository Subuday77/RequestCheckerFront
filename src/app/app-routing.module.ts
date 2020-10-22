import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultPageComponent } from './components/result-page/result-page.component';

const routes: Routes = [
  {path: 'resultRage', component: ResultPageComponent},
  {path: "", component: ResultPageComponent},
  {path: '', component: ResultPageComponent},
  {path: '**', component: ResultPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
