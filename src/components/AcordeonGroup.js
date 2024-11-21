import React, { useState } from 'react';
import CustomAcordeon from './CustomAcordeon';

const AcordeonGroup = ({ acordeones }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <div>
            {acordeones.map((acordeon, index) => {
                
                return (
                    <CustomAcordeon
                        key={index}
                        title={acordeon.title}
                        content={acordeon.content}
                        isOpen={activeIndex === index}
                        onToggle={() => handleToggle(index)}
                    />
                );
            })}
        </div>
    );
};

export default AcordeonGroup;
