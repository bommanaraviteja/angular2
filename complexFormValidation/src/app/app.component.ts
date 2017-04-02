import { Component, AfterViewChecked, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  formErrors = {
  'name': '',
  'hemail': '',
  'cccpassword': '',
  'cpassword': ''
};
validationMessages = {
  'name': {
    'required':      'Name is required.',
    'minlength':     'Name must be at least 4 characters long.',
    'maxlength':     'Name cannot be more than 24 characters long.'
    
  },
  'hemail':{
    'required':      'Email is required.',
    'pattern': 'Email is invalid'
  },
  'cpassword':{
    'required': 'Password is required'
  },
  'cccpassword':{
    'validateEqual': 'Password mismatch',

  }

};
heroForm: NgForm;
@ViewChild('heroForm') currentForm: NgForm;

ngAfterViewChecked() {
  this.formChanged();
}
formChanged() {
  if (this.currentForm === this.heroForm) { return; }
  this.heroForm = this.currentForm;
  if (this.heroForm) {
    this.heroForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
  }

}

onValueChanged(data?: any) {
  if (!this.heroForm) { return; }
  const form = this.heroForm.form;

  for (const field in this.formErrors) {
    // clear previous error message (if any)
    this.formErrors[field] = '';
    const control = form.get(field);

    if (control && control.dirty && !control.valid) {
      const messages = this.validationMessages[field];
      for (const key in control.errors) {
        this.formErrors[field] += messages[key] + ' ';
      }
    }
  }
}
}

