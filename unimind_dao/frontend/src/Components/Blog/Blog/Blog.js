import React, { useState, useEffect } from "react";
import axios from "axios";
import Title from "../../Elements/Title/Title";
import AOS from "aos";
import "aos/dist/aos.css";
import EmptyPage from "../../Elements/EmptyPage/EmptyPage";
import { useTranslation } from "react-i18next";
import BlogCard from "./BlogCard";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/blog/featured`
        );
        console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);

  useEffect(() => {
    AOS.init({ once: true, duration: 700 });
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          // `${process.env.REACT_APP_API_URL}/api/blog/`
          "https://www.unimind.website/api/blog/"
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchBlogs();
  }, []);

  console.log("blog", blogs);

  const posts = blogs.map((blogPost) => {
    return (
      <>
        <BlogCard
          key={blogPost.title}
          title={blogPost.title}
          thumbnail={blogPost.thumbnail}
          category={blogPost.category}
          month={blogPost.month}
          day={blogPost.day}
          excerpt={blogPost.excerpt}
          slug={blogPost.slug}
        />
      </>
    );
  });

  return (
    // <div className="container mt-3">
    //   <div className="nav-scroller py-1 mb-2">
    //     <nav className="nav d-flex justify-content-between">
    //       <Link className="p-2 text-muted" to="/category/world">
    //        World
    //      </Link>
    //      <Link className="p-2 text-muted" to="/category/youtube">
    //        Environment
    //      </Link>
    //      <Link className="p-2 text-muted" to="/category/twitter">
    //        Technology
    //      </Link>
    // <Link className="p-2 text-muted" to="/category/article">
    //   Design
    // </Link>
    // <Link className="p-2 text-muted" to="/category/cooperation">
    //   Culture
    // </Link>
    //     </nav>
    //   </div>

    /* <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">{featuredBlog.title}</h1>
          <p className="lead my-3">{featuredBlog.excerpt}</p>
          <p className="lead mb-0">
            <Link
              to={`/blog/${featuredBlog.slug}`}
              className="text-white font-weight-bold"
            >
              Continue reading...
            </Link>
          </p>
        </div>
      </div> */
    <>
    
      <section className="blog__container" data-aos="fade-in">
      <EmptyPage>
          <Title>{t("news_title")}</Title>
          <section className="blog__post__wrapper">{posts}</section>
          </EmptyPage>
      </section>
      
    </>
  );
};

export default Blog;
