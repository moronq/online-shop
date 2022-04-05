import React, {useState} from 'react';
import styles from "./Footer.module.scss";
import arrowBottomWhite from '../../img/icons/arrow-bottom-white.svg'

const FooterList = ({title, list, image}) => {

    let [isSpoilerActive, setIsSpoilerActive] = useState(false)

    let onSpoilerClick =()=>{
        setIsSpoilerActive(prev => !prev)
    }

    return (
        <div className={styles.footerListContainer}>
            <p className={styles.footerListTitle}>{title}
                <img className={`${styles.spoilerIcon} ${isSpoilerActive ? styles.spoilerIconFlipped : ''}`} src={arrowBottomWhite} alt=''/>
                <button onClick={onSpoilerClick} className={styles.spoilerButton}/>
            </p>
            <div className={styles.footerDesktop}>
                <ul className={styles.footerList}>
                    {list.map((el, index) => <li className={styles.footerListItem}>{image ? <img className={styles.footerImage} src={image[index]} alt={'logo'}/>  : ''}<a className={styles.footerListItemLink} href="">
                        {el}</a></li>
                    )}
                </ul>
            </div>
            <div className={styles.footerMobile}>
                <ul className={`${styles.footerList} ${isSpoilerActive ? '' : styles.footerListHidden}`}>
                    {list.map((el, index) => <li className={styles.footerListItem}>{image ? <img className={styles.footerImage} src={image[index]} alt={'logo'}/>  : ''}<a className={styles.footerListItemLink} href="">
                        {el}</a></li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default FooterList;