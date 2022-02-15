import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/page/about/about.component';
import { ContactComponent } from './components/page/contact/contact.component';
import { HomeComponent } from './components/page/home/home.component';
import { ServiceComponent } from './components/page/service/service.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "service", component: ServiceComponent},
  {path: "contact", component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
