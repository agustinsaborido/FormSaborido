import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.scss'
})
export class TemplateDrivenComponent {

  // Modelo de formulario
  // {
  //  name: '',
  //  lastname: '',
  //  email: '',
  // contraseña : ''
  // }

myFormModel= {
  name: '',
  lastname: '',
  email: '',
  contrasena : ''
}

onSubmit(ngForm: NgForm): void{
  // if()
  console.log(ngForm);
  if(ngForm.valid){

    Swal.fire({
      title: 'enviado',
      icon: 'success',
    });
    console.log(ngForm.form.value);
  } else{
    ngForm.form.markAllAsTouched();
    // Swal.fire({
    //   title: 'error',
    //   icon: 'error',
    // })
  }
}

}
