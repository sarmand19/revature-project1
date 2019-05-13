import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { ChatComponent } from './components/chat/chat.component';
import { Login2Component } from './components/login2/login2.component';
import { ReimbursementsComponent } from './components/reimbursements/reimbursements.component';
import { RequestFormComponent } from './components/request-form/request-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
  {
    // localhost:4200/signup should render
    // the SignupComponent in the base
    // router-outlet
    path: 'signup',
    component: SignupComponent
  }, {
    path: 'login',
    component: LoginComponent,
    // children: [
    //   {
    //     // localhost:4200/login/recover-password
    //     path: 'recover-password',
    //     component: PasswordRecoveryComponent
    //   }
    // ]
  }, {
    path: 'login2',
    component: Login2Component,
    // children: [
    //   {
    //     // localhost:4200/login/recover-password
    //     path: 'recover-password',
    //     component: PasswordRecoveryComponent
    //   }
    // ]
  }, {
    path: '',
    component: HomePageComponent 
    //component: LoginComponent
  }, {
    path: 'chat',
    component: ChatComponent
  },
  {
    path:'reimbursement',
    component: ReimbursementsComponent
  },
  {
    path:'form',
    component: RequestFormComponent
 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
