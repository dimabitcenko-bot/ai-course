import type { ReactNode } from "react";

type ClassNameProps = {
  className?: string;
};

function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: ClassNameProps & { children: ReactNode }) {
  return <div className={cn("ui-container", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  dark = false,
}: ClassNameProps & { children: ReactNode; dark?: boolean }) {
  return (
    <section className={cn("ui-section", dark && "ui-section--dark", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  description,
  className,
  level = "h2",
}: {
  title: string;
  description?: string;
  className?: string;
  level?: "h1" | "h2" | "h3";
}) {
  const HeadingTag = level;
  const headingClass =
    level === "h1"
      ? "ui-heading-h1"
      : level === "h3"
      ? "ui-heading-h3"
      : "ui-heading-h2";

  return (
    <div className={cn("ui-section-heading", className)}>
      <HeadingTag className={headingClass}>{title}</HeadingTag>
      {description ? (
        <p className="ui-text-lead" style={{ marginTop: "16px" }}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "outline";
}) {
  return (
    <button
      className={cn("ui-button", `ui-button--${variant}`, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function Label({
  children,
  htmlFor,
  className,
}: {
  children: ReactNode;
  htmlFor?: string;
  className?: string;
}) {
  return (
    <label htmlFor={htmlFor} className={cn("ui-label", className)}>
      {children}
    </label>
  );
}

export function Input({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn("ui-control", className)} {...props} />;
}

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn("ui-control ui-textarea", className)} {...props} />;
}

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={cn("ui-badge", className)}>{children}</span>;
}

function CardFrame({
  children,
  className,
  dark = false,
}: ClassNameProps & { children: ReactNode; dark?: boolean }) {
  return (
    <article className={cn("ui-card", dark && "ui-card--dark", className)}>{children}</article>
  );
}

export function FeatureCard({
  title,
  text,
  dark = false,
}: {
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <CardFrame dark={dark}>
      <h3 className="ui-heading-h3" style={{ fontSize: "24px", lineHeight: "32px" }}>
        {title}
      </h3>
      <p className="ui-text-body" style={{ marginTop: "12px" }}>
        {text}
      </p>
    </CardFrame>
  );
}

export function InfoCard({
  title,
  text,
  dark = false,
}: {
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <CardFrame dark={dark}>
      <p className="ui-text-small" style={{ marginBottom: "8px" }}>
        Инфо-блок
      </p>
      <h3 className="ui-heading-h3" style={{ fontSize: "22px", lineHeight: "30px" }}>
        {title}
      </h3>
      <p className="ui-text-body" style={{ marginTop: "12px" }}>
        {text}
      </p>
    </CardFrame>
  );
}

export function StepCard({
  step,
  title,
  text,
  dark = false,
}: {
  step: string;
  title: string;
  text: string;
  dark?: boolean;
}) {
  return (
    <CardFrame dark={dark}>
      <p className="ui-label" style={{ color: dark ? "#d4d9e7" : "var(--color-primary)" }}>
        Шаг {step}
      </p>
      <h3 className="ui-heading-h3" style={{ fontSize: "22px", lineHeight: "30px", marginTop: "8px" }}>
        {title}
      </h3>
      <p className="ui-text-body" style={{ marginTop: "12px" }}>
        {text}
      </p>
    </CardFrame>
  );
}

export function FAQItem({
  question,
  answer,
  dark = false,
}: {
  question: string;
  answer: string;
  dark?: boolean;
}) {
  return (
    <CardFrame dark={dark}>
      <h3 className="ui-heading-h3" style={{ fontSize: "22px", lineHeight: "30px" }}>
        {question}
      </h3>
      <p className="ui-text-body" style={{ marginTop: "12px" }}>
        {answer}
      </p>
    </CardFrame>
  );
}

export function BrandDivider({ className }: ClassNameProps) {
  return <hr className={cn("ui-brand-divider", className)} />;
}

export function BrandPattern({ className }: ClassNameProps) {
  return <div className={cn("ui-brand-pattern", className)} aria-hidden />;
}
