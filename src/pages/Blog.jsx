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
        
        <section>
        <h1>Blog Artikel</h1>
        <p>List artiket saya tentang peluncuran rocket</p>

        {loading ? (<i>Loading article.....</i>) :(
            <div>
                {articles.map((article)=>{
                
                return (
                <article key={article.id}>
                    <h2> 
                        <Link to={`/blog/${article.id}`}>{article.title}</Link>
                    </h2>
                    <time>{new Date(article.publishedAt).toLocaleDateString()}</time>
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
