import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';




const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'all-order',
  //   pathMatch: 'full'
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'forgotpassord',
    loadChildren: () => import('./forgotpassord/forgotpassord.module').then( m => m.ForgotpassordPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'activate-otp',
    loadChildren: () => import('./activate-otp/activate-otp.module').then( m => m.ActivateOtpPageModule)
  },
 
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module').then( m => m.OrderPageModule)
  },

  {
    path: 'closed-order',
    loadChildren: () => import('./completed-order/completed-order.module').then( m => m.CompletedOrderPageModule)
  },
  {
    path: 'no-internet',
    loadChildren: () => import('./no-internet/no-internet.module').then( m => m.NoInternetPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
