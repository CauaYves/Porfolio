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
  name: "Cauã Yves",
  role: "Desenvolvedor Full Stack",
  email: "cauayves5@gmail.com",
  phone: "24 99228-7640",
  linkedin: "https://www.linkedin.com/in/cauayves",
  github: "https://github.com/CauaYves",
  location: "Volta Redonda, RJ",
  headline:
    "Construo interfaces e plataformas web com foco em produto, escala e entrega em produção.",
  summary:
    "Desenvolvedor Full Stack com 4 anos de experiência em desenvolvimento web, especializado em Next.js, React, TypeScript e interfaces modernas. Atualmente atuo na MultiClubes como especialista em front-end, participando do ciclo completo de produto: análise, prototipação, desenvolvimento, deploy e implantação.",
};

export const metrics = [
  { label: "anos de experiência", value: "4+" },
  { label: "clientes atendidos por soluções", value: "140+" },
  { label: "agentes culturais impactados", value: "1.600+" },
  { label: "projetos full stack", value: "30+" },
];

export const projects = [
  {
    name: "WebCheckout",
    type: "Produto para clubes e parques",
    impact:
      "Checkout mobile para sócios realizarem pagamento de consumo e recarga direto pelo celular.",
    stack: ["Next.js", "React", "TypeScript", "UX"],
  },
  {
    name: "Portal do Sócio",
    type: "Self-service para associados",
    impact:
      "Portal para pagamento de cobranças, atualização cadastral, inclusão de dependentes, foto e biometria facial.",
    stack: ["React", "Tailwind", "APIs REST", "Figma"],
  },
  {
    name: "Dashboard Vendas",
    type: "Analytics em tempo real",
    impact:
      "Visualização de vendas, convites, ingressos e mapa de ocupação com receita detalhada do evento.",
    stack: ["Dashboards", "Realtime UI", "TypeScript"],
  },
  {
    name: "Gestão de Agentes Culturais",
    type: "Governo e cultura",
    impact:
      "Digitalização de inscrições e acompanhamento de projetos culturais, reduzindo o envio presencial de documentos.",
    stack: ["Full Stack", "Azure DevOps", "Render", "PostgreSQL"],
  },
];

export const experience = [
  {
    company: "MultiClubes",
    role: "Desenvolvedor Frontend Pleno",
    period: "Nov 2024 - atual",
    description:
      "Idealização e construção de projetos front-end para uma das principais empresas brasileiras de tecnologia para parques e clubes, atendendo mais de 140 clientes pelo Brasil.",
  },
  {
    company: "Erudir Tech",
    role: "Desenvolvedor Full Stack Júnior",
    period: "Nov 2023 - Nov 2024",
    description:
      "Desenvolvimento completo de uma plataforma para gestão de agentes culturais, incluindo arquitetura, integração, deploy e infraestrutura de entrega contínua.",
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
  { icon: ShieldCheck, text: "Interfaces confiáveis para fluxos críticos de pagamento e gestão." },
  {
    icon: BrainCircuit,
    text: "Arquitetura limpa, testes e revisão de código como parte da entrega.",
  },
  { icon: Smartphone, text: "Experiência responsiva pensada para usuários reais em campo." },
];
