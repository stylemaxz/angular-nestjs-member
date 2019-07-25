import { Routes, RouterModule } from '@angular/router'
import { AuthUrl } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
const RoutesList: Routes = [
    { path: '', redirectTo: AuthUrl.Dashboard, pathMatch: 'full' },
    { path: AuthUrl.Dashboard, component: DashboardComponent },
    { path: AuthUrl.Setting, component: SettingComponent },
    { path: AuthUrl.Profile, component: ProfileComponent }
];

export const AuthenticationRouting = RouterModule.forChild(RoutesList)