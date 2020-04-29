import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cliente/:id', component: ClienteComponent },
  { path: '**', component: Page404Component },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
