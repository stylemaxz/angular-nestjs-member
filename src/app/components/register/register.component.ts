import { Component, OnInit } from "@angular/core";
import { AppUrl } from "src/app/app.url";
import { IRregisterComponent } from "./register.interface";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { AlertService } from "src/app/shared/services/alert.service";
import { AccountService } from 'src/app/shared/services/account.servce';
import { Router } from '@angular/router';

declare const $;
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements IRregisterComponent {
  constructor(
    private builder: FormBuilder, 
    private alert: AlertService,
    private account: AccountService,
    private router: Router) {
    this.initialCreateFormData();
  }

  Url = AppUrl;
  form: FormGroup;

  // ลงทะเบียน
  onSubmit() {
    if (this.form.invalid) {
      return this.alert.something_wrong()
    }
    //ส่งข้อมูลไป server
    this.account.onRegister(this.form.value)
    .then(res => {
      this.alert.notify('ทำรายการสำเร็จ', 'info')
      this.router.navigate(['/', AppUrl.Login])
    })
    .catch(err => this.alert.notify(err.Message))
  }

  //สร้าง form
  private initialCreateFormData() {
    this.form = this.builder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.pattern(/^[A-z0-9]{6,15}$/)]],
      cpassword: ["", [Validators.required, this.comparePassword('password')]]
    });
  }

  private comparePassword(passwordFiled:string) {
    return function(confirm_password: AbstractControl){
      if (!confirm_password.parent) return
      const password = confirm_password.parent.get(passwordFiled)
      const passwordSubscribe = password.valueChanges.subscribe(() => {
        confirm_password.updateValueAndValidity()
        passwordSubscribe.unsubscribe()
      })
      if(confirm_password.value === password.value) 
        return
      return {compare: true}
    }
  }
}
