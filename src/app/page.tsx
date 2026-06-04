import {
  ArrowUpRight,
  AtSign,
  Download,
  ExternalLink,
  FileText,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import type React from "react";
import { BrandSphere } from "@/components/brand-sphere";
import { PortfolioAnimations } from "@/components/portfolio-animations";
import { experience, metrics, profile, projects, skills, strengths } from "@/data/portfolio";

const brand = {
  logo: "/public/logo.svg",
  symbol: "/public/y.svg",
};

const resumeUrl = "/Caua_Yves_CV.pdf";

const nav = [
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#stack", label: "Stack" },
  { href: "#curriculo", label: "Currículo" },
  { href: "#contato", label: "Contato" },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030613] text-white">
      <PortfolioAnimations />
      <div className="tech-grid pointer-events-none absolute inset-0 opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(61,96,224,0.25),transparent_34%),radial-gradient(circle_at_18%_42%,rgba(0,34,158,0.18),transparent_30%)]" />

      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#3d60e0]/20 bg-[#030613]/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center" aria-label="Cauã Yves - início">
            <Image
              src={brand.logo}
              alt="Cauã Yves.dev"
              width={180}
              height={36}
              priority
              className="h-8 w-auto"
            />
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
            className="inline-flex h-10 items-center gap-2 rounded-md border border-[#3d60e0]/45 px-3 text-sm text-[#eef2ff] transition hover:border-[#8fa2ff] hover:bg-[#3d60e0]/15"
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
          <h1 className="reveal max-w-4xl text-balance text-5xl font-semibold leading-[0.96] tracking-normal text-white sm:text-6xl lg:text-7xl">
            Yves, Desenvolvedor FullStack.
          </h1>
          <p className="reveal mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.summary}
          </p>

          <div className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projetos"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-[#3d60e0] px-5 font-semibold text-white shadow-[0_18px_50px_rgba(61,96,224,0.35)] transition hover:bg-[#5d78e8]"
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
            <a
              href="#curriculo"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md border border-white/15 px-5 font-semibold text-white transition hover:border-white/35 hover:bg-white/8"
            >
              <FileText size={18} />
              Currículo
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

        <div className="reveal relative w-full max-w-[520px] justify-self-center">
          <BrandSphere />
          <div className="glass mt-4 rounded-lg p-4 md:absolute md:bottom-5 md:left-5 md:right-5 md:mt-0">
            <p className="text-sm font-medium text-[#dfe6ff]">Atuação atual</p>
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
                <Icon className="text-[#8fa2ff]" size={22} />
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
              className="reveal glass rounded-lg p-6 transition hover:-translate-y-1 hover:border-[#8fa2ff]/55"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm text-[#8fa2ff]">{project.type}</p>
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
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#8fa2ff]">
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
                <Icon className="text-[#8fa2ff]" size={24} />
                <h3 className="mt-5 text-xl font-semibold text-white">{group.title}</h3>
                <ul className="mt-5 space-y-3 text-sm text-slate-300">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3d60e0]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </Section>

      <Section id="curriculo" eyebrow="Currículo" title="Resumo profissional para consulta rápida.">
        <div className="reveal grid gap-5 lg:grid-cols-[360px_1fr]">
          <div className="glass rounded-lg p-6">
            <FileText className="text-[#8fa2ff]" size={26} />
            <h3 className="mt-5 text-2xl font-semibold text-white">Cauã Yves CV</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Visualize o currículo diretamente pelo site ou abra o PDF em uma nova aba para
              compartilhar e imprimir.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-[#3d60e0] px-4 text-sm font-semibold text-white transition hover:bg-[#5d78e8]"
              >
                <ExternalLink size={17} />
                Abrir PDF
              </a>
              <a
                href={resumeUrl}
                download
                className="inline-flex h-11 items-center justify-center gap-2 rounded-md border border-white/15 px-4 text-sm font-semibold text-white transition hover:border-white/35 hover:bg-white/8"
              >
                <Download size={17} />
                Baixar currículo
              </a>
            </div>
          </div>
          <div className="glass min-h-[640px] overflow-hidden rounded-lg p-2">
            <iframe
              src={`${resumeUrl}#toolbar=1&navpanes=0`}
              title="Currículo de Cauã Yves"
              className="h-[640px] w-full rounded-md border-0 bg-white"
            />
          </div>
        </div>
      </Section>

      <section id="contato" className="relative mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="reveal glass relative overflow-hidden rounded-lg p-7 md:p-10">
          <div className="absolute right-8 top-8 hidden w-56 space-y-3 md:block">
            <span className="signal-line block h-px origin-left bg-[#8fa2ff]/70" />
            <span className="signal-line block h-px origin-left bg-[#3d60e0]/70" />
            <span className="signal-line block h-px origin-left bg-[#00229e]/70" />
            <span className="orbit-dot ml-24 block h-3 w-3 rounded-full bg-[#8fa2ff] shadow-[0_0_26px_rgba(61,96,224,0.9)]" />
          </div>

          <p className="relative mt-8 font-mono text-xs uppercase tracking-[0.24em] text-[#8fa2ff]">
            Contato
          </p>
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
              <MapPin size={18} className="text-[#8fa2ff]" />
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
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[#8fa2ff]">{eyebrow}</p>
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
      className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3 transition hover:border-[#8fa2ff]/55 hover:bg-[#3d60e0]/15"
    >
      <span className="text-[#8fa2ff]">{icon}</span>
      {label}
    </a>
  );
}
