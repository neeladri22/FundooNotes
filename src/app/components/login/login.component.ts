import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServicesService } from 'src/app/services/userService/user-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;


  constructor(private formBuilder: FormBuilder, private user: UserServicesService,private router:Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]]

    });

  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      let payload = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
      }
      this.user.login(payload).subscribe((response: any) => {
        console.log(response)
        localStorage.setItem("token",response.id)
        this.router.navigateByUrl('/dashboard/notes');
      })

    }


  }
}


