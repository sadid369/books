import { useState } from "react";
import useBooksContext from "../hooks/use-books-context";
function BookEdit({ book, onSubmit }) {
  const [title, setTitle] = useState(book.title);
  const { editBook } = useBooksContext();
  const handleChange = (event) => {
    // onEdit(book.id, title);
    setTitle(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit();
    editBook(book.id, title);
  };
  return (
    <form className="book-edit" onSubmit={handleSubmit}>
      <label>Title</label>
      <input value={title} onChange={handleChange} className="input" />
      <button className="button is-primary">Save</button>
    </form>
  );
}

export default BookEdit;
