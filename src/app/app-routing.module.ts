import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'destination', loadChildren: () => import('./destination/destination.module').then(m => m.DestinationModule) },
  { path: 'crew', loadChildren: () => import('./crew/crew.module').then(m => m.CrewModule) },
  { path: 'technology', loadChildren: () => import('./technology/technology.module').then(m => m.TechnologyModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
