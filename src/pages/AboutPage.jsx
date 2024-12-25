import Hero2 from "../components/layout/Hero2/Hero2"
import ServicesWrap from "../components/layout/ServicesWrap/ServicesWrap"
import WhyUs from "../components/layout/WhyUs/WhyUs"
import HeadSeo from "../components/ui/HeadSeo/HeadSeo"


const AboutPage = () => {
  return (
    <>
    <HeadSeo
  title="Территория бизнеса - О компании"
  description="Узнайте больше о компании 'Территория бизнеса'. Более 10 лет предоставляем профессиональные бухгалтерские и юридические услуги для малого и среднего бизнеса."
/>

      <Hero2 />
      <WhyUs />
      <ServicesWrap />

    </>
  )
}

export default AboutPage