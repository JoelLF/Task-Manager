import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaListComponent } from './components/area-list/area-list.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [  { path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'tasks/:AreaName', component: TasksListComponent },
{ path: 'area', component: AreaListComponent },
{ path: 'auth/signin', component: LoginComponent },
{ path: 'tasks/edit/:id', component: TaskDetailsComponent },
{ path: 'home', component: HomeComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'add/:AreaName', component: AddTaskComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
