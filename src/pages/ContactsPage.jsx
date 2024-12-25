import ContactsWrap from "../components/layout/ContactsWrap/ContactsWrap"
import Hero4 from "../components/layout/Hero4/Hero4"
import HeadSeo from "../components/ui/HeadSeo/HeadSeo"

const ContactsPage = () => {
  return (
    <>
    <HeadSeo
  title="Территория бизнеса - Контакты"
  description="Свяжитесь с нами для получения консультации. Контактные данные: телефон, адрес офиса и электронная почта компании 'Территория бизнеса'."
/>

      <Hero4 />
      <ContactsWrap />
    </>
  )
}

export default ContactsPage