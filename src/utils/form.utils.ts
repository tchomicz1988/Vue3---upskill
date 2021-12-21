import { SelectOption } from '@/types/form.interfaces';

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
