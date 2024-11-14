import React, {useState} from 'react'
import PropTypes from 'prop-types'
import * as styles from "../styles/acordeon.module.css"


const CustomAcordeon = ({ title, content, key }) => {
    const [selected, setSelected] = useState(false);

    const toggle = () => {
        //setSelected(!selected); 
        if (selected === true) {
            return setSelected(false)
        }
        setSelected(true)
    }

    return (
        <div key={key} className={`${styles.acordeonBody} ${selected ? styles.uncollapsed : styles.collapsed}`}>
            <button className={styles.acordeonTitle} onClick={toggle}>
                {title}
                <span className={styles.acordeonArrow}>+</span>
            </button>
            <div className={styles.acordeonContent} dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    )
}

export default CustomAcordeon

CustomAcordeon.propTypes = {
    title: PropTypes.object,
    content: PropTypes.object,
    key: PropTypes.object
}