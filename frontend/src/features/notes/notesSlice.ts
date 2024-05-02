import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface Note {
    id: number;
    date: string;
    content: string;
}

interface NotesState {
    notes: Note[];
}

const initialState: NotesState = {
    notes: [],
};

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes.push(action.payload);
        },
        removeNote: (state, action: PayloadAction<number>) => {
            state.notes = state.notes.filter(note => note.id !== action.payload);
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
    },
});

export const { addNote, removeNote, setNotes } = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export default notesSlice.reducer;
