import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import AddToCartButton from "../common/AddToCartButton/AddToCartButton";
import styles from './ItemPage.module.scss';
import preview_1 from './../../../img/preview/preview_1.jpg'
import preview_2 from './../../../img/preview/preview_2.jpg'
import preview_3 from './../../../img/preview/preview_3.jpg'
import preview_4 from './../../../img/preview/preview_4.jpg'
import BreadCrumbs from "../common/BreadCrumbs/BreadCrumbs";

const ItemPage = () => {

    const itemId = useParams()
    const catalog = useSelector(state => state.catalogPage.catalog)
    const itemInfo = catalog.filter(item => item.id === parseInt(itemId.id))
    const item = itemInfo[0]

    const [activePreview, setActivePreview] = useState(0)

    const previewArray = [preview_1, preview_2, preview_3, preview_4,]

    console.log(itemId)

    return (
        <div className={styles.itemPageContainer}>
            <div className={styles.itemInfoWrapper}>
                <BreadCrumbs/>
                <section className={styles.itemPreview}>
                    <img src={previewArray[activePreview]} alt=""/>
                    <ul>
                        {previewArray.map((el, index)=><li key={index}
                                                           onClick={()=>{setActivePreview(index)}}>
                            <img src={el} alt=""/>
                        </li>)}
                    </ul>
                </section>
                <section className={styles.itemInfo}>
                    <div>
                        <div>
                            <h3>{item.title}</h3>
                        </div>
                        <div>

                        </div>
                    </div>
                    <div>
                        список с характеристиками
                    </div>
                    <div>
                        <div>
                            <h3></h3>
                            <span>
                                + 449 баллов за покупку
                            </span>
                        </div>
                    </div>
                    <div>
                        <AddToCartButton el={item}/>
                        <button className={styles.buyOneClickButton}>
                            <span className={styles.buyOneClickButtonText}>
                                Купить в 1 клик
                            </span>
                        </button>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ItemPage;