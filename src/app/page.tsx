const Home = () => {
  return (
    <main className="flex gap-4 flex-col justify-center	align-center w-full h-full">
      <input
        type="text"
        name=""
        id=""
        placeholder="Nome..."
        className="w-80 h-12 p-2 bg-gray-200	block focus:outline-none hover:bg-gray-300 focus:bg-gray-100"
      />
      <button className="w-80 h-12 bg-purple-300 hover:bg-purple-400">
        Enviar
      </button>
    </main>
  );
};

export default Home;
