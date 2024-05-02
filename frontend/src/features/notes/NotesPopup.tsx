import React from "react";
import { useAppDispatch } from "../../app/hooks";
import { addNote } from "./notesSlice";

const NotesPopup: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleAddNote = () => {
    // Placeholder for note adding logic
    dispatch(
      addNote({ id: Date.now(), date: "2023-01-01", content: "New Note" })
    );
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white rounded p-4 shadow-lg max-w-sm w-full">
        <button
          onClick={handleAddNote}
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Note
        </button>
        {/* Additional form elements and styling here */}
      </div>
    </div>
  );
};

export default NotesPopup;
