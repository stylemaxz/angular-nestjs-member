import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { ILoginComponent } from './login.interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertService } from 'src/app/shared/services/alert.service';
import { Router } from '@angular/router';
import { AuthUrl } from 'src/app/authentication/authentication.url';
import { AccountService } from 'src/app/shared/services/account.servce';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements ILoginComponent {
    constructor(
        private builder: FormBuilder,
        private alert: AlertService,
        private router: Router,
        private account: AccountService
    ) { 
        this.initialCreateFormData()
    }

    Url = AppUrl
    form: FormGroup;

    //เข้าสู่ระบบ
    onSubmit(): void {
        console.log(this.form.value)
        if(this.form.invalid){
            return this.alert.something_wrong()
        }
        this.account
            .onLogin(this.form.value)
            .then(res => {
                this.router.navigate(['/', AppUrl.Authen, AuthUrl.Dashboard])
            }).catch(err => {
                this.alert.notify(err.Message)
            })
    }

    // สร้าง form
    private initialCreateFormData() {
        this.form = this.builder.group({
            email: ['',Validators.required],
            password: ['',Validators.required],
            remember: [true]
        })
    }

}
