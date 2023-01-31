import axios from 'axios'
import React, { useState, useEffect } from 'react'
import './FetchNews.css';

function FetchNews() {
    const [news, setNews] = useState([])

    useEffect(() =>{
        getNews()
    },[])

    function getNews(){
        axios
        .get("https://newsapi.org/v2/top-headlines?country=in&apiKey=50f4978319294dd5b56a61b731f08ea5")
        .then((res) =>{
            setNews(res.data.articles)
            console.log(res)
        })
    }
  return (
    <>
    {
        news.map((a)=>{
            return ( 
                
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                            <img src={a.urlToImage} alt="Avatar" />
                            <div className="container">
                                <h4><b>{a.title}</b></h4>
                                <p>Source : {a.source.name}</p>
                                <a href={a.url} target="_blank" rel="noreferrer"><button className='see-more-btn'>See More</button></a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            )
        })
    }
    </>

  )
}

export default FetchNews