import React from 'react';
import {useTranslation} from 'react-i18next';

const Welcome = () => {

    const {t, i18n} = useTranslation();

    return (
        <React.Fragment>
            <h1 className={styles.title}>Welcome</h1>

            <p>{t('WtR')}</p>

        </React.Fragment>
    )
}

export default Welcome
