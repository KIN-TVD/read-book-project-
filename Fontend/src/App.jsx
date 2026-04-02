import './App.css'
import BookList from './component/BookList';

function App() {
  const books = [
    {
      id: 1,
      title: "Doraemon",
      author: "Fujiko",
      rating: 4.5,
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "One Piece",
      author: "Oda",
      rating: 5,
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Book List</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;
