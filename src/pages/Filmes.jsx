import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Filmes() {
    const [filmes, setFilmes] = useState([])
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e'
    const urlBase = 'https://api.themoviedb.org/3/movie/'
    const urlImg = 'https://image.tmdb.org/t/p/w342/'

    useEffect(() => {

        fetch(`${urlBase}now_playing?language=pt-BR&${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro))

    }, [])

    


    return (
        <main className='w-full bg-slate-700'>
            <h1 className='p-8 text-center text-5xl text-[#d8d8d8] font-bold'>Melhores filmes para assistir</h1>
            <div className='grid justify-items-start  flex-column '>
                {
                    filmes.map(filme => (
                        <div className="m-5 flex align-items-center" key={filme.id}>
                            <Link to={`${filme.id}`}><img className="card-image" src={`${urlImg}${filme.poster_path}`} alt={filme.title} /></Link>
                            <div className="w-1/2 m-4"> 
                                <h1 className='card-title text-2xl text-[#d8d8d8] font-bold text-wrap mb-6'>{filme.title}</h1>
                                <p className="text-md text-[#d8d8d8] italic">{filme.overview}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </main>
    );

}

export default Filmes;