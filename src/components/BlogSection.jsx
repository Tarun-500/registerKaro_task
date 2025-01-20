import BlogCard from "../UI_components/BlogCard";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "image1.jpg",
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tags: ["Tax & Audit", "Management"]
    },
    {
        id: 1,
        image: "image1.jpg",
        title: "Small Business & Startup",
        description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        tags: ["Tax & Audit", "Management"]
      },
      {
        id: 1,
        image: "image1.jpg",
        title: "Small Business & Startup",
        description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        tags: ["Tax & Audit", "Management"]
      },
      {
        id: 1,
        image: "image1.jpg",
        title: "Small Business & Startup",
        description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        tags: ["Tax & Audit", "Management"]
      },
      {
        id: 1,
        image: "image1.jpg",
        title: "Small Business & Startup",
        description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        tags: ["Tax & Audit", "Management"]
      },
      {
        id: 1,
        image: "image1.jpg",
        title: "Small Business & Startup",
        description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        tags: ["Tax & Audit", "Management"]
      },
      {
        id: 1,
        image: "image1.jpg",
        title: "Small Business & Startup",
        description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
        author: "Prabhash Mishra",
        date: "1 Jan 2023",
        tags: ["Tax & Audit", "Management"]
      },
  ];

  return (
    <div className="container">
      <h5 className="text-center my-5">EXPLORE OUR BLOGS</h5>
      <h2 className="text-center my-5">Accelerate Digital Transformation</h2>
      <div className="row">
        {blogs.map(blog => (
          <div key={blog.id} className="col-md-4">
            <BlogCard blog={blog} />
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button className="btn btn-primary">Show more blogs →</button>
      </div>
    </div>
  );
};

export default BlogSection;
