import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Modal from "./Modal";
import NotesPopup from "../notes/NotesPopup";
import Badge from "../ui/Badge";

interface DayProps {
  day: number;
  clickable: boolean;
  notesCount: number;
}

const Day: React.FC<DayProps> = ({ day, clickable, notesCount }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      {clickable && (
        <div>
          <div
            className="bg-gray-800 text-white shadow-md p-6 rounded-lg"
            onClick={openModal}
          >
            {day}
            {notesCount > 0 && <Badge count={notesCount} />}
          </div>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="flex flex-col items-center">
              <NotesPopup />
              <button
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      )}
      {!clickable && (
        <div className="bg-white text-gray-800 shadow-md p-6 rounded-lg">
          {day}
          {notesCount > 0 && <Badge count={notesCount} />}
        </div>
      )}
    </div>
  );
};

interface DaysGridProps {
  days: number[];
  clickables: boolean[];
}

const DaysGrid: React.FC<DaysGridProps> = ({ days, clickables }) => {
  return (
    <div className="grid grid-cols-7 gap-1">
      {Array(days.length)
        .fill(0)
        .map((_, index) => (
          <Day
            key={uuidv4()}
            day={days[index]}
            clickable={clickables[index]}
            notesCount={1}
          />
        ))}
    </div>
  );
};

export default DaysGrid;
