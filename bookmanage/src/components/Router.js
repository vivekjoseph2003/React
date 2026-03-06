import { Routes, Route } from "react-router-dom";
import ListBooks from "./books/ListBooks";
import CreateBook from "./books/CreateBook";
import EditBook from "./books/EditBook";

function Router() {
  return (
    <Routes>
      <Route path="/books" element={<ListBooks />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/:bookId/edit" element={<EditBook />} />
      <Route path="*" element={<ListBooks />} />
    </Routes>
  );
}

export default Router;