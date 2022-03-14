import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FunWorldComponent } from './about/fun-world/fun-world.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BeachDetailComponent } from './beaches/beach-detail/beach-detail.component';
import { BeachesComponent } from './beaches/beaches.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: HomeComponent },
  {
    path: 'about',
    component: AboutComponent,
    canActivateChild: [AuthGuard],
    children: [{ path: 'fun', component: FunWorldComponent }],
  },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'beaches',
    component: BeachesComponent,
    canActivate: [AuthGuard],
  },
  { path: 'beaches/:id', component: BeachDetailComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
