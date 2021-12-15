const BASE_URL = `/api/questions`;

export const QUESTIONS_ENDPOINTS = {
    ALL: () => BASE_URL,
    ADD: () => BASE_URL,
    EDIT: (id: string)=> `${BASE_URL}/${id}`,
    GET_QUESTION: (id: string)=> `${BASE_URL}/${id}`
}
