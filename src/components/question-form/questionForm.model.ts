import { Question } from '@/interfaces/question.interface';
import { FormValidator, FormValidatorConst } from '@/utils/form.utils';

export interface FormControl {
  value: any,
  validators: any
}

// export interface FormValidator {
//   [key: string]: {
//     value: string | number | boolean,
//     message: string
//   }
// }

export interface QuestionFormModel {
  question: FormControl,
  type: FormControl,
  level: FormControl,
}

export const QUESTION_FORM_VALUES: Partial<Question> = {
  question: null,
  type: null,
  level: null,
}

export const QUESTION_FORM: QuestionFormModel = {
  question: {
    value: null,
    validators: {
      maxLength: {
        value: 250,
        message: 'Max length 250 characters'
      },
      minLength: {
        value: 10,
        message: 'Min length 10 characters'
      },
      required: {
        value: true,
        message: 'Field is required'
      }
    }
  },
  type: {
    value: null,
    validators: {
      required: {
        value: true,
        message: 'Field is required'
      }
    }
  },
  level: {
    value: null,
    validators: {
      required: {
        value: true,
        message: 'Field is required'
      }
    }
  },
}

export const QUESTION_FORM_VALIDATORS_FN = {
  question: [FormValidatorConst.isRequired, FormValidatorConst.maxLength ]
}

// export const QUESTION_FORM_VALIDATORS: { [key: string]: FormValidator } = {
//   question:
//     {
//       maxLength: {
//         value: 250,
//         message: 'Max length 250 characters'
//       },
//       minLength: {
//         value: 10,
//         message: 'Min length 10 characters'
//       },
//       required: {
//         value: true,
//         message: 'Field is required'
//       }
//     }
//   ,
//   type:
//     {
//       required: {
//         value: true,
//         message: 'Field is required'
//       }
//     }
//   ,
//   level:
//     {
//       required: {
//         value: true,
//         message: 'Field is required'
//       }
//     }
// }
