import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PaginaFilmes() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState([]);
    const [filmes, setFilmes] = useState([]);
    const apiKey = 'api_key=7c572a9f5b3ba776080330d23bb76e1e';
    const urlBase = 'https://api.themoviedb.org/3/movie/';
    const urlImg = 'https://image.tmdb.org/t/p/w1280/';

    // useEffect para o filme da página
    useEffect(() => {
        fetch(`${urlBase}${id}?${apiKey}&language=pt-BR`)
            .then(response => response.json())
            .then(response => setFilme(response))
            .catch(erro => console.log(erro));
    }, [id]);

    // useEffect para todos os filmes em exibição
    useEffect(() => {
        fetch(`${urlBase}now_playing?language=pt-BR&${apiKey}`)
            .then(response => response.json())
            .then(response => setFilmes(response.results))
            .catch(erro => console.log(erro));
    }, []);

    const handleMovieClick = (movieId) => {
        navigate(`/${movieId}`);
    };

    return (
        <main className='w-full bg-slate-700 flex justify-between'>
            <div className="m-10">
                <img className="w-4/6" src={`${urlImg}${filme.backdrop_path}`} />
                <div className="flex items-end mb-12">
                    <img className="w-2/12 absolute ml-12" src={`${urlImg}${filme.poster_path}`} alt={filme.title} />
                    <h1 className="ml-96 text-3xl text-center text-[#d8d8d8] mt-4 mb-4 ml-6 font-bold">{filme.title}</h1>
                </div>
                <p className="text-lg text-[#d8d8d8] flex-wrap w-3/4">{filme.overview}</p>
            </div>
            <div className="grid justify-items-center mr-10">
                <h2 className="text-2xl text-center text-[#d8d8d8] mt-4 mb-4 font-bold">Filmes que você pode gostar</h2>
                <div className="grid grid-cols-1 gap-5">
                    {
                        filmes.slice(0, 6).map(filme => (
                            <div className="flex flex-col items-center" key={filme.id}>
                                <img 
                                    className="w-60 cursor-pointer" 
                                    src={`${urlImg}${filme.poster_path}`} 
                                    alt={filme.title} 
                                    onClick={() => handleMovieClick(`filmes/${filme.id}`)} 
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}

export default PaginaFilmes;
