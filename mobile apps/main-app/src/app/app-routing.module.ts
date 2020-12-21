import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
    path: 'category',
    loadChildren: () => import('./category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'address',
    loadChildren: () => import('./manage-address/manage-address.module').then( m => m.ManageAddressPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'searc-modal',
    loadChildren: () => import('./searc-modal/searc-modal.module').then( m => m.SearcModalPageModule)
  },
  {
    path: 'no-internet',
    loadChildren: () => import('./no-internet/no-internet.module').then( m => m.NoInternetPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'choose-address',
    loadChildren: () => import('./choose-address/choose-address.module').then( m => m.ChooseAddressPageModule)
  },
  {
    path: 'order-placed/:id',
    loadChildren: () => import('./order-placed/order-placed.module').then( m => m.OrderPlacedPageModule)
  },
  {
    path: 'all-order',
    loadChildren: () => import('./all-order/all-order.module').then( m => m.AllOrderPageModule)
  },
  {
    path: 'view-order/:id',
    loadChildren: () => import('./view-order/view-order.module').then( m => m.ViewOrderPageModule)
  },
  {
    path: 'rating',
    loadChildren: () => import('./rating/rating.module').then( m => m.RatingPageModule)
  },

  {
    path: 'feedback',
    loadChildren: () => import('./viewfeedback/viewfeedback.module').then( m => m.ViewfeedbackPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
