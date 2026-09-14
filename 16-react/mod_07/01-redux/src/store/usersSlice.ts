import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser, type GithubUser } from "./fetchUser";

type UsersState = {
  users: GithubUser[];
  loading: boolean;
  error: string | null;
};

const initialState: UsersState = {
  users: [],
  loading: false,
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<GithubUser>) => {
      state.users.push(action.payload);
    },

    removeUser: (state, action: PayloadAction<number>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })

      .addCase(fetchUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload ?? "Errore sconosciuto";
      });
  },
});

export const { addUser, removeUser } = usersSlice.actions;

export default usersSlice.reducer;
