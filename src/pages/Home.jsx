import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [filmes, setFilmes] = useState([]);
  const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
  const urlBase = 'https://api.themoviedb.org/3/movie/';
  const urlImg = 'https://image.tmdb.org/t/p/w342/';

  useEffect(() => {
    fetch(`${urlBase}now_playing?language=pt-BR&${apiKey}`)
      .then(response => response.json())
      .then(response => setFilmes(response.results))
      .catch(erro => console.log(erro));
  }, []);

  return (
    <main className='w-full'>
      <h1 className='p-8 text-center text-5xl text-[#d8d8d8] font-bold'>Principais Filmes de Junho</h1>
      <div className='flex flex-wrap justify-center'>
        {
          filmes.slice(0, 3).map(filme => ( // Aqui utilizamos o slice
            <div className="card m-5 grid justify-items-center" key={filme.id}>
              <h1 className='card-title text-2xl text-[#d8d8d8] text-center font-bold text-wrap'>{filme.title}</h1>
              <Link to={`filmes/${filme.id}`}><img  src={`${urlImg}${filme.poster_path}`} alt={filme.title} /></Link>
              <Link to={`filmes/${filme.id}`}><p className='text-[#d8d8d8] text-lg' >SABER MAIS</p></Link>
            </div>
          ))
        }
      </div>
    </main>
  );
}

export default Home;