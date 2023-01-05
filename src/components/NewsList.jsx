import { useEffect, useState } from "react"
import axios from "axios"
import News from "./News"
import Pagination from "./Pagination"

const NewsList = () => {
  const [datas, setDatas] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [newsPerPage, setNewsPerPage] = useState(9)

  useEffect(() => {
    const getNews = async () => {
      setLoading(true)
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=affb50f0bd6648a49c80b2bd454845e1')

        setDatas(response.data.articles)
      } catch (e) {
        console.log(e);
      }
      setLoading(false)
    }

    getNews()
  }, [])

  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = datas.slice(indexOfFirstNews, indexOfLastNews)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>
      <h1 className="text-center text-3xl font-bold py-10">News Information</h1>
      <News news={currentNews} loading={loading} />
      <Pagination newsPerPage={newsPerPage} totalNews={datas.length} paginate={paginate} />
    </div>
  )
}

export default NewsList