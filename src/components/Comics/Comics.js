import { Container, Image } from 'react-bootstrap';
import './Comics.css';

function Comics() {
  function importAll(r) {
    return r.keys().map(r);
  }

  const targetImages = importAll(require.context('../../assets/comics', false, /\.(png|jpe?g|svg)$/));

  return (
    <Container>
      <div className="body-text f-20">
        <div>Drawing comics allows me to express my thoughts, and as a developer, I think a lot about coding!</div>
        so here are some of my tech-themed comic.
      </div>
      {targetImages.reverse().map((image) => (
        <div>
          <div className='d-flex align-items-center justify-content-center'>
            <Image className="comic-image" src={image} />
          </div>
        </div>
      ))}
    </Container>
  );
}

export default Comics;
