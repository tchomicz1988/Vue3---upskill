import {Question} from "@/types/question.interface";
import {add} from "@/services/ApiService";
import {QUESTIONS_ENDPOINTS} from "@/constants/questionsList.constants";

export function createQuestion(formData: any): Promise<Question> {
    return add(QUESTIONS_ENDPOINTS.ADD(), formData).then(({data}) => data);
}
