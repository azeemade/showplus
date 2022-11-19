import { Loader } from "./Loader"

export const Movies = ({movies, loading}) => {
    return (
        <>
            <div className="mt-4">
                <div>
                    { loading &&
                        <div className="grid grid-cols-3 gap-4">
                            <Loader />
                            <Loader />
                            <Loader />
                            <Loader />
                            <Loader />
                            <Loader />
                        </div>
                    }

                    
                    { 
                        movies.length > 0 ? 
                        (
                            <>
                                <div className="grid grid-cols-3 gap-4">
                                    {
                                        movies.map((movie, index) => (
                                            <div className="bg-neutral-50 border border-neutral-200 rounded-lg"
                                                key={index}>
                                                <div>
                                                    {
                                                        movie.Poster === "N/A" ? 
                                                            (
                                                                <div className="flex justify-center items-center h-48 bg-neutral-300 rounded-t">
                                                                    <svg className="w-12 h-12 text-neutral-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z"/></svg>
                                                                </div>
                                                            ) :
                                                            (
                                                                <img src={movie.Poster} alt="" className="h-48 w-full" />
                                                            )
                                                    }
                                                </div>
                                                <div className="flex flex-col space-y-1 p-2">
                                                    <div>
                                                        <p className="text-ellipsis overflow-hidden font-medium text-neutral-500">{movie.Title}</p>
                                                    </div>
                                                    <div className="flex justify-between">
                                                        <div className="text-neutral-500 text-sm">
                                                            <p>{movie.Year}</p>
                                                        </div>
                                                        <div className="">
                                                            <p>{movie.Rating}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ) : 
                        (
                            <div className="flex justify-center items-center flex-col h-screen">
                                <p className="text-neutral-500 font-semibold text-xl">Search for a movie</p>
                                <p className="text-4xl">🎬</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    )
}