import React from 'react';
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

const BlogDetails = () => {
    const params = useParams();
    const [article, setArticle] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(()=>{
        async function getArticle(){
            const req = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.id}`);
            if(!req.ok){
                return setNotFound(true);
            }
            
            const res = await req.json();
            
            setArticle(res);
            setLoading(false);
        }
        getArticle();
    }, [params])

    if(notFound){
        return <p>Artikel tidak di temukan...</p>
    }

    return (
        <>
            <section className='section'>
                {loading && <i>Loading...</i>}
                <h1 className='section-title'>{article.title}</h1>
                <time className='artikel-time'>{new Date(article.publishedAt).toLocaleDateString()}</time>
                <p className='section-desc'>{article.summary}</p>
                <p className='artikel-sumber'>
                    Sumber : <a href={article.url} target='_blank' rel="noreferrer">{article.newsSite}</a>
                </p>
                
                <img className='artikel-img' src={article.imageUrl} alt="gambar" />
            </section>
        </>
    );
}

export default BlogDetails;
