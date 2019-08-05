import { Injectable } from "@angular/core";
import { IRegister } from 'src/app/components/register/register.interface';
import { iLogin } from 'src/app/components/login/login.interface';

@Injectable()
export class AccountService {

    userItems: IAccount[] = [
        {
            id: 1,
            firstName: 'Kamin',
            lastName: 'Konggawai',
            position: 'CEO',
            email: 'stylemaxz@gmail.com',
            password: '111111',
            image: 'https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg',
            create: new Date(),
            update: new Date()
        }
    ]

    // เข้าสู้ระบบ
    onLogin(model: iLogin) {
        return new Promise((resolve,reject) => {
            const userLogin = this.userItems.find(item => item.email === model.email && item.password === model.password)
            if(!userLogin) return reject({Message: 'username or password invalid'})
            resolve(userLogin)
        })
    }

    // ลงทะเบียน
    onRegister(model: IRegister) {
        return new Promise((resolve, reject) => {
            model['id'] = Math.random()
            this.userItems.push(model)
            resolve(model)
        })
    }
}

export interface IAccount {
    firstName: string,
    lastName: string,
    email: string,
    password: string,

    id?: any,
    position?: string,
    image?: string,
    create?: Date,
    update?: Date
}