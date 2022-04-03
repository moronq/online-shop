import React from 'react';
import styles from './Footer.module.scss';
import FooterList from "./FooterList";

const Footer = () => {
    return (
        <footer className={styles.footerBackground}>
            <div className={styles.footerContainer}>
                <section className={styles.footerFirstFloor}>
                    <FooterList title={'Информация'} list={['Златоустовские ножи в Москве и Московской области', 'Ножевые стали',
                    'О нас', 'Условия оплаты и доставки', 'Политика конфиденциальности']}/>
                    <FooterList title={'СЛУЖБА ПОДДЕРЖКИ'} list={['Контактная информация', 'Возврат товара', 'Карта сайта']}/>
                    <FooterList title={'ДОПОЛНИТЕЛЬНО'} list={['Подарочные сертификаты', 'Партнеры', 'Товары со скидкой']}/>
                    <FooterList title={'ЛИЧНЫЙ КАБИНЕТ'} list={['Личный кабинет', 'История заказов','Мои закладки', 'Рассылка новостей']}/>
                </section>
            </div>
        </footer>
    );
};

export default Footer;