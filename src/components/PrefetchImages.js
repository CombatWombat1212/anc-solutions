import React, { useEffect } from 'react';

const PrefetchImages = ({ images }) => {
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image.src;
        });
    }, [images]);

    return null; // This component doesn't render anything
};

export default PrefetchImages;
