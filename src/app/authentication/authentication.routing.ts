import { Routes, RouterModule } from '@angular/router'
import { AuthUrl } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const RoutesList: Routes = [
    { path: '', redirectTo: AuthUrl.dashboard, pathMatch: 'full' },
    { path: AuthUrl.dashboard, component: DashboardComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RoutesList)