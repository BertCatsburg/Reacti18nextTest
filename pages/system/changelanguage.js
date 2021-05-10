import React from 'react';
import {useTranslation} from 'react-i18next';
import styles from '../../styles/Home.module.css'


const ChangeLanguage = () => {

    const {i18n} = useTranslation();

    const onChangeLanguage = (langcode) => (event) => {
        i18n.changeLanguage(langcode);
    }

    return (
        <React.Fragment>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>Change the Language</h1>

                    <p><button onClick={onChangeLanguage('en-US')}>Change the Language to en-US</button></p>
                    <p><button onClick={onChangeLanguage('fr-FR')}>Change the Language to fr-FR</button></p>
                </main>
            </div>
        </React.Fragment>
    )
}

export default ChangeLanguage
