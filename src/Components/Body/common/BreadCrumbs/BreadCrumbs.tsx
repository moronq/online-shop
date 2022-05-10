import React from 'react';
import styles from './BreadCrumbs.module.scss';
import {useSelector} from "react-redux";
import {useParams} from "react-router";
import {NavLink} from "react-router-dom";
import {AppStateType} from "../../../../redux/store";
import {NavBarType, ParamsType} from "../../../../types/types";

const BreadCrumbs = () => {

    const navBarItems = useSelector((state:AppStateType) => state.catalogPage.navBarItems)
    const catalog = useSelector((state:AppStateType) => state.catalogPage.catalog)
    const params = useParams<ParamsType>()
    const id: NavBarType = {
        title: params.id
            ? catalog.filter((el) => el.id.toString() === params.id)[0]['title'] : '',
        link: params.id
            ? catalog.filter((el) => el.id.toString() === params.id)[0]['id'].toString(): '',
    }

    const breadCrumbsItemList: Array<string> = []

    navBarItems.forEach((el)=>{
        breadCrumbsItemList.push(el.link)
    })

    const filteredItemsList: Array<string> = []

    for (let i=0; i < breadCrumbsItemList.length; i++){
        if(params.hasOwnProperty(breadCrumbsItemList[i])){
            filteredItemsList.push(breadCrumbsItemList[i])
        }
    }

    const breadCrumbs: Array<NavBarType> = []

    navBarItems.forEach((el)=>{
        if(el.link === filteredItemsList[0]){
            breadCrumbs.push(el)

        }
    })

    if(id.title){
        id.link = breadCrumbs[0].link + '/' + id.link
        breadCrumbs.push(id)
    }

    return (
        <div className={styles.bodyNavigate}>
            <ul className={styles.bodyNavigatePathList}>
                <li className={styles.bodyNavigatePathItem}>
                    <NavLink to={'/'} className={styles.bodyNavigatePathLink} >Главная</NavLink>
                </li>
                {breadCrumbs.map((el,index)=>{
                    return <li key={index} className={styles.bodyNavigatePathItem}>
                        <NavLink to={`/${el.link}`} className={styles.bodyNavigatePathLink}>{el.title}</NavLink>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default BreadCrumbs;