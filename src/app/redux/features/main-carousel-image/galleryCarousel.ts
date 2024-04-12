import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { mainImagesCarouselI } from "@/utils/interfacesAndTypes";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState: any = {
    galleryImages: []
}

const gallery_images = createSlice({
    name: "gallery_images",
    initialState,
    reducers: {
        setGalleryImages: (state, action: PayloadAction<any>) => {
            state.galleryImages = action.payload.galleryImages
        },    
    }
});

export const fetchGallery = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/gallery/`);
        console.log(response)
        const data: any = { galleryImages: response.data };
        dispatch(gallery_images.actions.setGalleryImages(data))
    } catch (error) {
        console.log(error);
    }
}

export const { setGalleryImages } = gallery_images.actions;
export default gallery_images.reducer;