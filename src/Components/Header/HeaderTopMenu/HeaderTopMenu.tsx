import styles from "./HeaderTopMenu.module.scss";
import user from "../../../img/icons/user.svg";
import React from "react";
import MenuBurger from "../MenuBurger/MenuBurger";
import NavBarItems from "../NavBarItems/NavBarItems";
import {useAppSelector} from "../../../hook/hook";

const HeaderTopMenu = () => {

    const {addedItemsToCart} = useAppSelector(state=>state.catalogPage)

    return (
        <div className={styles.topHeaderMenu}>
            <div className={styles.topHeaderMenuContainer}>
                <nav className={styles.navBar}>
                    <ul className={styles.navBarList}>
                        <NavBarItems/>
                    </ul>
                </nav>
                <a className={styles.userMenuPhoneTop} href="#">
                    <svg className={styles.userMenuPhoneImageTop} width="23" height="24" viewBox="0 0 23 24"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.1494 17.7016L19.3231 14.718C18.5439 13.8955 17.276 13.8955 16.4969 14.718L15.2122
                         16.0742C14.6219 16.6973 13.6614 16.6971 13.0713 16.0744L7.50303 10.1912C6.91135 9.56663
                         6.91126 8.55568 7.50303 7.93097C7.70995 7.71254 8.30412 7.0853 8.78768 6.57483C9.56346
                         5.75593 9.5743 4.42163 8.78693 3.59053L5.96142 0.617157C5.18222 -0.205359 3.91435 -0.205359
                         3.13724 0.615001C2.55573 1.22353 2.36817 1.41984 2.10743 1.6927C-0.702453 4.65891 -0.702453
                         9.4853 2.10729 12.4514L10.93 21.77C13.7464 24.7432 18.3049 24.7435 21.1216 21.77L22.1494
                         20.6851C22.9286 19.8625 22.9286 18.5241 22.1494 17.7016ZM4.07727 1.61166C4.33699 1.33749
                         4.75954 1.33744 5.0201 1.61241L7.84561 4.58578C8.10595 4.86061 8.10595 5.30541 7.84561
                         5.58029L7.37453 6.07754L3.60863 2.10206L4.07727 1.61166ZM11.8722 20.7756L3.0495
                         11.457C0.875572 9.16205 0.756082 5.55854 2.68201 3.11292L6.43698 7.07686C5.45033 8.2576
                         5.49145 10.0568 6.56074 11.1856L12.1288 17.0685C12.1288 17.0685 12.1289 17.0686 12.129
                         17.0687C13.1971 18.1963 14.9014 18.2425 16.0212 17.1995L19.7763 21.1636C17.467 23.1932
                         14.0611 23.0863 11.8722 20.7756ZM21.2074 19.6906L20.7363 20.1879L16.9679 16.2098L17.4389
                         15.7125C17.6987 15.4383 18.1213 15.4383 18.3811 15.7125L21.2073 18.6961C21.4671 18.9703
                         21.4671 19.4164 21.2074 19.6906Z" fill="white"/>
                    </svg>
                </a>
                <a href="#" className={styles.userLinkBlock}>
                    <img className={styles.userImage} width={'22px'} src={user} alt={'userImage'}/>
                    <span className={styles.userLink}>???????????? ??????????????</span>
                </a>
                <a className={styles.userMenuFavoriteTop} href="#">
                    <svg className={styles.userMenuFavoriteImageTop} width="28" height="27" viewBox="0 0 28 27"
                         fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1004 0C17.7169 0 15.4856 1.07339 14 2.87184C12.5144 1.07333 10.2832 0 7.89957
                        0C3.54375 0 0 3.52462 0 7.85705C0 11.2495 2.03385 15.1734 6.04492 19.5198C9.13175 22.8646
                        12.4897 25.4544 13.4454 26.1685L13.9998 26.5828L14.5543 26.1686C15.5099 25.4545 18.868 22.8647
                        21.9549 19.52C25.9661 15.1736 28 11.2496 28 7.85705C28 3.52462 24.4562 0 20.1004 0ZM20.5948
                        18.2782C18.0558 21.0293 15.3242 23.2533 13.9998 24.2783C12.6755 23.2533 9.944 21.0293 7.40498
                        18.2781C3.76837 14.3375 1.84615 10.734 1.84615 7.85705C1.84615 4.53717 4.56172 1.83622 7.89957
                        1.83622C10.0961 1.83622 12.1243 3.02694 13.1927 4.94377L14 6.3923L14.8073 4.94377C15.8756
                        3.027 17.9038 1.83622 20.1004 1.83622C23.4383 1.83622 26.1538 4.53711 26.1538 7.85705C26.1538
                        10.7341 24.2316 14.3377 20.5948 18.2782Z" fill="white"/>
                    </svg>
                </a>
                <a href='#' className={styles.userMenuCartTop}>
                    <svg className={styles.cartImage} width="32" height="34" viewBox="0 0 32 34" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.65214 2.24957H0V0.749573H4.65214C6.00406
                        0.749573 7.15546 1.73221 7.36796 3.06732L7.99688 7.01882H29.7121C30.8545 7.01882 31.6906
                        8.09558 31.4076 9.20234L29.5067 16.6364C29.0823 18.2963 27.5869 19.4574 25.8736
                        19.4574H9.9766L10.3874 22.0383C10.484 22.6452 11.0073 23.0918 11.6218
                        23.0918H28.203V24.5918H11.6218C10.2699 24.5918 9.11852 23.6092 8.90602 22.2741L5.8866
                        3.3031C5.79002 2.69623 5.26665 2.24957 4.65214 2.24957ZM9.73786 17.9574H25.8736C26.9016
                        17.9574 27.7988 17.2607 28.0535 16.2648L29.9543 8.83075C29.9948 8.67264 29.8753 8.51882
                        29.7121 8.51882H8.23562L9.73786 17.9574Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M13.5695 31.8258C14.3183 31.8258 15.0189
                        31.1799 15.0189 30.2656C15.0189 29.3513 14.3183 28.7054 13.5695 28.7054C12.8207 28.7054
                        12.1201 29.3513 12.1201 30.2656C12.1201 31.1799 12.8207 31.8258 13.5695 31.8258ZM13.5695
                        33.3258C15.1984 33.3258 16.5189 31.9557 16.5189 30.2656C16.5189 28.5755 15.1984 27.2054
                        13.5695 27.2054C11.9406 27.2054 10.6201 28.5755 10.6201 30.2656C10.6201 31.9557 11.9406
                        33.3258 13.5695 33.3258Z" fill="white"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M26.5466 31.8258C27.2954 31.8258 27.996
                        31.1799 27.996 30.2656C27.996 29.3513 27.2954 28.7054 26.5466 28.7054C25.7977 28.7054 25.0972
                        29.3513 25.0972 30.2656C25.0972 31.1799 25.7977 31.8258 26.5466 31.8258ZM26.5466
                        33.3258C28.1755 33.3258 29.496 31.9557 29.496 30.2656C29.496 28.5755 28.1755 27.2054 26.5466
                        27.2054C24.9177 27.2054 23.5972 28.5755 23.5972 30.2656C23.5972 31.9557 24.9177 33.3258
                        26.5466 33.3258Z" fill="white"/>
                    </svg>
                    <span className={styles.cartCount}>{addedItemsToCart.length}</span>
                </a>
                <MenuBurger/>
            </div>
        </div>
    )
}

export default HeaderTopMenu