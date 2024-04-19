export interface mainImagesCarouselI {
    mainImages?: mainImagesCarouselType[],
    bigCarousel?: any[]
}

export type mainImagesCarouselType = {
    id: number,
    image: string
}

export interface postsI {
    firstPosts?: any,
    secondPosts?: any
}

export interface AnswerI {
    answers: AnswerType[]
}

export type AnswerType = {
    id: number,
    question: number,
    answers: string,
    answers_en: string,
    answers_kg: string,
    answers_ru: string,
    image: any,
    theme: string,
    theme_en: string,
    theme_kg: string,
    theme_ru: string
}

export type QuestionsType = {
    id: number,
    text: string,
    text_kg: string,
    text_en: string,
    text_ru: string
}

export interface QuestionsI {
    questions: QuestionsType[]
}