import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { mainImagesCarouselI } from "@/utils/interfacesAndTypes";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState: any = {
    faq: [],
}

const faqSlice = createSlice({
    name: "faq",
    initialState,
    reducers: {
        setFaq: (state, action: PayloadAction<any>) => {
            state.faq = action.payload.faq;
        },   
    }
});

export const fetchFAQ = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/questions/`);
        console.log(response)
        const data: any = { faq: response.data };
        dispatch(faqSlice.actions.setFaq(data))
    } catch (error) {
        console.log(error);
    }
}

export const { setFaq } = faqSlice.actions;
export default faqSlice.reducer;