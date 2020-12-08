import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//Helper to Ensure After Navigation you go to the top
export const ScrollToTop = () => {
    const { pathName } = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathName])

    return null;
}