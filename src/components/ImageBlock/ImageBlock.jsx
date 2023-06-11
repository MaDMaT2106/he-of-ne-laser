import { useContext } from 'react';
import LanguageContext from '../../providers/LanguageContext';
import DistanceContext from '../../providers/DistanceContext';
import TurnedContext from '../../providers/TurnedContext';

import lazerOff from '../../assets/lazerOff.jpg';
import lazerOn from '../../assets/lazerOn.jpg';
import './ImageBlock.css';

const ImageBlock = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { distance, setDistance } = useContext(DistanceContext);
  const { isTurned } = useContext(TurnedContext);

  return (
    <div className="container">
      <div className="image-block">
        <div>
          <img src={isTurned ? lazerOn : lazerOff} className="image" />
        </div>

        <div className="under-image-block">
          <div className="under-image-text">
            <p>
              {isEnglish
                ? 'Distance of the diffraction grating from the screen: '
                : 'Відстань дифракційної решітки від екрану:'}
            </p>
            <p>
              {distance}
              {isEnglish ? '(cm)' : '(см)'}
            </p>
          </div>
          <input
            type="number"
            value={distance}
            className="input-range"
            min="5"
            max="70"
            step="1"
            onChange={(e) => {
              setDistance(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageBlock;
