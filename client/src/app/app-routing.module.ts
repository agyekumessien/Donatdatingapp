import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './_View/home/home.component';
import { JumbotronComponent } from './_Layout/jumbotron/jumbotron.component';

const routes: Routes = [

  {path: "jumbotron", component: JumbotronComponent},
 
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
