import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState = {
    questionnaire: []
}

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setForm: (state, action: PayloadAction<any>) => {
            state.questionnaire = action.payload
        }
    }
})

export const sendForm = (obj: any): AppThunk => async () => {
    try {
        const response = await axios.post(`${API_URL}/api/questionnaire/`, obj);
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}