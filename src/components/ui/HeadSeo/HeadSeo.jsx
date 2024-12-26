import React from 'react';
import { Helmet } from 'react-helmet-async';

const HeadSeo = ({ title, description, keywords, author, image, url }) => {
  return (
    <Helmet>
      {/* Основные мета-теги */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description || 'Бухгалтерские и юридические услуги с 2013 года. Мы помогаем оптимизировать расходы, минимизировать налоговые риски и решать сложные задачи налогообложения.'} />
      <meta name="keywords" content={keywords || 'бухгалтерия, бухгалтерские услуги, налоговое консультирование, регистрация ООО, регистрация ИП, ликвидация ООО, ликвидация ИП, 3-НДФЛ, сопровождение бизнеса, экспресс-аудит, финансовый анализ, конфиденциальность, надежность, налоговое законодательство, юридические услуги'} />
      <meta name="author" content={author || 'Территория бизнеса'} />
      <link rel="icon" type="image/png" href="/favicon.png" />

      {/* Open Graph */}
      <meta property="og:title" content={title || 'Территория бизнеса - Бухгалтерские услуги'} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || 'https://вашдомен.рф'} />
      <meta property="og:image" content={image || '/favicon.png'} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || 'Территория бизнеса - Бухгалтерские услуги'} />
      <meta name="twitter:description" content={description || 'Бухгалтерские и юридические услуги с 2013 года. Мы помогаем оптимизировать расходы, минимизировать налоговые риски и решать сложные задачи налогообложения.'} />
      <meta name="twitter:image" content={image || '/favicon.png'} />

      {/* Дополнительно */}
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#2D89EF" />

      
    </Helmet>
  );
};

export default HeadSeo;
