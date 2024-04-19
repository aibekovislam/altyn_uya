import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { API_URL } from "@/utils/consts";
import axios from "axios";
import { QuestionsI } from "@/utils/interfacesAndTypes";

const initialState: QuestionsI = {
    questions: []
}

const questionSlice = createSlice({
    initialState,
    name: "questions",
    reducers: {
        setQuestions: (state, action: PayloadAction<QuestionsI>) => {
            state.questions = action.payload.questions
        }
    }
})


export const fetchQuestions = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/questions/`);
        console.log(response);
        dispatch(questionSlice.actions.setQuestions({ questions: response.data }));
    } catch (error) {
        console.log(error);
    }
}

export const { setQuestions } = questionSlice.actions;
export default questionSlice.reducer;