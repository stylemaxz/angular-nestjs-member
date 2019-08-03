import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { iLogin } from 'src/app/components/login/login.interface';

@Injectable()
export class AccountService {

    // เข้าสู้ระบบ
    onLogin(model: iLogin) {
        return new Promise((resolve,reject) => {
            resolve(model)
        })
    }

    // ลงทะเบียน
    onRegister(model: IRegister) {
        console.log(model)
        return new Promise((resolve, reject) => {
            resolve(model)
        })
    }
}