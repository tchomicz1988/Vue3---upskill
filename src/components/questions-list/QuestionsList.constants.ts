export const QUESTIONS_ENDPOINTS = {
    ALL: () => `/api/questions`,
    ADD: () => `/api/questions`,
    EDIT: (id: string)=> `/api/questions/${id}`,
    GET_QUESTION: (id: string)=> `/api/questions/${id}`,
}
