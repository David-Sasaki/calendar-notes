import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Calendar from "./features/calendar/Calendar";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <div className="container mx-auto p-4 bg-white rounded-lg shadow">
          <h1 className="text-3xl font-bold text-center text-gray-900 underline mb-4">
            Calendar App
          </h1>
          <Calendar />
        </div>
      </div>
    </Provider>
  );
};

export default App;
