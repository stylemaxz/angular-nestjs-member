import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedModule } from '../shared/shared.module';
import { SettingComponent } from './components/setting/setting.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [DashboardComponent, SettingComponent, ProfileComponent],
    imports: [
        CommonModule,
        AuthenticationRouting,
        SharedModule
    ]
})
export class AuthenticationModule { }
