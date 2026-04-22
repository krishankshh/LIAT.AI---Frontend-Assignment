import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset window scroll (for landing page and general transitions)
    window.scrollTo(0, 0);

    // Reset deck content scroll (for internal deck navigation)
    const deckContent = document.querySelector('.deck-content');
    if (deckContent) {
      deckContent.scrollTop = 0;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
