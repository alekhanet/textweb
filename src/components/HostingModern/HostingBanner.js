import React from 'react'
import Banner from '../../containers/HostingModern/Banner';

export default function HostingBanner({
    bannerTitle,
    bannerDescription,
    inputPlaceHolder,
    buttonText,
    imageSrc}) {
    return (
        <Banner 
            bannerTitle={bannerTitle} 
            bannerDescription={bannerDescription} 
            inputPlaceHolder={inputPlaceHolder} 
            buttonText={buttonText} 
            imageSrc={imageSrc}  
        />
        // <HostingBanner 
        //     bannerTitle="bannerTitle"
        //     bannerDescription="bannerDescription"
        //     inputPlaceHolder="inputPlaceHolder"
        //     buttonText="buttonText"
        //     imageSrc=""
        // />
    )
}
