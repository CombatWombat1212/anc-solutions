import { useState, useEffect } from 'react';

const useKeyToggle = (options = { key: 'Escape' }) => {
    const [state, setState] = useState(false);
    const { key } = options;

    useEffect(() => {
        const toggleState = (event) => {
            if (event.key === key) {
                setState(prevState => !prevState);
            }
        };

        window.addEventListener('keydown', toggleState);

        // Cleanup function
        return () => {
            window.removeEventListener('keydown', toggleState);
        };
    }, [key]); // Re-run the effect if the key changes

    return state;
};

export default useKeyToggle;
