import React, { useState, useEffect, useContext } from 'react';
import LanguageContext from '../../providers/LanguageContext';
import TurnedContext from '../../providers/TurnedContext';
import DistanceContext from '../../providers/DistanceContext';

import './Screen.css';

const Screen = () => {
  const { isEnglish } = useContext(LanguageContext);
  const { isStarted } = useContext(TurnedContext);
  const { distance } = useContext(DistanceContext);

  const rulerSpacing = [
    15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14, 15,
  ];
  const minZeroPosVal = -475;
  const oneCmStep = 2.7;
  const amountOfMinimums = 10;
  const dotsOpacity = 0.6;

  const [minZeroPos, setMinZeroPos] = useState(
    `translate3d(-475px, 20px, 0px)`
  );
  const [minimumsPosRight, setMinimumsPosRight] = useState([]);
  const [minimumsPosLeft, setMinimumsPosLeft] = useState([]);
  const [dotPosition, setDotPosition] = useState(0);
  const [selectedMin, setSelectedMin] = useState(0);

  const getDistanceBetweenDots = distance;

  useEffect(() => {
    calculateDistance();
  }, [getDistanceBetweenDots]);

  const getDotPosition = (dot, index) => {
    let finalDotPosition = dot.distance;
    setSelectedMin(index + 1);
    for (let i = 0; i < index; i++) {
      finalDotPosition += dot.distance;
    }
    setDotPosition(finalDotPosition);
  };

  const calculateDistance = (distanceCm) => {
    let yPos = 20;
    let opacityRight = dotsOpacity;
    let distanceBetweenDots = getDistanceBetweenDots * oneCmStep;

    const minimumsPosRightArr = [];
    const minimumsPosLeftArr = [];

    for (let i = 0; i < amountOfMinimums; i++) {
      const distance = minZeroPosVal + distanceBetweenDots * (i + 1);
      if (distanceCm) {
        opacityRight -= distanceCm / 25;
      }
      minimumsPosRightArr.push({
        pos: `translate3d(${distance}px, -${-20 + yPos}px, 0px)`,
        opacity: opacityRight,
        distance: distanceCm,
      });
      yPos += 20;
    }

    let yPosLeft = 10;
    let opacityLeft = dotsOpacity;

    for (let i = 0; i < amountOfMinimums; i++) {
      const distance = minZeroPosVal - distanceBetweenDots * (i + 1);
      if (distanceCm) {
        opacityLeft -= distanceCm / 25;
      }
      minimumsPosLeftArr.push({
        pos: `translate3d(${distance}px, ${yPosLeft - 180}px, 0px)`,
        opacity: opacityLeft,
        distance: distanceCm,
      });
      yPosLeft -= 20;
    }

    setMinimumsPosRight(minimumsPosRightArr);
    setMinimumsPosLeft(minimumsPosLeftArr);
  };

  return (
    <div className="screen">
      <div className="screen-container">
        <div className="screen-text">
          <h1>{isEnglish ? 'Screen' : 'Екран'}</h1>
          <p>
            {isEnglish
              ? 'To get the distance from the center minimum you need to tap on it starting from the right side towards 0.'
              : 'Для отримання відстані від центрального мінімума потрібно натиснути на нього починаючи з правої сторони відносно 0.'}
          </p>
          <p>
            {isEnglish
              ? 'The minima on the left are mirror-symmetric rules with the same distance'
              : 'Мінімуми зліва - дзеркально симетричні правим та мають таку ж відстань'}
          </p>
        </div>

        <div className="ruler-container">
          <div className="ruler">
            {rulerSpacing.map((space) => (
              <span key={space + Math.random() * 100}>{space}</span>
            ))}
            {isStarted && (
              <ul className="laser">
                <li
                  className="red-dot"
                  style={{ transform: minZeroPos }}
                  onClick={() => {
                    setDotPosition(0.0000000001);
                    setSelectedMin(0);
                  }}
                ></li>
                {minimumsPosRight.map((right, i) => (
                  <li
                    key={right + Math.random() * 100}
                    className="red-dot"
                    style={{ transform: right.pos, opacity: right.opacity }}
                    onClick={() => getDotPosition({ dot: right, index: i })}
                  ></li>
                ))}
                {minimumsPosLeft.map((left, i) => (
                  <li
                    key={left + Math.random() * 100}
                    className="red-dot"
                    style={{ transform: left.pos, opacity: left.opacity }}
                    onClick={() => getDotPosition({ dot: left, index: i })}
                  ></li>
                ))}
              </ul>
            )}
          </div>
        </div>
        {/* <p
          className={`off-state ${
            !(dotPosition && isTurned) ? 'off-state' : ''
          }`}
        >
          {!isEnglish
            ? `Відстань вибраного мінімума: ${Number(
                dotPosition.toFixed(2)
              )} (см)| Номер мінімума: ${selectedMin}`
            : `Distance of the chosen minimum: ${Number(
                dotPosition.toFixed(2)
              )} (cm)| Number of the minimum: ${selectedMin}`}
        </p> */}
      </div>
    </div>
  );
};

export default Screen;
