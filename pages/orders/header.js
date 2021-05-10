import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from "../../styles/Home.module.css";

const OrderHeader = () => {

    const {t, i18n} = useTranslation();

    return (
        <React.Fragment>
            <h1 className={styles.title}>Order Headers</h1>

            <p>{t('Welcome to React')}</p>
        </React.Fragment>
    )
}

export default OrderHeader
