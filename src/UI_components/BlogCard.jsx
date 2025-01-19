import React from "react";
import { Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const BlogCard = ({ blog }) => {
  return (
    <Card className="mb-4">
      <img src={blog.image} alt={blog.title} className="card-img-top" />
      <CardBody>
        <CardTitle tag="h5">{blog.title}</CardTitle>
        <CardText>{blog.description}</CardText>
        <small className="text-muted">{blog.author} • {blog.date}</small>
        <div className="mt-3">
          {blog.tags.map((tag, index) => (
            <span key={index} className="badge bg-primary me-2">
              {tag}
            </span>
          ))}
        </div>
        <Button color="link" className="mt-3">
          Read More →
        </Button>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
