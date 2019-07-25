import { Routes, RouterModule } from '@angular/router'
import { AuthUrl } from './authentication.url';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';
import { BootstrapElementsComponent } from './components/bootstrap-elements/bootstrap-elements.component';
import { CardsComponent } from './components/cards/cards.component';
import { WidgetsComponent } from './components/widgets/widgets.component';
import { MembersComponent } from './components/members/members.component';
import { MemberCreateComponent } from './components/member-create/member-create.component';

const RoutesList: Routes = [
    { path: '', redirectTo: AuthUrl.Dashboard, pathMatch: 'full' },
    { path: AuthUrl.Dashboard, component: DashboardComponent },
    { path: AuthUrl.Setting, component: SettingComponent },
    { path: AuthUrl.Profile, component: ProfileComponent },
    { path: AuthUrl.Element, component: BootstrapElementsComponent },
    { path: AuthUrl.Cards, component: CardsComponent },
    { path: AuthUrl.Widgets, component: WidgetsComponent },
    { path: AuthUrl.Members, component: MembersComponent },
    { path: AuthUrl.MemberCreate, component: MemberCreateComponent },
];

export const AuthenticationRouting = RouterModule.forChild(RoutesList)
