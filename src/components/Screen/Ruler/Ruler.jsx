import { useContext, useState } from 'react';
import TurnedContext from '../../../providers/TurnedContext';

const Ruler = () => {
  const { isTurned } = useContext(TurnedContext);

  const [minZeroPos, setMinZeroPos] = useState(
    `translate3d(589px, -220px, 0px)`
  );

  const rulerSpacing = [
    15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, 1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13, 14, 15,
  ];

  const getDotPosition = (dot, index) => {
    let finalDotPosition = dot.distance;
    setSelectedMin(index + 1);
    for (let i = 0; i < index; i++) {
      finalDotPosition += dot.distance;
    }
    setDotPosition(finalDotPosition);
  };
  return (
    <div className="ruler">
      {rulerSpacing.map((space) => (
        <a key={space}>{space}</a>
      ))}
      {isTurned && (
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
              key={right}
              className="red-dot"
              style={{ transform: right.pos, opacity: right.opacity }}
              onClick={() => getDotPosition({ dot: right, index: i })}
            ></li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Ruler;
