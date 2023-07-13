import { Member, Members } from './../model/Member';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: Members = {
    members: [],
};

const memberSlice = createSlice({
    name: 'members',
    initialState,
    reducers: {
        addMember: (state, action: PayloadAction<Member>) => {
        state.members.push(action.payload);
    },
},
});

export const { addMember } = memberSlice.actions;

export default memberSlice;
