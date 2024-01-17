import { createSlice } from "@reduxjs/toolkit";

const conferencesSlice = createSlice({
    name: 'conferences',
    initialState: {
        conferences: []
    },
    reducers: {
        addConference: (state, action) => {
            return { conferences: [...state.conferences, action.payload] };
        },
        setConferences: (state, action) => {
            return { conferences: [...action.payload] };
        }
    }
});

export const { addConference, setConferences } = conferencesSlice.actions;

export default conferencesSlice.reducer;