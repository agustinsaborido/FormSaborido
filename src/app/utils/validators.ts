import { IfStmt } from "@angular/compiler";
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export const noHomeroValidator: ValidatorFn = (
    control: AbstractControl
    ) : ValidationErrors | null => {
    console.log(control);

    if (typeof control.value === 'string' && control.value.toLocaleLowerCase().includes('homero')){
        return{
            noHomero : true,
        };
    }

    return null;
}

