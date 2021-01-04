import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export interface DdValidationErrors {
  [key: string]: any;
}

export interface DdValidator {
  validate(value: any): DdValidationErrors | null;
  // registerOnValidatiorChange(fn: () => void): void
}

export class ProviderDataValidators {
  static email(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
          control.value
        ) &&
        control.value !== '' &&
        control.value !== null
      ) {
        return { email: { msg: 'Invalid email address.' } };
      } else {
        return null;
      }
    };
  }

  static numberRequired(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // Quick fix for failing cases in case of string in put
      const value = Number(control.value);
      if (!value && !Number.isFinite(value) && value !== null) {
        return { numberRequired: { msg: 'Number is required.' } };
      }
      return null;
    };
  }

  static required(msg = 'This field is required.'): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (
        control.value === '' ||
        control.value === undefined ||
        control.value === null ||
        control.value.toString().length === 0
      ) {
        return { required: { msg: msg } };
      } else if (control.value['id'] === null) {
        return { required: { msg: msg } };
      } else {
        return null;
      }
    };
  }

  static nullValidator(): ValidatorFn {
    return (value: any): { [key: string]: any } | null => {
      return null;
    };
  }
}
