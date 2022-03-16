import React from "react";
import TinyFlag from "tiny-flag-react";
import i18next from 'i18next';
import cookies from 'js-cookie';



const LngBtn = (props) => {

    const currentLanguage = cookies.get('i18next') || 'en'


 
    return (
        <>
        
            <div className={props.LngBtnStyles}>
            <button style={{opacity: "pl" === currentLanguage ? 1 : 0.5}} className="lng lng--pl" disabled={ "pl" === currentLanguage } onClick={() => i18next.changeLanguage("pl")}>
            <TinyFlag
                country="PL" // ISO 3166-1 alpha-2 code
                alt="PL Flag" // Used as the image alt tag
                fallbackImageURL="https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/PL.svg" // Used when emoji flags are not supported.
            />
            </button>
            <button style={{opacity: "en" === currentLanguage ? 1 : 0.5}} className="lng lng--us" disabled={ "en" === currentLanguage } onClick={() => i18next.changeLanguage("en")}>
            <TinyFlag
                country="US" // ISO 3166-1 alpha-2 code
                alt="USA Flag" // Used as the image alt tag
                fallbackImageURL="https://cdn.jsdelivr.net/npm/react-flagkit@1.0.2/img/SVG/US.svg" // Used when emoji flags are not supported.
            /> 
            </button>
        </div>
   
        </>
    )
}

export default LngBtn;