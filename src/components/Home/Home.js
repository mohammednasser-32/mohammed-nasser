import { Container } from 'react-bootstrap';
import techs from '../../assets/techs';
import Typewriter from 'typewriter-effect';
import Draggable from 'react-draggable';

import './Home.css';
import { useState } from 'react';

function Home() {
  const [close, setClose] = useState(false);
  const renderTech = (
    <Typewriter
      options={{
        strings: techs,
        autoStart: true,
        loop: true,
      }}
    />
  )

  const renderClosed = () => (
    <div>
      Okay whatever.
    </div>
  );

  const renderOpened = () => (
    <Draggable handle=".window-header">
      <Container className="d-flex flex-column">
        <div className="window-header d-flex align-items-center justify-content-between">
          <div className="window-title">Mohammed Nasser.exe</div>
          <i className="bi bi bi-x-circle-fill icon close-icon"onClick={() => setClose(true)}></i>
        </div>
        <div className="intro-container">
          Hey! I am <div className="name">Mohammed Nasser</div>
          <div className="type d-flex">
            <div className="text">And I do stuff with</div>{renderTech}
          </div>
        </div>
      </Container>
    </Draggable>
  )

  return (
    <div className="d-flex flex-column align-items-center justify-content-center info-outer-container">
      { close ? renderClosed () : renderOpened() }
    </div>
  );
}

export default Home;
