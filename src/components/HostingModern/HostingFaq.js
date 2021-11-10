import React from 'react'
import Faq from '../../containers/HostingModern/Faq';

export default function HostingFaq({faqTitle,faqDescription,faqItems,children}) {
    return (
        <Faq 
            faqTitle={faqTitle}
            faqDescription={faqDescription}
            faqItems={faqItems}  
        >
            {children}
        </Faq>
    )
}
