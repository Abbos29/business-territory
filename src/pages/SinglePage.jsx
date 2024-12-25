import React from 'react'
import { useParams } from 'react-router-dom'

import servicesData from '/public/servicesData.js'
import ServiceSingle from '../components/layout/ServiceSingle/ServiceSingle'
import HeadSeo from '../components/ui/HeadSeo/HeadSeo'

const SinglePage = () => {

    const { serviceId } = useParams()

    const service = servicesData.find((item) => item.id === serviceId);

    if (!service) {
        return <h1 style={{ textAlign: 'center', fontSize: '26px', marginTop: '50px' }}>Услуга не найдена</h1>;
    }

    return (
        <>

            <HeadSeo
                title={`Территория бизнеса - ${service.title}`}
                description={`Детальная информация о ${service.title}. Узнайте, как мы можем помочь вашему бизнесу в решении бухгалтерских и юридических задач.`}
            />

            <ServiceSingle service={service} />
        </>
    )
}

export default SinglePage