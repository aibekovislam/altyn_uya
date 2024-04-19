import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import axios from "axios";
import { API_URL } from "@/utils/consts";
import { AnswerI, AnswerType } from "@/utils/interfacesAndTypes";

const initialState: AnswerI = {
    answers: []
}

export const answerSlice = createSlice({
    initialState,
    name: 'answer',
    reducers: {
        setAnswer: (state, action: PayloadAction<AnswerI>) => {
            state.answers = action.payload.answers
        }
    }
})

export const fetchAnswers = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/answers/`);
        console.log(response.data);
        dispatch(answerSlice.actions.setAnswer({ answers: response.data }));
    } catch (error) {
        console.log(error);
    }
}

export const { setAnswer } = answerSlice.actions;
export default answerSlice.reducer;