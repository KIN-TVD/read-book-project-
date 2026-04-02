import BookCard from "./BookCard";

function BookList({ books }) {
  return (
    <div className="flex gap-4 flex-wrap">
      {books.map((b) => (
        <BookCard key={b.id} book={b} />
      ))}
    </div>
  );
}

export default BookList;
