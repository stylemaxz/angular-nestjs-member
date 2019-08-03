import { FormGroup } from '@angular/forms';

export interface ILoginComponent {
    Url: any
    form: FormGroup
    onSubmit(): void
}

export interface iLogin {
    email: string,
    password: string,
    remember: boolean
}