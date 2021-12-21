import {App} from "vue";

import BaseFormError from '@/components/shared/BaseFormError.vue';
import BaseFormInput from '@/components/shared/BaseFormInput.vue';

export function registerComponents(app: App): void {
    app.component('base-form-error', BaseFormError);
    app.component('base-form-input', BaseFormInput);
}