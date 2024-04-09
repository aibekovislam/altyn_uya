import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { mainImagesCarouselI } from "@/utils/interfacesAndTypes";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState: mainImagesCarouselI = {
    mainImages: [],
    bigCarousel: []
}

const mainImagesCarousel = createSlice({
    name: "mainImagesCarousel",
    initialState,
    reducers: {
        setMainImages: (state, action: PayloadAction<mainImagesCarouselI>) => {
            state.mainImages = action.payload.mainImages;
        },   
        setBigCarousel: (state, action: PayloadAction<mainImagesCarouselI>) => {
            state.bigCarousel = action.payload.bigCarousel;
        },   
    }
});

export const fetchMainImagesCarousel = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/main-images/`);
        console.log(response)
        // const responseData = await response.json();
        const data: mainImagesCarouselI = { mainImages: response.data };
        dispatch(mainImagesCarousel.actions.setMainImages(data))
    } catch (error) {
        console.log(error);
    }
}

export const { setMainImages, setBigCarousel } = mainImagesCarousel.actions;
export default mainImagesCarousel.reducer;