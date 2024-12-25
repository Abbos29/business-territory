import Hero3 from "../components/layout/Hero3/Hero3"
import WhyUs from "../components/layout/WhyUs/WhyUs"
import HeadSeo from "../components/ui/HeadSeo/HeadSeo"

const ServicesPage = () => {
    return (
        <>
            <HeadSeo
                title="Территория бизнеса - Услуги"
                description="Ознакомьтесь с полным спектром бухгалтерских и юридических услуг компании 'Территория бизнеса'. Мы обеспечиваем надежную поддержку вашего бизнеса."
            />

            <Hero3 />
            <WhyUs />
        </>
    )
}

export default ServicesPage