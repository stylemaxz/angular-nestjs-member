import { Component, OnInit } from '@angular/core';
import { AppUrl } from 'src/app/app.url';
import { IRregisterComponent } from './register.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements IRregisterComponent {
    
    constructor(
        private builder: FormBuilder   
    ) { 
        this.initialCreateFormData()
    }
    
    Url = AppUrl
    form: FormGroup;

    // ลงทะเบียน
    onSubmit() {
        console.log(this.form.value)
    }

    //สร้าง form
    private initialCreateFormData() {
        this.form = this.builder.group({
            firstName: [],
            lastName: [],
            email: [],
            password: [],
            cpassword: []
        })
    }
}