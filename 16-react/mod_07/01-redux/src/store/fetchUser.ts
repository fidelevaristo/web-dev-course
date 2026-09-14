import { createAsyncThunk } from "@reduxjs/toolkit";

export type GithubUser = {
  id: number;
  name: string;
  login: string;
};

type GithubApiResponse = {
  id: number;
  name: string | null;
  login: string;
};

export const fetchUser = createAsyncThunk<
  GithubUser,
  string,
  { rejectValue: string }
>("users/fetchUser", async (username, thunkAPI) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      return thunkAPI.rejectWithValue("Utente non trovato");
    }

    const data: GithubApiResponse = await response.json();

    return {
      id: data.id,
      name: data.name ?? data.login,
      login: data.login,
    };
  } catch {
    return thunkAPI.rejectWithValue(
      "Errore durante il recupero dell'utente"
    );
  }
});