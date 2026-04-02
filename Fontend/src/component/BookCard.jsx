function BookCard({ book }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md w-48">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-60 object-cover rounded-xl"
      />
      <h3 className="mt-2 font-semibold">{book.title}</h3>
      <p className="text-sm text-gray-500">{book.author}</p>
      <p className="text-yellow-500">⭐ {book.rating}</p>
    </div>
  );
}

export default BookCard;
