import { Container } from 'react-bootstrap';
import techs from '../../assets/techs';
import Typewriter from 'typewriter-effect';
import './Home.css';

function Home() {
  const renderTech = (
    <Typewriter
      options={{
        strings: techs,
        autoStart: true,
        loop: true,
      }}
    />
  )

  return (
    <Container className="d-flex align-items-center intro-container">
      <div>
        Hey! I am <div className="name">Mohammed Nasser</div>
        <div className="type d-flex">
          <div className="text">And I do stuff with</div>{renderTech}
        </div>
      </div>
    </Container>
  );
}

export default Home;
