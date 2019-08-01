import { FormGroup } from '@angular/forms';

export interface IRregisterComponent
 {
    form: FormGroup
    Url: any
    onSubmit()

}

export interface IRegister {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    cpassword: string,
}