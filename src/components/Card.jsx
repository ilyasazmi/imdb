import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaRegThumbsUp } from 'react-icons/fa'

export default function Card({ result }) {
    return (
        <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200">
            <Link href={`/movie/${result.id}`}>
                <Image className="sm:rounded-t-lg group-hover:opacity-80 duration-200" width={500} height={300} src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path}`} alt="image" style={{ maxWidth: "100%", height: "auto" }} placeholder="blur" blurDataURL="spinner.svg" />
                <div className="p-2">
                    <p className="line-clamp-3 text-sm italic">{result.overview}</p>
                    <h2 className="text-xl font-semibold mt-2">{result.title || result.name}</h2>
                    <pc className="flex items-center">{result.release_date || result.first_air_date}&nbsp;&nbsp;<FaRegThumbsUp className="h-5 mr-1 ml-3" /> &nbsp;{result.vote_count} </pc>
                </div>
            </Link>
        </div>
    )
}
