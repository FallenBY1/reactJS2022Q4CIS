import { useTranslation } from "react-i18next";

export function Footer(): JSX.Element {
    const {t} = useTranslation();
    return (
        <>
            <h1>{t('footer')}</h1>
        </>
    );
}
