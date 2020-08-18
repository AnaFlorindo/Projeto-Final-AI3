import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { UserCreateComponent } from './registar_user/registaruser';
import { UserEditComponent } from './user-edit/user-edit.component';
import { LoginComponent } from './LoginComponent/Login_Component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
  //  path: 'registar',
    //component: UserCreateComponent,
  },
  {
    path: ':id',
    component: UserViewComponent,
  },
  {
    path: ':id/edit',
    component: UserEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
