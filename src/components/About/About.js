import { Container, Row, Col, Image } from 'react-bootstrap';
import me from '../../assets/misc/me.jpg';
import techs from '../../assets/techs';
import './About.css';

function About() {
  const info = "Hey! I am Mohammed Nasser, an experienced software engineer holding a Bachelor's Degree in Computer and Communication from the Faculty of Engineering, Alexandria University. "+
                "With five years of industry experience, I have a proven track record of delivering high-quality software solutions using various technologies, "+
                "with a particular passion for Ruby on Rails. I have hands-on experience in all stages of software development, "+
                "including requirements gathering, analysis, design, development, testing, and support."

  const comicInfo = <div>{"Beside the coding life, I am also a cartoonist with a published comic book and over 260,000 Facebook followers. "+
                     "You can check my art portfolio "}<a href="https://www.nasserjunior.com" rel="noreferrer" target="_blank">here</a></div>

  return (
    <Container>
      <Row>
        <Col xs={12} md={3}>
          <Image src={me} className="me-image" />
        </Col>
        <Col md={1}></Col>
        <Col xs={12} md={8} className="body-text">
        <div className="section">
            <h3>Info</h3>
            <div className="mb-2">{info}</div>
            <div>{comicInfo}</div>
         </div>
         <div className="section">
            <h3>Contact</h3>
            <div><i className="bi bi-envelope-fill"></i>: <a href="mailto:contact@nasserjunior.com" rel="noreferrer" target="_blank">contact@nasserjunior.com</a></div>
            <div><i className="bi bi-linkedin"></i>: <a href="https://www.linkedin.com/in/nasserjr/" rel="noreferrer" target="_blank">linkedin.com/in/nasserjr</a></div>
         </div>
         <div className="section">
            <h3>Tech Stack</h3>
            <div className="d-flex flex-wrap">
              {
                techs.map((tech) => <div className="tech-container">{tech}</div>)
              }
            </div>
         </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
