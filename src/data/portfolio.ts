import {
  BrainCircuit,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Rocket,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

export const profile = {
  name: "Caua Yves",
  role: "Desenvolvedor Full Stack",
  email: "cauayves5@gmail.com",
  phone: "24 99228-7640",
  linkedin: "https://www.linkedin.com/in/cauayves",
  github: "https://github.com/CauaYves",
  location: "Volta Redonda, RJ",
  headline:
    "Construo interfaces e plataformas web com foco em produto, escala e entrega em producao.",
  summary:
    "Desenvolvedor Full Stack com 4 anos de experiencia em desenvolvimento web, especializado em Next.js, React, TypeScript e interfaces modernas. Atualmente atuo na MultiClubes como especialista em front-end e participando do ciclo completo de produto: analise, prototipacao, desenvolvimento, deploy e implantacao.",
};

export const metrics = [
  { label: "anos de experiencia", value: "4+" },
  { label: "clientes atendidos por solucoes", value: "140+" },
  { label: "agentes culturais impactados", value: "1.600+" },
  { label: "projetos full stack", value: "30+" },
];

export const projects = [
  {
    name: "WebCheckout",
    type: "Produto para clubes e parques",
    impact:
      "Checkout mobile para socios realizarem pagamento de consumo e recarga direto pelo celular.",
    stack: ["Next.js", "React", "TypeScript", "UX"],
  },
  {
    name: "Portal do Socio",
    type: "Self-service para associados",
    impact:
      "Portal para pagamento de cobrancas, atualizacao cadastral, inclusao de dependentes, foto e biometria facial.",
    stack: ["React", "Tailwind", "APIs REST", "Figma"],
  },
  {
    name: "Dashboard Vendas",
    type: "Analytics em tempo real",
    impact:
      "Visualizacao de vendas, convites, ingressos e mapa de ocupacao com receita detalhada do evento.",
    stack: ["Dashboards", "Realtime UI", "TypeScript"],
  },
  {
    name: "Gestao de Agentes Culturais",
    type: "Governo e cultura",
    impact:
      "Digitalizacao de inscricoes e acompanhamento de projetos culturais, reduzindo envio presencial de documentos.",
    stack: ["Full Stack", "Azure DevOps", "Render", "PostgreSQL"],
  },
];

export const experience = [
  {
    company: "MultiClubes",
    role: "Desenvolvedor Frontend Pleno",
    period: "Nov 2024 - atual",
    description:
      "Idealizacao e construcao de projetos front-end para uma das principais empresas brasileiras de tecnologia para parques e clubes, atendendo mais de 140 clientes pelo Brasil.",
  },
  {
    company: "Erudir Tech",
    role: "Desenvolvedor Full Stack Junior",
    period: "Nov 2023 - Nov 2024",
    description:
      "Desenvolvimento completo de plataforma para gestao de agentes culturais, incluindo arquitetura, integracao, deploy e infraestrutura de entrega continua.",
  },
  {
    company: "Driven Education",
    role: "Projetos Full Stack",
    period: "Set 2022 - Nov 2023",
    description:
      "Mais de 30 projetos com TypeScript, Node.js, Nest.js, React e Next.js, aplicando TDD, code review, CI/CD e arquitetura limpa.",
  },
];

export const skills = [
  {
    title: "Front-end moderno",
    icon: Layers3,
    items: ["Next.js", "React", "React Native", "Flutter", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-end e APIs",
    icon: Code2,
    items: [".NET", "C#", "Node.js", "Nest.js", "Prisma ORM", "REST"],
  },
  {
    title: "Dados",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Redis", "SQLite"],
  },
  {
    title: "Entrega",
    icon: GitBranch,
    items: ["Docker", "CI/CD", "GitHub Actions", "Azure DevOps", "Render"],
  },
];

export const strengths = [
  { icon: Rocket, text: "Do Figma ao deploy, com olhar de produto." },
  { icon: ShieldCheck, text: "Interfaces confiaveis para fluxos criticos de pagamento e gestao." },
  {
    icon: BrainCircuit,
    text: "Arquitetura limpa, testes e revisao de codigo como parte da entrega.",
  },
  { icon: Smartphone, text: "Experiencia responsiva pensada para usuarios reais em campo." },
];
