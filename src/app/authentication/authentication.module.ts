import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthenticationRouting } from './authentication.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        AuthenticationRouting,
        SharedModule
    ]
})
export class AuthenticationModule { }
