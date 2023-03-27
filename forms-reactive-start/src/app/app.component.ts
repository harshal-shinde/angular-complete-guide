import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUserNames = ["hs", "pm"]


  ngOnInit() {
    this.signupForm = new FormGroup({
      userData : new FormGroup({
        username: new FormControl(null, Validators.required, this.forbiddenNames.bind(this)),
        email: new FormControl(null, [Validators.required, Validators.email],
          this.forBiddenEmails)
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    });
  }

  onSubmit() {
    console.log(this.signupForm);
  }

  getControls() {
    return ((<FormArray>this.signupForm.get('hobbies')).controls);
  }

  addHobby() {
  const control = new FormControl(null, Validators.required);
   (<FormArray>this.signupForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl):{[s:string]: boolean}{
    if(this.forbiddenUserNames.indexOf(control.value) == -1) {
      return {'nameIsForbiddne': false}
    }
    return null;
  }

  forBiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject)=> {
      setTimeout(()=> {
        if(control.value == 'hshinde@gmail.com') {
          resolve({'emailForbidden': true});
        } else resolve(null)
      }, 1500)
    })
    
    return null;
  }
}
