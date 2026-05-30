import { ArrowUpRight, AtSign, ExternalLink, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import Image from "next/image";
import type React from "react";
import { PortfolioAnimations } from "@/components/portfolio-animations";
import { experience, metrics, profile, projects, skills, strengths } from "@/data/portfolio";

const nav = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#contato", label: "Contato" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#05080a] text-white">
      <PortfolioAnimations />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(69,213,232,0.18),transparent_34%),radial-gradient(circle_at_18%_42%,rgba(245,158,91,0.12),transparent_28%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#05080a]/78 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="font-mono text-sm tracking-[0.24em] text-cyan-100">
            CAUÃ.YVES
          </a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            {nav.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex h-10 items-center gap-2 rounded-md border border-cyan-300/30 px-3 text-sm text-cyan-50 transition hover:border-cyan-200 hover:bg-cyan-300/10"
          >
            <Mail size={16} />
            <span className="hidden sm:inline">Contato</span>
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-14 pt-28 md:grid-cols-[1.02fr_0.98fr] md:px-8"
      >
        <div className="relative z-10">
          <div className="reveal mb-6 inline-flex items-center gap-2 rounded-md border border-cyan-300/25 bg-cyan-300/8 px-3 py-2 text-sm text-cyan-100">
            <Sparkles size={16} />
            Full stack com foco em produto, escala e experiência.
          </div>
          <h1 className="reveal max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Sistemas web elegantes para operações que precisam funcionar.
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-cyan-300 px-5 font-semibold text-slate-950 transition hover:bg-cyan-200"
            >
              Ver projetos
              <ArrowUpRight size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 font-semibold text-white transition hover:border-white/35 hover:bg-white/8"
            >
              <ExternalLink size={18} />
              LinkedIn
            </a>
          </div>

          <dl className="reveal mt-10 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass rounded-lg p-4">
                <dt className="text-2xl font-semibold text-white">{metric.value}</dt>
                <dd className="mt-1 text-xs leading-5 text-slate-400">{metric.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="reveal relative min-h-[430px] overflow-hidden rounded-lg border border-white/10 shadow-2xl shadow-cyan-950/30">
          <Image
            src="/images/hero-system.png"
            alt="Interface tecnológica abstrata com painéis de dados"
            fill
            priority
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05080a] via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 glass rounded-lg p-4">
            <p className="text-sm font-medium text-cyan-100">Atuação atual</p>
            <p className="mt-1 text-sm leading-6 text-slate-300">
              Desenvolvedor Front-end na MultiClubes, entregando produtos usados por clubes e
              parques em todo o Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {strengths.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.text} className="reveal glass rounded-lg p-5">
                <Icon className="text-cyan-200" size={22} />
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <Section
        id="projetos"
        eyebrow="Projetos selecionados"
        title="Produtos reais, impacto mensurável."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="reveal glass rounded-lg p-6 transition hover:-translate-y-1 hover:border-cyan-200/45"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-cyan-200">{project.type}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                </div>
                <ArrowUpRight className="text-slate-500" />
              </div>
              <p className="mt-5 min-h-24 text-sm leading-7 text-slate-300">{project.impact}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="experiencia"
        eyebrow="Experiência"
        title="Uma trajetória de construção ponta a ponta."
      >
        <div className="space-y-4">
          {experience.map((item) => (
            <article
              key={`${item.company}-${item.period}`}
              className="reveal glass grid gap-4 rounded-lg p-6 md:grid-cols-[220px_1fr]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-200">
                  {item.period}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{item.company}</h3>
              </div>
              <div>
                <p className="text-lg font-medium text-slate-100">{item.role}</p>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="stack"
        eyebrow="Stack"
        title="Tecnologia escolhida para entregar, não para decorar."
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => {
            const Icon = group.icon;
            return (
              <article key={group.title} className="reveal glass rounded-lg p-6">
                <Icon className="text-cyan-200" size={24} />
                <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <section id="contato" className="relative mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="reveal glass relative overflow-hidden rounded-lg p-7 md:p-10">
          <div className="absolute right-8 top-8 hidden w-56 space-y-3 md:block">
            <span className="signal-line block h-px origin-left bg-cyan-300/60" />
            <span className="signal-line block h-px origin-left bg-orange-300/60" />
            <span className="signal-line block h-px origin-left bg-fuchsia-300/50" />
            <span className="orbit-dot ml-24 block h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_26px_rgba(103,232,249,0.9)]" />
          </div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">Contato</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
            Vamos construir uma experiência web que pareça simples porque foi bem pensada.
          </h2>
          <div className="mt-8 grid gap-3 text-sm text-slate-300 md:grid-cols-2">
            <ContactLink
              href={`mailto:${profile.email}`}
              icon={<Mail size={18} />}
              label={profile.email}
            />
            <ContactLink
              href={`tel:+5524992287640`}
              icon={<Phone size={18} />}
              label={profile.phone}
            />
            <ContactLink
              href={profile.linkedin}
              icon={<ExternalLink size={18} />}
              label="/in/cauayves"
            />
            <ContactLink href={profile.github} icon={<AtSign size={18} />} label="@CauaYves" />
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
              <MapPin size={18} className="text-cyan-200" />
              {profile.location}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Section({
  children,
  eyebrow,
  id,
  title,
}: {
  children: React.ReactNode;
  eyebrow: string;
  id: string;
  title: string;
}) {
  return (
    <section id={id} className="relative mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="reveal mb-8 max-w-3xl">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">{eyebrow}</p>
        <h2 className="mt-4 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function ContactLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:border-cyan-200/40 hover:bg-cyan-300/10"
    >
      <span className="text-cyan-200">{icon}</span>
      {label}
    </a>
  );
}
