import React from 'react';
import styles from './Footer.module.scss';
import FooterList from "./FooterList";
import phone from '../../img/icons/footer-phone.svg'
import clock from '../../img/icons/clock.svg'
import location from '../../img/icons/footer-location.svg'
import mail from '../../img/icons/mail.svg'

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
                <section className={styles.footerFirstFloor}>
                    <FooterList title={'контакты'} list={['8 (800) 777-49-67', `Пн-Пт 7:00 - 16:00 (МСК)`, 'Златоуст, ул. Шоссейная, д. 1, офис «6Б»', 'info@zlatmax.ru']} image = {[phone,clock,location,mail]}/>
                    <FooterList title={'ПОЛЕЗНЫЕ ССЫЛКИ'} list={['Способы оплаты и доставки']}/>
                    <FooterList title={'НАША ГАРАНТИЯ'} list={['Недовольны своей покупкой? Вы можете вернуть ее ' +
                    'в течении 30 дней с даты получения, согласно нашим правилам']}/>
                    <FooterList title={'НОВОСТНАЯ РАССЫЛКА'} list={['Подпишитесь прямо сейчас!']}/>
                </section>
            </div>
        </footer>
    );
};

export default Footer;