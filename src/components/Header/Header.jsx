import { useContext } from 'react';
import LanguageContext from '../../providers/LanguageContext';

import './Header.css';

export default function Header() {
  const { isEnglish } = useContext(LanguageContext);
  return (
    <h1 className="display-4 header">
      {isEnglish
        ? 'STUDY OF THE HE-OF NE LASER'
        : 'ВИВЧЕННЯ ГЕЛІЙ-НЕОНОВОГО (Не - Nе) ЛАЗЕРА'}
    </h1>
  );
}
