import SectionTitle from '../../ui/SectionTitle/SectionTitle';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import s from './WhyUs.module.scss';

const WhyUs = () => {
    const items = [
        {
            title: "Конфиденциальность и защита информации",
            content: "Мы обеспечиваем полную конфиденциальность данных наших клиентов и применяем современные технологии для их защиты."
        },
        {
            title: "Бухгалтерия с нами надежна, так как наша профессиональная ответственность застрахована",
            content: "Каждое действие наших специалистов застраховано, чтобы вы могли быть уверены в надежности бухгалтерского учета."
        },
        {
            title: "Мы постоянно повышаем квалификацию",
            content: "Наши сотрудники регулярно проходят тренинги и сертификации, чтобы оставаться экспертами в своей области."
        },
        {
            title: "Личный менеджер для каждого клиента",
            content: "Мы предоставляем персонального менеджера, который всегда готов ответить на ваши вопросы и помочь в решении задач."
        },
        {
            title: "Мониторим законодательство и оповещаем клиентов заранее",
            content: "Мы отслеживаем изменения в законодательстве и своевременно информируем вас о возможных последствиях."
        },
        {
            title: "Оказываем широкий спектр юридических услуг",
            content: "Наши юристы готовы помочь вам в вопросах налогообложения, контрактного права и других сферах."
        },
        {
            title: "Готовы предложить пожалуй лучшие условия по банковскому обслуживанию",
            content: "Мы сотрудничаем с ведущими банками и предлагаем выгодные условия для открытия и ведения счетов."
        }
    ];

    return (
        <section className={s.whyus}>
            <div className="container">
                <SectionTitle title="Почему" span="мы" />

                <div className={s.wrap}>
                    <Accordion allowZeroExpanded>
                        {items.map((item, index) => (
                            <AccordionItem key={index}>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        <div className={s.itemHeader}>
                                            <span>{item.title}</span>
                                            <span className={s.index}>
                                                {String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p className={s.itemContent}>{item.content}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
