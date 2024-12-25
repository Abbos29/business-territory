import AboutWrap from "../components/layout/AboutWrap/AboutWrap"
import ContactsWrap from "../components/layout/ContactsWrap/ContactsWrap"
import Hero from "../components/layout/Hero/Hero"
import ServicesWrap from "../components/layout/ServicesWrap/ServicesWrap"
import HeadSeo from "../components/ui/HeadSeo/HeadSeo"

const HomePage = () => {
  return (
    <>
      <HeadSeo
        title="Территория бизнеса - Главная"
        description="Территория бизнеса предлагает бухгалтерские и юридические услуги с 2013 года. Помогаем минимизировать налоговые риски и оптимизировать расходы."
      />


      <Hero />
      <AboutWrap />
      <ServicesWrap />
      <ContactsWrap />
    </>
  )
}

export default HomePage