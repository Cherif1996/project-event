import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { GalaryComponent } from './galary/galary.component';
import { EquipeComponent } from './equipe/equipe.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { VideosComponent } from './videos/videos.component';
import { PartenairesComponent } from './partenaires/partenaires.component';

const routes: Routes = [
  {path: 'galary' , component: GalaryComponent},
  {path: 'agence' , component: ContactComponent},
  {path: 'equipe' , component: EquipeComponent},
  {path: 'service' , component: ServicesComponent},
  {path: 'portfolio' , component: PortfolioComponent},
  {path: 'vidéos' , component: VideosComponent},
  {path: 'partenaires' , component: PartenairesComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
