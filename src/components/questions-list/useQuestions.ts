import { Ref, ref } from 'vue';
import { Question } from '@/interfaces/question.interface';
export function useQuestions(){
    const questions: Ref<Question[]> = ref([]);
    return {questions}

}
