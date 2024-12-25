import HeadSeo from "../components/ui/HeadSeo/HeadSeo"

const ErrorPage = () => {
  return (
    <>
      <HeadSeo
        title="Территория бизнеса - Страница не найдена"
        description="К сожалению, запрашиваемая страница не найдена. Вернитесь на главную страницу или воспользуйтесь меню для навигации."
      />

      <section>
        <div className="container">
          <div className="error">
            <h1>404</h1>
            <h2>Страница не найдена</h2>
          </div>
        </div>
      </section>
    </>
  )
}

export default ErrorPage