import { SelectOption } from '@/interfaces/form.interfaces';

export function enumToOptions(enumToTransform: any, keyAsValue = false): SelectOption[] {
  const options: SelectOption[] = [];

  for(const key in enumToTransform){
    if(enumToTransform.hasOwnProperty(key) && !!enumToTransform[key]) {
      options.push({
        value: keyAsValue ? key : enumToTransform[key],
        label: enumToTransform[key],
      });
    }
  }

  return options;
}

export const FormValidatorConst = {
  isRequired: (value: string | number): boolean => {
    return !!value?.toString()?.length;
  },
  maxLength: (value: string, maxLength: number): boolean => {
    return value?.length > maxLength
  },
  minLength: (value: string, minLength: number): boolean => {
    return value?.length < minLength
  }
}

export class FormValidator {
  static isRequired(value: string | number): boolean {
    return !!value?.toString()?.length;
  }

  static maxLength(value: string, maxLength: number): boolean {
    return value?.length > maxLength
  }

  static minLength(value: string, minLength: number): boolean {
    return value?.length < minLength
  }

  static checkValidity() {

  }
}
