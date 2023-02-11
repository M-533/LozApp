import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogComponent } from './log/log.component';
import { MachinesComponent } from './machines/machines.component';
import { ViewComponent } from './machines/view/view.component';
import { ManufacturingComponent } from './manufacturing/manufacturing.component';
import { ResourcesComponent } from './resources/resources.component';
import { RsFormComponent } from './resources/rs-form/rs-form.component';

const routes: Routes = [
  { path: 'login', component: LogComponent },
  { path: 'dashboard', component: DashboardComponent },
  {
    path: 'resources',
    component: ResourcesComponent,
    children: [{ path: 'form', component: RsFormComponent }],
  },
  { path: 'manufacturing', component: ManufacturingComponent },
  {
    path: 'machines',
    component: MachinesComponent,
    children: [{ path: 'view', component: ViewComponent }],
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
