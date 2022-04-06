import React from "react";
import { Link } from "react-router-dom";

const BlogPost = (props) => (
    <>
    <div key={props.title} className="blog__post__tile">
        <div className="blog__post__image">
          <img alt="blog__photo" src={props.thumbnail}></img>
        </div>
        <div className="blog__post__content">
              <div className="blog__post__category">{props.category}</div>
              <div className="blog__post__title">
                {props.title}
                <div className="blog__post__row">
                  <span className="blog__post__date">
                    {props.day} {props.month}
                  </span>
                  {/* <span className="blog__post__author">~ {blogPost.author}t</span> */}
                </div>
              </div>
              <div className="blog__post__text">{props.excerpt}</div>
            <Link exact to={`/news/${props.slug}`} className="blog__post__link">
                WIĘCEJ
            </Link>
        </div>
      </div>
    </>
)


export default BlogPost;