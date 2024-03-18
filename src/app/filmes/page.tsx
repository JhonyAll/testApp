import Filmes from "@/components/Filmes";

const FilmesPage = async () => {
    let filmes;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWY5MTAyZTAxNzQzMWJhZGZiNDBkMDA4ZjY1NDEzNSIsInN1YiI6IjYzZWY4ZDQ2ZWE4NGM3MDA5NmVmYTE0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pX14UtP6uIfifrvNvEO0kia6o_gC5N_iydUf9sII1Fk",
    },
  };

  await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {filmes = response})
    .catch((err) => console.error(err));

  return (
    <div>
      <Filmes filmes={filmes} />
    </div>
  );
};

export default FilmesPage;
