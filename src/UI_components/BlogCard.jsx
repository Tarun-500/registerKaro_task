import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom"
import { BsDot } from "react-icons/bs";
const BlogCard = ({ blog }) => {
  return (
    <Card className="blogCard">
      <div className="imgBox">
        <img src={blog.image} alt={blog.title} loading="lazy" />
      </div>
      <CardBody>
        <small className="author-text">{blog.author} <BsDot />{blog.date} {blog.weekDay && (<>   <BsDot /> {blog.weekDay}    </>)}</small>

        <div className="d-flex aling-itmes-center justify-content-between">
          <h5 className="head-2 w-75 text-truncate">{blog.title} </h5>
          <Link to="/" className="ext-link head-5" data-discover="true" aria-label="Discover More about our Blog">   <FiArrowRight /> </Link>
        </div>
        <p className="para-4"> {blog.description} </p>
        <div className="badges">
          {blog.tags.map((tag, index) => {
            const colors = ['badge-purple', 'badge-green', 'badge-red', 'badge-blue'];
            const colorClass = colors[index] || 'badge-blue';

            return (
              <span key={index} className={`badge ${colorClass}`}>
                {tag}
              </span>
            );
          })}

        </div>

      </CardBody>
    </Card>
  );
};

export default BlogCard;
