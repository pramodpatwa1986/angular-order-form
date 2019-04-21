import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { OrderItem } from '../model/order-item';

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {
  orderFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  get formArray(): AbstractControl | null { 
    return this.orderFormGroup.get('formArray'); 
  }

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

    this.orderFormGroup = this.formBuilder.group({
      formArray: this.formBuilder.array([

        this.formBuilder.group({
          firstCtrl: ['', Validators.required]
        }),
        this.formBuilder.group ({
          secondCtrl: ['', Validators.required]
        })
      ])
    });

   /* this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });*/
  }

  onSubmit(){
    console.log( this.orderFormGroup);
  }

}
