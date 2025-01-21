import { Row, Col, Container } from "reactstrap";
import BlogCard from "../UI_components/BlogCard";
import Heading from "../UI_components/Heading";
import Button from "../UI_components/Button";
import { LuArrowRight } from "react-icons/lu";
import BlogImg1 from '../assets/images/blog/blog-1.webp'
import BlogImg2 from '../assets/images/blog/blog-2.webp'
import BlogImg3 from '../assets/images/blog/blog-3.webp'
import BlogImg4 from '../assets/images/blog/blog-4.webp'
import BlogImg5 from '../assets/images/blog/blog-5.webp'
 


const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: BlogImg1,
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023 ",
      tags: ["Tax & Audit", "Management"]
    },
    {
      id: 2,
      image: BlogImg2,
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tags: ["Tax & Audit", "Management"]
    },
    {
      id: 3,
      image: BlogImg1,
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tags: ["Tax & Audit", "Management"]
    },
    {
      id: 4,
      image: BlogImg3,
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tags: ["Tax & Audit", "Management"]
    },
    {
      id: 5,
      image: BlogImg4,
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tags: ["Tax & Audit", "Management"]
    },
    {
      id: 6,
      image: BlogImg5,
      title: "Small Business & Startup",
      description: "Secrets of transforming a 2-14 team into a Super Bowl dynasty.",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      tags: ["Tax & Audit", "Management"]
    },
  ];

  return (
    <section className="section_blog section-space">
      <Container fluid>
        <Heading
          subheading={"EXPLORE OUR BLOGS"}
          subheadingcolor={"var(--primary-color)"}
          mainHeading={"Accelerate Digital Transformation"}
          mainheadingcolor={"var(--text-dark-1)"}
          align={"center"}
        />

        <Row className="blog-container">
          {blogs.map(blog => (
            <Col key={blog.id} className="col-md-4">
              <BlogCard blog={blog} />
            </Col>
          ))}
        </Row>


        <div className="text-center mt-4">
          <Button color={"var(--blue-color)"} text={"Show more blogs"} icon={<LuArrowRight />} />
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
