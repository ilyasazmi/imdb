"use client"

import { useEffect } from "react";

export default function Error({ error, reset }) {

    useEffect(() => {
        console.log(error);

    }, [error]);


    return (
        <div className="text-center mt-10">
            <h1>something went wrong mofo fukers</h1>
            <button className="hover:text-amber-600 bg-indigo-600 p-4" onClick={() => reset()}>try Againt</button>

        </div>
    )
}
