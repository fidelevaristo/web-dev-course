import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: string;
  title: string;
  completed: boolean;
};

type EditTodoPayload = {
  id: string;
  title: string;
};

const initialState: Todo[] = [];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action: PayloadAction<Todo>) => {
        state.push(action.payload);
      },
      prepare: (title: string) => {
        return {
          payload: {
            id: nanoid(),
            title,
            completed: false,
          },
        };
      },
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload);
    },

    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.find((todo) => todo.id === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    editTodo: (state, action: PayloadAction<EditTodoPayload>) => {
      const { id, title } = action.payload;

      const todo = state.find((todo) => todo.id === id);

      if (todo) {
        todo.title = title;
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todosSlice.actions;

export default todosSlice.reducer;
