function Input({text}) {
  return (
    <div className="flex flex-col gap-2 relative">
        <label htmlFor="name" className="absolute left-3 -top-2.5 bg-white pl-2 pr-2 text-sm pointer-events-none">{text}</label>
        <input type="text" id="name" className="border border-black-500 px-4 py-2 w-96 max-h-16 rounded-2xl " />
    </div>
  );
}

export default Input;