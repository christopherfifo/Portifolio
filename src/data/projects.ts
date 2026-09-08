import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    titulo: "CondoDrop",
    descricao:
      "Sistema de gerenciamento de encomendas para condomínios focado em segurança e escalabilidade. Moderniza o recebimento de pacotes com notificações automáticas, rastreamento em tempo real (integração Correios), leitura de QR Code para retiradas e relatórios em PDF, eliminando o extravio de encomendas.",
    descricaoEn:
      "Parcel management system for condominiums focused on security and scalability. Modernizes package receiving with automatic notifications, real-time tracking (Correios integration), QR Code scanning for pickups, and PDF reports, eliminating lost packages.",
    techs: [
      "Next.js 15",
      "TypeScript",
      "Tailwind v4",
      "Prisma ORM",
      "PostgreSQL (Neon)",
    ],
    imageUrl: "/condoDrop.png",
    repoUrl:
      "https://github.com/christopherfifo/sistema-de-controle-de-encomendas",
    liveUrl: "https://sistema-de-controle-de-encomendas.vercel.app/",
  },
  {
    id: 2,
    titulo: "Glenda Rocha Psicologia Clínica",
    descricao:
      "Landing page desenvolvida para a psicóloga Glenda Rocha, com foco na apresentação de sua atuação clínica, abordagem de atendimento e serviços oferecidos. O projeto utiliza uma comunicação acolhedora e um design elegante para transmitir confiança, apresentar a profissional e facilitar o contato e o agendamento de sessões.",
    descricaoEn:
      "Landing page developed for psychologist Glenda Rocha, focused on presenting her clinical practice, approach, and services. The project combines welcoming communication with an elegant design to build trust, introduce the professional, and make contacting and scheduling sessions easier.",
    techs: ["Astro", "JavaScript", "Axios", "HTML5", "CSS3"],
    imageUrl: "/glendaPsicologia.png",
    liveUrl: "https://glenda-psicologia.vercel.app/",
  },
  {
    id: 3,
    titulo: "Sistema de Estoque de Farmácia",
    tituloEn: "Pharmacy Inventory System",
    descricao:
      "Sistema de gerenciamento de estoque farmacêutico desenvolvido como projeto final de POO. A aplicação controla o fluxo de compras, armazenamento de produtos e gestão de funcionários, contando com um sistema rígido de controle de acesso hierárquico (RBAC) na tela de login para restringir funcionalidades com base no cargo do usuário.",
    descricaoEn:
      "Pharmacy inventory management system developed as a final OOP project. The application controls the purchasing flow, product storage, and employee management, featuring a strict hierarchical access control system (RBAC) on the login screen to restrict functionalities based on the user's role.",
    techs: ["Java", "Java Web", "MySQL", "jQuery", "Modelagem de Dados"],
    imageUrl: "/estoque-farmacia.png",
    repoUrl:
      "https://github.com/christopherfifo/sistema-de-estoque-de-farmacia",
    // liveUrl omitido por ser um projeto local/acadêmico
  },
  {
    id: 4,
    titulo: "SeteChaves",
    descricao:
      "Aplicação Java Web voltada para o gerenciamento e armazenamento seguro de credenciais. O sistema permite organizar contas por categorias, gerar senhas fortes com critérios customizados e mitigar riscos de segurança através de boas práticas de criptografia no ecossistema Java, integrando-se a um banco de dados relacional.",
    descricaoEn:
      "Java Web application focused on the management and secure storage of credentials. The system allows organizing accounts by categories, generating strong passwords with custom criteria, and mitigating security risks through good cryptography practices in the Java ecosystem, integrating with a relational database.",
    techs: ["Java", "Java Web (Servlets/JSP)", "MySQL", "JDBC", "Criptografia"],
    imageUrl: "/setechaves.png",
    repoUrl: "https://github.com/christopherfifo/SeteChaves",
  },
];
