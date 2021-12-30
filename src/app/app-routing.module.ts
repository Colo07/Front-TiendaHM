import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { DetailsComponent } from './components/details/details.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutUsComponent } from './components/aboutUs/about-us.component';

const routes: Routes = [
  {
  path:'',
  redirectTo:'shop',
  pathMatch:'full'
  },

  {
  path:'shop',
  component: CardsComponent
  },

  {
  path:'details/:id',
  component: DetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },

  {
    path: 'aboutus',
    component:AboutUsComponent
  },

{
  path:'**',
  redirectTo:'home',
  pathMatch :'full', }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
