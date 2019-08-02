import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  // { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  // { path: 'map', loadChildren: './pages/tabs/map/map.module#MapPageModule' },
  // { path: 'notification', loadChildren: './pages/tabs/notification/notification.module#NotificationPageModule' },
  // { path: 'contact', loadChildren: './pages/tabs/contact/contact.module#ContactPageModule' },
  // { path: 'news', loadChildren: './pages/news/news.module#NewsPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
