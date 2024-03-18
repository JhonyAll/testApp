"use client";

import React from 'react';

type Filme = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

type Filmes = {
    page: number;
    results: Filme[];
    total_pages: number;
    total_results: number;
};

const Card = ({ nome, descricao }) => {
    return (
        <div className='w-80 rounded bg-gray-200 p-4 flex flex-col gap-2'>
            <h1 className='text-xl text-center'>{nome}</h1>
            <p>{descricao}</p>
        </div>
    )
}

const Filmes: React.FC<{ filmes: Filmes }> = ({ filmes }) => {
    const movies: Filme[] = filmes.results

    return (
        <div className='flex flex-col gap-4 justify-center items-center'>
            {
                movies.map(e => <Card nome={e.title} descricao={e.overview} key={e.id} />)
            }
        </div>
    );
};

export default Filmes;