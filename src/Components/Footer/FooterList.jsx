import React from 'react';
import styles from "./Footer.module.scss";

const FooterList = ({title, list}) => {
    return (
        <div className={styles.footerListContainer}>
            <p className={styles.footerListTitle}>{title}</p>
            <ul className={styles.footerList}>
                {list.map(el => <li className={styles.footerListItem}><a className={styles.footerListItemLink} href="">
                    {el}</a></li>
                )}
            </ul>
        </div>
    );
};

export default FooterList;