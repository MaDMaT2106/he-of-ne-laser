import { useContext, useState, useEffect } from 'react';
import { Button, Container } from 'react-bootstrap';
import MyModal from '../Modal/Modal';

import LanguageContext from '../../providers/LanguageContext';
import TurnedContext from '../../providers/TurnedContext';
import DistanceContext from '../../providers/DistanceContext';

import './MyJubmotron.css';

const MyJumbotron = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { setTurned, setStarted } = useContext(TurnedContext);
  const { distance } = useContext(DistanceContext);

  const [isOpen, setOpen] = useState(false);
  const [isAbled, setAbled] = useState(false);

  useEffect(() => {
    distance >= 5 ? setAbled(true) : setAbled(false);
  }, [distance]);

  return (
    <div className="my-jumbotron">
      <Container className='my-jumbotron-container'>
        <MyModal show={isOpen} handleClose={setOpen} />
        <Button
          className="info-button"
          variant="secondary"
          size="lg"
          data-bs-toggle="modal"
          data-bs-target="#myModal"
          onClick={() => setOpen(true)}
        >
          {isEnglish ? 'Info' : 'Довідка'}
        </Button>

        <div className="turn-block">
          <p>{isEnglish ? 'Power' : 'Живлення'}</p>
          <div className="form-check form-switch turn-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              onClick={(e) => {
                setTurned(e.target.checked);
                if (distance >= 5) {
                  setAbled(e.target.checked);
                }
                if (!setTurned) {
                  setStarted(false);
                }
              }}
            />
          </div>
        </div>

        <button
          className="btn btn-success btn-lg start-btn"
          disabled={!isAbled}
          onClick={() => {
            setStarted(true);
            setAbled(false);
          }}
          variant="success"
          id="start"
        >
          {isEnglish ? 'Start' : 'Старт'}
        </button>
      </Container>
    </div>
  );
};

export default MyJumbotron;
