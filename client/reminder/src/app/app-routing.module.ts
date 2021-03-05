import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasklistComponent } from './components/tasklist/tasklist.component';


const routes: Routes = [{
  path:'', redirectTo:'tasks', pathMatch:'full'
},
{
  path:'tasks' , component: TasklistComponent
},
{
  path:'tasks/:id' , component: TasklistComponent
}]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
