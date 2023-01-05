const Pagination = ({ newsPerPage, totalNews, paginate }) => {
  const pageNumber = []

  for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) pageNumber.push(i)

  return (
    <div className="flex justify-center items-center pt-10 pb-20">
      <div className="btn-group">
        {pageNumber.map((number) => (
          <button key={number} className="btn" onClick={() => { paginate(number) }}>
            {number}
          </button>
        ))}
      </div>
    </div>
  )
}

export default Pagination