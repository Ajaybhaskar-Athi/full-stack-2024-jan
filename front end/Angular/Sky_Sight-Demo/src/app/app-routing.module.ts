import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkysightComponent } from './modules/skysight/page/skysight/skysight.component';
import { HeadComponent } from './modules/skysight/components/head/head.component';
import { DumCardComponent } from './modules/skysight/components/dum-card/dum-card.component';
import { SkysightCardComponent } from './modules/skysight/components/skysight-card/skysight-card.component';
import { SigninComponent } from './modules/skysight/components/signin/signin.component';
import { ComComponent } from './modules/skysight/components/com/com.component';
const routes: Routes = [
  {
    path: '', //quando o caminho for vazio
    redirectTo: '/signin',
    pathMatch: 'full'
  },
  {
    path:'About',
    component:DumCardComponent
  },
  {
    path: 'skysight',
    component: SkysightComponent
    // component:SkysightCardComponent
  },
  {
path:'signin',
component:SigninComponent
  },
  {
    path:'WeatherApp',
    component:HeadComponent
  },
{path: 'Game',component:ComComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
