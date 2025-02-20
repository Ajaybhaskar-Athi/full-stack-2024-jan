import { UpperCasePipe } from '@angular/common';
import { Component, viewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent {
   router:Router = new Router();
    show(fc:NgModel,p:NgModel){
      console.log(fc);
      console.log(p);
    }
 
    submit(data: any,ch:NgModel) {
      alert(`Greetings, ${data.form.value.uname.toUpperCase() } ! As you explore today's weather updates, may you find joy in every raindrop and warmth in every sunbeam`);
      console.log(data.form.value.uname);
      // ch.checked=false;
      console.log(ch);
      // this.loginForm.resetForm();
      // Reset the form to clear input values
      data.reset();
      this.router.navigateByUrl('/WeatherApp');

    }
  }    