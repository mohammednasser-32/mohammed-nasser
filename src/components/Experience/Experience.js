import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import experience from '../../assets/experience';
import './Experience.css';

function Experience() {
  let images = require.context('../../assets/companies', true);
  let techImages = require.context('../../assets/technologies', true);

  const renderHeader = (exp) => (
    <div className="d-flex align-items-center w-100">
      <Image className="company-icon" src={images(`./${exp.icon}`)} />
      <div className="header-container">
        <div>
          <div className="exp-title">{exp.companyName}</div>
          <div className="exp-location">
          <i className="bi bi-geo-alt-fill icon"></i>{exp.location}
          <span className="notes">{exp.remote && 'Remote'}</span>
          </div>
        </div>
        <div className="tech-icons-container">
          {exp.technologies && exp.technologies.map((tech, i) => (
            <Image className="tech-icon" src={techImages(`./${tech}_logo.png`)} />
          ))}
        </div>
      </div>
    </div>
  );

  const renderTimeSlot = (timeSlot) => (
    <div>
      <div className="time-slot-header d-flex align-items-center">
        <div className="">
          <div className="time-slot-position">{timeSlot.jobTitle}</div>
        </div>
        <div className="time-slot-dates">
          <i className="bi bi-calendar icon"></i>
          {timeSlot.start} - {timeSlot.end || 'Present'}
        </div>
      </div>
      <div className="time-slot-details">
        <ul>
          {timeSlot.details.map((details, i) => (
            <li key={i}>{details}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  const renderExperience = (exp) => (
    <Card bg="light">
      <Card.Header className="d-flex align-items-center">{renderHeader(exp)}</Card.Header>
      <Card.Body>
        {exp.timeSlots.map((timeSlot, i) => (
        <div key={i} className={`${exp.timeSlots.length - 1 !== i && 'mb-3'}`}>
          {renderTimeSlot(timeSlot)}
        </div>)
        )}
      </Card.Body>
    </Card>
  );

  return (
    <Container>
      {experience.map((exp, i) => (
        <div key={i} className={`${exp.timeSlots.length - 1 !== i && 'mb-5'}`}>
          {renderExperience(exp)}
        </div>
      ))}
    </Container>
  );
}

export default Experience;
