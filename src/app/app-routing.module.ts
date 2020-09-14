import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./token/token.module').then(m => m.TokenModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    canLoad: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/token',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
