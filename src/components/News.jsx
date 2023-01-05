const News = ({ news, loading }) => {
  if (loading) {
    return <h5 className="text-center font-bold text-xl">Loading...</h5>
  }

  return (
    <div className="flex flex-wrap justify-center gap-10 px-10">
      {news.map((data, index) => (
        <div key={index} className="card w-96 bg-base-100 shadow-2xl">
          <figure><img src={data.urlToImage} alt={data.title} /></figure>
          <div className="card-body">
            <h2 className="card-title">
              {data.title}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{data.description}</p>
            <div className="card-actions justify-end pt-10">
              <div className="badge badge-outline">{data.author == null ? "Author" : data.author}</div>
              <div className="badge badge-outline">
                <a href={data.url}>
                  {data.source.name}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default News