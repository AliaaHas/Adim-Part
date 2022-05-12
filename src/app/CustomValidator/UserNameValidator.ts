import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";




 export function  forbiddenNameValidator(control: AbstractControl): ValidationErrors | null  {
    const forbidden = /(admin)|(user)/i.test(control.value);
    return forbidden ? {forbiddenName: {value: control.value}} : null;
  };







