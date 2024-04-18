import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { postsI } from "@/utils/interfacesAndTypes";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState: postsI = {
    firstPosts: [],
    secondPosts: []
}

const postslice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setFirstPosts: (state, action: PayloadAction<postsI>) => {
            state.firstPosts = action.payload.firstPosts;
        },
        setSecondPosts: (state, action: PayloadAction<postsI>) => {
            state.secondPosts = action.payload.secondPosts;
        },  
    }
});

export const fetchFirstPosts = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/first-posts/`);
        console.log(response)
        // const responseData = await response.json();
        const data: postsI = { firstPosts: response.data };
        dispatch(postslice.actions.setFirstPosts(data))
    } catch (error) {
        console.log(error);
    }
}

export const fetchSecondPosts = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/second-posts/`);
        console.log(response)
        // const responseData = await response.json();
        const data: postsI = { secondPosts: response.data };
        dispatch(postslice.actions.setSecondPosts(data))
    } catch (error) {
        console.log(error);
    }
}

export const { setFirstPosts } = postslice.actions;
export default postslice.reducer;