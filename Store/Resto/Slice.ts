import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Todo, Todos } from "./Model";
import lapinoz from "../../data/lapinoz.json";

const initialState: Todos = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "rostoData",
  initialState: lapinoz,
  reducers: {
    // setTodoData: (state, action: PayloadAction<Todo>) => {
    //   state.todos = [...state.todos, action.payload];
    // },
  },
});
// export const { setTodoData } = todosSlice.actions;

// ? Export the authSlice.reducer to be included in the store.
export default todosSlice.reducer;
