import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { API_URL } from "@/utils/consts";
import axios from "axios";

const initialState: any = {
    reports: []
}

const reportSlice = createSlice({
    name: "reportSlice",
    initialState,
    reducers: {
        setReport: (state, action: PayloadAction<any>) => {
            state.reports = action.payload.reports
        },    
    }
});

export const fetchReport = (): AppThunk => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/api/reports/`);
        console.log(response)
        const data: any = { reports: response.data };
        dispatch(reportSlice.actions.setReport(data))
    } catch (error) {
        console.log(error);
    }
}

export const { setReport } = reportSlice.actions;
export default reportSlice.reducer;