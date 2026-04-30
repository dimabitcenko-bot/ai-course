import {
  Badge,
  BrandDivider,
  BrandPattern,
  Button,
  Container,
  FAQItem,
  FeatureCard,
  InfoCard,
  Input,
  Label,
  Section,
  SectionHeading,
  StepCard,
  Textarea,
} from "@/components/ui";

const palette = [
  { name: "--color-bg", value: "#FFFFFF" },
  { name: "--color-bg-dark", value: "#24304A" },
  { name: "--color-text-primary", value: "#24304A" },
  { name: "--color-text-secondary", value: "#484848" },
  { name: "--color-primary", value: "#4F6EB6" },
  { name: "--color-primary-alt", value: "#5775B9" },
  { name: "--color-accent", value: "#FF7D14" },
  { name: "--color-accent-alt", value: "#FF8422" },
  { name: "--color-border", value: "#E5E5E5" },
  { name: "--color-white", value: "#FFFFFF" },
];

export default function StyleGuidePage() {
  return (
    <main>
      <Section>
        <Container>
          <div
            className="ui-card"
            style={{ marginBottom: "24px", maxWidth: "760px", background: "#f8faff" }}
          >
            <p className="ui-label">Внутренний каталог visual system</p>
            <p className="ui-text-small" style={{ marginTop: "8px" }}>
              Версия: минимальная база для сборки лендинга. Используется как рабочий
              ориентир по токенам, типографике, компонентам и секциям.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginTop: "12px" }}>
              <Badge>Токены</Badge>
              <Badge>Типографика</Badge>
              <Badge>Компоненты</Badge>
              <Badge>Секции</Badge>
            </div>
          </div>
          <SectionHeading
            level="h1"
            title="Понятный инструмент для структурного анализа рынка"
            description="Этот style guide фиксирует минимальную визуальную систему для дальнейшей сборки лендинга."
          />
          <p className="ui-text-body" style={{ maxWidth: "760px", marginTop: "16px" }}>
            Интерфейс должен быть чистым, сдержанным и восприниматься как продуктовый,
            а не промо-страница с визуальным шумом.
          </p>
          <div style={{ marginTop: "24px" }}>
            <Badge>7-дневный trial</Badge>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            title="Визуальная система проекта"
            description="Направление: clean trading product / restrained product landing."
          />
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            {palette.map((color) => (
              <div key={color.name} className="ui-card">
                <div
                  style={{
                    height: "56px",
                    borderRadius: "12px",
                    border: "1px solid var(--color-border)",
                    backgroundColor: color.value,
                  }}
                />
                <p className="ui-label" style={{ marginTop: "12px" }}>
                  {color.name}
                </p>
                <p className="ui-text-small" style={{ marginTop: "4px" }}>
                  {color.value}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Типографика" />
          <div style={{ display: "grid", gap: "20px", maxWidth: "760px" }}>
            <h1 className="ui-heading-h1">Понятный инструмент для структурного анализа рынка</h1>
            <h2 className="ui-heading-h2">Визуальная система проекта</h2>
            <h3 className="ui-heading-h3">Базовые компоненты</h3>
            <p className="ui-text-lead">
              Этот style guide фиксирует минимальную визуальную систему для дальнейшей
              сборки лендинга.
            </p>
            <p className="ui-text-body">
              Интерфейс должен быть чистым, сдержанным и восприниматься как продуктовый,
              а не промо-страница с визуальным шумом.
            </p>
            <p className="ui-text-small">
              Малый текст используется для подписей, пояснений и вторичных данных.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Базовые компоненты" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Button variant="primary">Получить бесплатный доступ</Button>
            <Button variant="secondary">Подробнее</Button>
            <Button variant="outline">Сравнить сценарии</Button>
          </div>

          <div style={{ display: "grid", gap: "16px", maxWidth: "560px", marginTop: "24px" }}>
            <div style={{ display: "grid", gap: "8px" }}>
              <Label htmlFor="name">Ваше имя</Label>
              <Input id="name" placeholder="Введите имя" />
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <Label htmlFor="comment">Комментарий</Label>
              <Textarea id="comment" placeholder="Коротко опишите ваш запрос" />
            </div>
            <div style={{ display: "grid", gap: "8px" }}>
              <Label htmlFor="disabled">Поле в disabled-состоянии</Label>
              <Input id="disabled" placeholder="Недоступно" disabled />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Карточки и FAQ" />
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <FeatureCard
              title="Контекст рынка без визуального шума"
              text="Компонент подчеркивает продуктовую подачу: факты, структура, ясные акценты."
            />
            <InfoCard
              title="Сигнал как рабочий инструмент"
              text="Карточка подходит для блока с условиями trial, ограничениями и правилами доступа."
            />
            <StepCard
              step="1"
              title="Оставьте заявку"
              text="После отправки формы пользователь получает инструкцию и доступ к trial-периоду."
            />
            <FAQItem
              question="Что происходит после заявки?"
              answer="Менеджер подтверждает данные и отправляет инструкции по подключению в течение рабочего дня."
            />
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <SectionHeading
            title="Пример темной секции"
            description="Темный фон используется дозированно для смысловых акцентов."
          />
          <div
            style={{
              display: "grid",
              gap: "16px",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            <FeatureCard
              dark
              title="Структура вместо рекламного давления"
              text="Темная секция остается чистой и не перегружает страницу декоративными эффектами."
            />
            <StepCard
              dark
              step="2"
              title="Подключение к рабочему процессу"
              text="Карточка поддерживает сценарии с ключевыми этапами подключения индикатора."
            />
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading title="Layout-правила и декор" />
          <div className="ui-card">
            <p className="ui-text-body">
              Контейнер ограничен шириной 1200px, а читаемая ширина текста держится в
              диапазоне около 720–760px.
            </p>
            <p className="ui-text-body" style={{ marginTop: "12px" }}>
              Базовый шаг spacing — 8px. Вертикальные отступы секций: 96px / 72px / 48px.
            </p>
            <BrandDivider className="" />
            <div style={{ marginTop: "16px" }}>
              <BrandPattern />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
