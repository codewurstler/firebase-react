// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import React, {useEffect, useState} from "react";
import Auth from "./components/auth";
import Logout from "./components/logout";
import {db} from "./config/firebase-config";
import {getDocs, collection} from "firebase/firestore";
import  { TrophyIcon } from "@heroicons/react/20/solid";

export function App() {
    const [movieList, setMovieList] = useState([]);

    const moviesCollectionRef = collection(db, 'movies');

    useEffect(() => {

        const getMovieList = async () => {
            try {
                const data = await getDocs(moviesCollectionRef);
                const filteredData = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
                // @ts-ignore
                setMovieList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };

        getMovieList();
    }, []);


    return (
        <div>
            <div className="bg-sky-800 min-h-screen p-10 flex items-center">
                <div className="container mx-auto bg-white p-10 rounded shadow-2xl">
                    <div className="flex justify-between">
                        <h1 className="text-4xl">Firebase</h1>
                        <Logout/>
                    </div>
                    <Auth/>

                    <div>
                        {movieList.map((movie) => (
                            <div className="mt-10 bg-gray-100 rounded p-10 shadow-xl flex justify-between">
                                <div>
                                    {/*@ts-ignore*/}
                                    <h1 className="text-2xl font-bold"> {movie.title} </h1>
                                    {/*@ts-ignore*/}
                                    <p>{movie.releaseDate}</p>
                                </div>
                                {/*@ts-ignore*/}
                                <div style={{display: movie.receivedAnOscar ? "block" : "none"}}>
                                    <TrophyIcon className="h10 w-10 text-blue-600"/>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
