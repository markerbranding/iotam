import React, { useState } from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/acordeon.module.css';

const CustomAcordeon = ({ title, content }) => {
    const [selected, setSelected] = useState(false);

    const toggle = () => {
        setSelected((prevSelected) => !prevSelected);
    };

    return (
        <div className={`${styles.acordeonBody} ${selected ? styles.uncollapsed : styles.collapsed}`}>
            <button className={styles.acordeonTitle} onClick={toggle}>
                {title}
                <span className={styles.acordeonArrow}>+</span>
            </button>
            <div className={styles.acordeonContent} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
};

export default CustomAcordeon;

CustomAcordeon.propTypes = {
    title: PropTypes.string.isRequired, // Ahora es string
    content: PropTypes.string.isRequired, // También string
};