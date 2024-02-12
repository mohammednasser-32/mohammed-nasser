import { Container, Card, Image, Row, Col } from 'react-bootstrap';
import experience from '../../assets/experience';
import './Experience.css';

function Experience() {
  let images = require.context('../../assets/companies', true);

  const renderHeader = (exp) => (
    <div className="d-flex align-items-center w-100">
      <Image className="company-icon" src={images(`./${exp.icon}`)} />
      <div className="w-100 d-flex justify-content-between">
        <div>
          <div className="exp-title">{exp.companyName}</div>
          <div className="exp-location">
          <i className="bi bi-geo-alt-fill icon"></i>{exp.location}
          <span className="notes">{exp.remote && 'Remote'}</span>
          </div>
        </div>
        <div className="notes">{exp.notes}</div>
      </div>
    </div>
  );

  const renderTimeSlot = (timeSlot) => (
    <div>
      <div className="time-slot-header">
        <Row>
          <Col md={3}>
            <div className="time-slot-position">{timeSlot.jobTitle}</div>
          </Col>
          <Col md={9} className="d-flex align-items-center">
            <div className="time-slot-dates">
             <i className="bi bi-calendar icon"></i>
             {timeSlot.start} - {timeSlot.end || 'Present'}
            </div>
          </Col>
        </Row>
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
