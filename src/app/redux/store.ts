import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import mainImagesCarouselReducer from "./features/main-carousel-image/carouselSlice";
import bigCarouselReducer from "./features/main-carousel-image/bigCarousel";
import postsReducer from './features/cards/postSlice';
import galleryReducer from './features/main-carousel-image/galleryCarousel';
import faqReducer from './features/faq/faqSlice';
import reportReducer from './features/main-carousel-image/reportSlice';
import questionReducer from './features/questions/questionSlice';


export const store = configureStore({
    reducer: {
        mainImagesCarousel: mainImagesCarouselReducer,
        bigCarousel: bigCarouselReducer,
        posts: postsReducer,
        gallery: galleryReducer,
        faq: faqReducer,
        reports: reportReducer,
        questions: questionReducer
    }
})

export type RootStates = ReturnType<typeof store.getState>;
export type AppThunk <ReturnType = void> = ThunkAction<
  ReturnType,
  RootStates,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;