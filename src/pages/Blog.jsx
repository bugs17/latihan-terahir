import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';


const Blog = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(()=>{
        async function getArticles() {
            const req = await fetch('https://api.spaceflightnewsapi.net/v3/articles');
            const res = await req.json()

            setArticles(res)
            
        };
        getArticles()
        setLoading(false)
    }, []);

    

    return (
        <>
        
        <section className='section'>
        <h1 className='section-title'>Blog Artikel</h1>
        <p className='section-desc'>List artiket saya tentang peluncuran rocket</p>

        {loading ? (<i>Loading article.....</i>) :(
            <div className='artikels'>
                {articles.map((article)=>{
                
                return (
                <article key={article.id} className='artikel'>
                    <h2 className='artikel-title'> 
                        <Link to={`/blog/${article.id}`}>{article.title}</Link>
                    </h2>
                    <time className='artikel-time'>{new Date(article.publishedAt).toLocaleDateString()}</time>
                </article>
                )        
                }
                
                )}
            </div>
            )}
        
        </section>

            
        </>
    );
}

export default Blog;
