import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`);
      setArticles(response.data.articles)
      setLoading(false)

    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  useEffect(() => {
    fetchData()
  }, [category])
  return (
    <div>
      <h2 className='text-center'>Latest <span className='badge bg-danger'>News</span></h2>
      {loading ? (
       <div className="d-flex justify-content-center align-items-center"  style={{ height: '80vh' }}>
       <div className="spinner-border text-danger" style={{ width: '4rem', height: '4rem' }} role="status">
         <span className="visually-hidden">Loading...</span>
       </div>
     </div>
      ) :
        <div className='d-flex flex-wrap'>
          {
            articles.map((news, index) => (
              news.title !== "[Removed]" ? (
                <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
              ) : null))
          }
        </div>
      }

    </div>
  )
}

export default NewsBoard
