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