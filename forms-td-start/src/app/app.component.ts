import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultOption = "pet";
  answer="";
  suggestedUser = "Suggested User";

  user = {
    username :this.suggestedUser,
    email:'',
    secretQuestion:'',
    questionAnswer:'',
    gender:''
  }

  genders = ["Male", "Female"];
  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmit(form: NgForm){
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secretQuestion = form.value.secret;
    this.user.questionAnswer = form.value.answer;
    this.user.gender = form.value.gender;
  }
}
