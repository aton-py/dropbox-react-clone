import React from 'react';
import { Container } from './styles';
import { useState ,useEffect } from 'react';

const scrollThreshold = 300;

declare global {
    interface Window {
        toggleActiveMenu: (() => void) | undefined;
    }
}

const SideMenu: React.FC = ({ children }) => {
    const [scrollY, setScrolly] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        function onScroll() {
            setScrolly(window.scrollY);
            setIsActive(false);
        }
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const classes = [
        isActive ? 'open' : '',
        scrollY <= scrollThreshold ? 'scrollOpen' : '',
    ];

    const className = classes.join(' ').trim();

    function toggleActiveMenu() {
        setIsActive(prev => !prev);
    }

    window.toggleActiveMenu = toggleActiveMenu;
  
    return (
      <Container className={className}>
          {children}
      </Container>
  );
}

export default SideMenu;