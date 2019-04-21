import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { PersonalData } from '../model/personal-data';
import { ContactRequest } from '../model/contact-request';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  countries = ['USA', 'Germany', 'Italy', 'France']

  requestTypes = ['Claim', 'Feedback', 'Help Request']
  nestedFormBuilder:FormBuilder ;
  constructor(private formBuilder: FormBuilder) { 
    this.nestedFormBuilder = formBuilder
    this.contactForm = this.createFormGroupWithBuilder(formBuilder);    
  }

  ngOnInit() {
  }

  createFormGroup() {
    return new FormGroup({
      personalData: new FormGroup({
        email: new FormControl(),
        mobile: new FormControl(),
        country: new FormControl()
       }),
      requestType: new FormControl(),
      text: new FormControl()
    });
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
     /* personalData: formBuilder.group({
        email: 'defaul@email.com',
        mobile: '',
        country: ''
      }),*/
      personalData : formBuilder.group(new PersonalData()),
      requestType: null,
      text: null,
      txt2 : null
    });
  }

  onSubmit(){
    /*const result : ContactRequest = Object.assign({}, this.contactForm.value)
    result.personalData = Object.assign({}, result.personalData);
    result.mytext = this.contactForm.controls['txt2'].value;
    console.log(JSON.stringify(result));*/
   // const result : ContactRequest = new ContactRequest(this.contactForm.value) ;
    //console.log(JSON.stringify(result));
    var result : ContactRequest = new ContactRequest()
    /*Object.keys(result).map((key) => {
      var control = this.contactForm.controls[key]
      if (control != undefined && control.value != '' && control.value != null){
          //if (key === 'personalData'){
            //console.log(key)
         // }
          result[key] = control.value
      }else{
        result[key] = undefined;
      }
    })
    console.log(JSON.stringify(result));    */
    result = <ContactRequest>this.transform(this.contactForm, result)
    
    
    //console.log(JSON.stringify(result)); 
    //console.log(this.contactForm.controls['personalData'])
    result.personalData =  this.transform(this.nestedFormBuilder.group(this.contactForm.controls['personalData'].value), result.personalData)
    result.personalData.country = [''+result.personalData.country+'']
    console.log(JSON.stringify(result)); 

  }
  
  transform (source: FormGroup, target : any) : any{
     //console.log (source)
    Object.keys(target).map((key) => {
      var control = source.controls[key]
      if (control != undefined && control.value != '' && control.value != null){
        target[key] = control.value
      }else{
        target[key] = undefined;
      }
    })
    return target;
  }
}
