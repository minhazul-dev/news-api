import React from 'react';
import { useState, useEffect } from 'react'
import News from '../News/News';
import axios from 'axios'

const TopHeadline = () => {

    const [articles, setArticles] = useState([]);
    // useEffect(()=>{
    //     const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=9ab298fd9ed848eabd2edcca718b6421'
    //     fetch(url)
    //     .then(response =>response.json())
    //     .then(data =>setArticles(data.articles))
        
    // },[])
    useEffect(() =>{
        const url ='https://newsapi.org/v2/top-headlines?country=us&apiKey=9ab298fd9ed848eabd2edcca718b6421'
        axios(url)
        .then(data => setArticles(data.data.articles))


    },[])


    return (
        
        <div>
             
          {
              articles.map(article => <News article = {article}></News>)
          }
        </div>
    );
};

export default TopHeadline;