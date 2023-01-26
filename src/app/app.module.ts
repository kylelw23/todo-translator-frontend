import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListModule } from './components/todo-list/todo-list.module';
import { LoginModule } from './components/login/login.module';
import { SignupModule } from './components/signup/signup.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/auth/auth.effects';
import { reducers } from './store/app.state';
import { TodoEffects } from './store/todo/todo.effects';
import { AuthGuard, AdminGuard } from './auth.guard';
import { AdminModule } from './components/admin/admin.module';
import { AdminEffects } from './store/admin/admin.effects';
import { UserUsageModule } from './components/userusage/userusage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    TodoListModule,
    LoginModule,
    SignupModule,
    AdminModule,
    UserUsageModule,
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AdminEffects, AuthEffects, TodoEffects]),
  ],
  providers: [AuthService, AuthGuard, AdminGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
