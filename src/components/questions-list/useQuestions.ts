import { Ref, ref } from 'vue';
import { Question } from '@/interfaces/question.interface';

const questions: Ref<Question[]> = ref([]);
export function useQuestions(){
    return {questions}
}
