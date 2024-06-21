import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [filmes, setFilmes] = useState([])
  const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
  const urlBase = 'https://api.themoviedb.org/3/movie/'
  const urlImg = 'https://image.tmdb.org/t/p/w342/'

  useEffect(() => {

    fetch(`${urlBase}popular?language=pt-BR&${apiKey}`)
      .then(response => response.json())
      .then(response => setFilmes(response.results))
      .catch(erro => console.log(erro))

  }, [])


  return (
  <main className='w-full bg-slate-700'>
    <h1 className='p-8 text-center text-5xl text-[#d8d8d8] font-bold'>Principais Filmes de Junho</h1>
    <div className='flex flex-wrap justify-center mt-3'>
      {
        filmes.map(filme => (
          <div className="card m-5" key={filme.id}>
            <h1 className='card-title text-2xl text-[#d8d8d8] text-center font-bold text-wrap'>{filme.title}</h1>
            <img className="card-image" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
            <Link to={`filmes/${filme.id}`}><p className='text-[#d8d8d8]'>SABER MAIS</p></Link>
          </div>
        ))
      }
    </div>
  </main>
);

}

export default Home;