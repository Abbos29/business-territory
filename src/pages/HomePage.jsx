import AboutWrap from "../components/layout/AboutWrap/AboutWrap"
import ContactsWrap from "../components/layout/ContactsWrap/ContactsWrap"
import Hero from "../components/layout/Hero/Hero"
import ServicesWrap from "../components/layout/ServicesWrap/ServicesWrap"

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutWrap />
      <ServicesWrap />
      <ContactsWrap />
    </>
  )
}

export default HomePage