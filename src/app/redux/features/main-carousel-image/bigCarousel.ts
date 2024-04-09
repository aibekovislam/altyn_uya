import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { mainImagesCarouselI } from "@/utils/interfacesAndTypes";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState: any = {
    bigCarousel: []
}

const bigCarousel = createSlice({
    name: "big_carousel",
    initialState,
    reducers: {   
        setBigCarousel: (state, action: PayloadAction<any>) => {
            state.bigCarousel = action.payload.bigCarousel;
        },   
    }
});

export const fetchBigCarouselImages = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/main-image-carousel/`);
        const data: any = { bigCarousel: response.data };
        dispatch(bigCarousel.actions.setBigCarousel(data));
    } catch (error) {
        console.log(error);
    }
}

export const { setBigCarousel } = bigCarousel.actions;
export default bigCarousel.reducer;