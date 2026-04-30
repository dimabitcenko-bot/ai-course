# Style Guide

## Визуальное направление

- Настроение: сдержанное, чистое, технологичное, серьезное.
- Формат: clean trading product / restrained product landing.
- Цель: дать устойчивую базу для сборки лендинга под холодный трафик без визуального шума.

## Цветовые токены

- `--color-bg`: `#FFFFFF`
- `--color-bg-dark`: `#24304A`
- `--color-text-primary`: `#24304A`
- `--color-text-secondary`: `#484848`
- `--color-primary`: `#4F6EB6`
- `--color-primary-alt`: `#5775B9`
- `--color-accent`: `#FF7D14`
- `--color-accent-alt`: `#FF8422`
- `--color-border`: `#E5E5E5`
- `--color-white`: `#FFFFFF`

## Типографика

Основная гарнитура: Montserrat (`next/font/google`).

- H1: `48/56`, `700`
- H2: `36/44`, `700`
- H3: `28/36`, `600`
- Lead: `20/30`, `500`
- Body: `16/26`, `500`
- Small: `14/22`, `500`
- Label/Button: `14/20`, `600`

## Layout-правила

- Container max-width: `1200px`
- Readable text width: около `720-760px`
- Базовый шаг spacing: `8px`
- Section spacing desktop/tablet/mobile: `96px / 72px / 48px`
- Radius card: `16px`
- Radius input/button: `12px`
- Default border: `1px solid #E5E5E5`
- Тени: отсутствуют или очень слабые

## Базовые компоненты

Реализованы в `src/components/ui.tsx`:

- `Container`
- `Section`
- `SectionHeading`
- `Button` (`primary`, `secondary`, `outline`)
- `Input`
- `Textarea`
- `Label`
- `Badge`
- `FeatureCard`
- `InfoCard`
- `StepCard`
- `FAQItem`
- `BrandDivider`
- `BrandPattern`

## Ключевые правила использования

- Держать макеты воздушными и структурными, не перегружать декором.
- Использовать темную секцию дозированно как смысловой акцент.
- Фирменный паттерн применять только как secondary decorative element.
- Все формы и CTA оставлять простыми, плотными, чистыми.

## Чего стоит избегать

- Агрессивной трейдинг-рекламы и инфобизнес-эстетики.
- Тяжелых теней, 3D, glassmorphism, кислотных градиентов.
- Случайной декоративности и визуального шума.

## Временные элементы

- `BrandPattern` — минимальный provisional decorative placeholder, может быть уточнен позже.
- Тексты в demo-блоках `style-guide` — рабочие примеры для сборки секций, не финальные маркетинговые формулировки.
