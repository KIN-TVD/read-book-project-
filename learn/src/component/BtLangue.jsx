function ButtonLanguage({text}) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl w-36 max-h-12 hover:cursor-pointer">
      {text}
    </button>
  );
}

export default ButtonLanguage;