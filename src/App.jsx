import React, { useState } from "react";
import Header from "./component/Header";
import All from "./component/All";
import { Routes, Route, Outlet } from "react-router-dom";
import BookDetails from "./Pages/BookDetails";
import SideBar from "./component/SideBar";

const Main = ({ books, setBooks }) => {
  return (
    <>
      <Header />
      <All books={books} setBooks={setBooks} />
    </>
  );
};

const App = () => {
  const [books, setBooks] = useState([]);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        <SideBar className="md:w-1/4" />
        <div className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Main books={books} setBooks={setBooks} />}
            />
            <Route path="/myBook/:id" element={<BookDetails />} />
          </Routes>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
