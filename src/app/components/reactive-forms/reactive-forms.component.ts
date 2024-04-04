import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { noHomeroValidator } from '../../utils/validators';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  
  // Entidades que manipulan los formularios de angular.
  // FormGroup -> para agrupar otros controles y definir un objeto
  // FormControl -> manipula en valor de los campos (inputs, select, checkboxs, textarea)
  // FormArray -> manejar arrays de otros controles.

  // Modelo de formulario
  // {
  //  name: 'Matias',
  //  lastname: 'Gonzales',
  //  email: 'mati@hotmail.com'
  // }

myForm = this.formBuilder.group({
  name : this.formBuilder.control('', [noHomeroValidator]),
  lastName : this.formBuilder.control(''),
  email : this.formBuilder.control('', [
    Validators.email, 
    Validators.required
  ]),
  password: ['']  //esta sintáxis seria la forma corta de hacerlo
});

get emailControl() {
  return this.myForm.get('email');
}
get passwordControl(){
  return this.myForm.get('password');
}
get nameControl(){
  return this.myForm.get('name');
}


  constructor (private formBuilder : FormBuilder) {}
  
onSubmit(): void {
  // alert ('usuario creado' + JSON.stringify(this.myForm.value))
Swal.fire(
  {
    icon: 'success',
    title: 'Realizado',
    text: 'Usuario registrado',
  }
)
} 
}
