import React from 'react';
import {useTranslation} from 'react-i18next';

const ChangeLanguage = () => {

    console.log('Welcome in ChangeLanguage');

    const {i18n} = useTranslation();

    const onChangeLanguage = (langcode) => () => {
        console.log('About to change language to ' + langcode);
        i18n.changeLanguage(langcode, (err) => {
            if (err) {
                console.log('Error callback on changeLanguage');
                console.log(err);
            }
        }).then(() => {});
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
