function Trending({trending}) {
    return (
        <div className='trending'>
        {trending && trending.map((trend)=>{
            return (
                <div key={trend.id} className='trending__card'>
                    <img height='250' src={`https://image.tmdb.org/t/p/w500${trend.poster_path}`} />
                    <span>{trend.title}</span>
                    <span>{trend.release_date.slice(0, 4)}</span>
                </div>
            )
        })}
        </div>
    )
}

export default Trending;