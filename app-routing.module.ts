import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserlistingComponent } from './userlisting/userlisting.component';
import { AuthGuard } from './gaurd/auth.guard';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
{path:'' , component : HomeComponent, canActivate:[AuthGuard]},
{path:'register' , component : RegisterComponent},
{path:'login' , component : LoginComponent},
{path:'About' , component : AboutComponent},
{path:'user' , component : UserlistingComponent ,canActivate:[AuthGuard]},
{ path: 'subjects', loadChildren: () => import('./subjects/subjects.module').then(m => m.SubjectsModule) },
{ path: 'store', loadChildren: () => import('./store/store.module').then(m => m.StoreModule) },

{path:'bar-chart' , component : MyBarChartComponent},
{path:'doughnut-chart' , component : MyDoughnutChartComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
