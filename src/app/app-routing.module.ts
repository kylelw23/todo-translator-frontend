import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, AdminGuard } from './auth.guard';
import { AdminComponent } from './components/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { UserUsageComponent } from './components/userusage/userusage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  // other routes
  { path: 'admin', component: AdminComponent, canActivate: [AdminGuard] },
  { path: 'todo', component: TodoListComponent, canActivate: [AuthGuard] },
  {
    path: 'userusage/:userid',
    component: UserUsageComponent,
    canActivate: [AdminGuard],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
