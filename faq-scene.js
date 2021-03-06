const { Telegraf } = require("telegraf");
const Stage = require("telegraf/stage");
const Scene = require("telegraf/scenes/base");
const { leave } = Stage;

function faqSceneGenerate() {
  const faq = new Scene("faq");
  faq.enter((ctx) => {
    ctx.replyWithHTML(
      `<b>Часто задаваемые вопросы:</b>` +
        `\n\n❓<b>На какую почту отправлять отчёт?</b>` +
        `\n❗daria.isakova@urfu.ru или normokontrol002@gmail.com` +
        `(организаторы сообщат позже)` +
        `\n\n❓<b>На каком сайте записываться на проект?</b>` +
        `\n❗Прокомпетенции.рф` +
        `\n\n❓<b>По какой формуле считается итоговый балл?</b>` +
        `\n❗Итоговый балл = КР*4 + ОЭ*5 +АТ+ Бонусы, где АТ` +
        `– Заполнение AirTable (10 баллов), КР – Оценка куратора ` +
        `(10 баллов), ОЭ – Оценка экспертов (10 баллов)` +
        `\n\n❓<b>Можно ли менять ответы в карточках в Airtable?</b>` +
        `\n❗Да, но перед этим нужно сообщить одному из организаторов ` +
        `о намерении изменить ответ` +
        `\n\n❓<b>Что делать для получения бонусных баллов?</b>` +
        `\n❗Для получения бонусных баллов необходимо прислать данные ` +
        `об участии в мероприятиях на почту kuklin.ilya@urfu.ru по ` +
        `следующему шаблону (в теме письма указать «Участие в мероприятиях»):` +
        `\n\n    1. Название мероприятия` +
        `\n    2. Дата и место проведения` +
        `\n    3. Тип мероприятия (хакатон, олимпиада, конференция и т.д.)` +
        `\n    4. Тип участия (очное/заочное, индивидуальное/командное)` +
        `\n    5. Результат (место, категория, победа в номинации)` +
        `\n    6. Подтверждающий документ Фотографию/скан сертификата участника ` +
        `или диплом (или другой аналогичный документ)` +
        `\n    7. Название вашего проекта` +
        `\n\nДополнительные фото с места проведения конкурса приветствуются.` +
        `\n\nВ результате рассмотрения заявки баллы будут зачислены: +5 за участие ` +
        `в мероприятии, +5 за победу в номинации (максимум +10 за одно мероприятие на одного человека).`
    );
  });
  return faq;
}

module.exports = faqSceneGenerate;
