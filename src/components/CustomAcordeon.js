import React from 'react';
import PropTypes from 'prop-types';
import * as styles from '../styles/inicio.module.css';
import { useRef } from 'react';

const CustomAcordeon = ({ title, content, isOpen, onToggle }) => {
    const contentRef = useRef(null);

    return (
        <div className={`${styles.acordeonBody} acordeon`}>
            <button className={styles.acordeonTitle} onClick={onToggle}>
                {title}
                <span className={styles.acordeonArrow}>{isOpen ? '-' : '+'}</span>
            </button>
            <div
                ref={contentRef}
                className={`${styles.acordeonContent}`}
                style={{
                    height: isOpen ? `${contentRef.current.scrollHeight}px` : '0',
                    opacity: isOpen ? 1 : 0,
                }}
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
};

CustomAcordeon.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default CustomAcordeon;
