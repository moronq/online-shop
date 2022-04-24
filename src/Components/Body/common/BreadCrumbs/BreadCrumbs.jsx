import React from 'react';
import styles from './BreadCrumbs.module.scss';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";

const BreadCrumbs = () => {

    const navBarItems = useSelector(state => state.catalogPage.navBarItems)
    const catalog = useSelector(state => state.catalogPage.catalog)
    const params = useParams()
    const id = {
        title: params.id ? catalog.filter((el) => el.id === parseInt(params.id))[0]['title'] : '',
        link: params.id ? + catalog.filter((el) => el.id === parseInt(params.id))[0]['id']: '',
    }

    const breadCrumblesItemList = []

    navBarItems.forEach((el)=>{
        breadCrumblesItemList.push(el.link)
    })

    const filteredItemsList = []

    for (let i=0; i < breadCrumblesItemList.length; i++){
        if(params.hasOwnProperty(breadCrumblesItemList[i])){
            filteredItemsList.push(breadCrumblesItemList[i])
        }
    }

    const breadCrumbles = []

    navBarItems.forEach((el)=>{
        if(el.link === filteredItemsList[0]){
            breadCrumbles.push(el)
        }
    })

    if(id.title){
        id.link = breadCrumbles[0].link + '/' + id.link
        breadCrumbles.push(id)
    }

    return (
        <div className={styles.bodyNavigate}>
            <ul className={styles.bodyNavigatePathList}>
                <li className={styles.bodyNavigatePathItem}>
                    <NavLink to={'/'} className={styles.bodyNavigatePathLink} >Главная</NavLink>
                </li>
                {breadCrumbles.map((el,index)=>{
                    return <li key={index} className={styles.bodyNavigatePathItem}>
                        <NavLink to={`/${el.link}`} href={el.link} className={styles.bodyNavigatePathLink}>{el.title}</NavLink>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default BreadCrumbs;