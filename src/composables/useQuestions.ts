import {reactive, Ref, ref} from 'vue';
import { Question } from '@/types/question.interface';
import {FILTERS_INIT_VALUES} from "@/constants/questions-filters.constants";

const questions: Ref<Question[]> = ref([]);
const filters = reactive<Partial<Question>>({...FILTERS_INIT_VALUES});

export function useQuestions(){
    function updateFilters(updatedForm: any) {
        Object.assign(filters, {...updatedForm});
    }

    function clearFilters() {
        updateFilters(FILTERS_INIT_VALUES);
    }

    function updateQuestions(questions) {
        questions.value = questions;
    }

    return {
        questions,
        filters,
        updateFilters,
        clearFilters
    }
}
