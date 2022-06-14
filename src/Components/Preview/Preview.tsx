import React, {useState} from 'react';
import styles from "./Preview.module.scss";
import preview_1 from "../../img/preview/preview_1.jpg";
import preview_2 from "../../img/preview/preview_2.jpg";
import preview_3 from "../../img/preview/preview_3.jpg";
import preview_4 from "../../img/preview/preview_4.jpg";

const Preview = () => {

    const [activePreview, setActivePreview] = useState(0)

    const previewArray = [preview_1, preview_2, preview_3, preview_4,]

    return (
        <section className={styles.itemPreview}>
            <img className={styles.previewMain} src={previewArray[activePreview]} alt="Preview"/>
            <ul className={styles.previewList}>
                {previewArray.map((el, index) => <li key={index}
                                                     onClick={() => {
                                                         setActivePreview(index)
                                                     }}>
                    <img className={styles.previewListItem} src={el} alt={`${el}`}/>
                </li>)}
            </ul>
        </section>
    );
};

export default Preview;