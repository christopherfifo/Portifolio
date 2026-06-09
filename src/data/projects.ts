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
    titulo: "Sistema de Estoque de Farmácia",
    tituloEn: "Pharmacy Inventory System",
    descricao: "Sistema de gerenciamento de estoque farmacêutico desenvolvido como projeto final de POO. A aplicação controla o fluxo de compras, armazenamento de produtos e gestão de funcionários, contando com um sistema rígido de controle de acesso hierárquico (RBAC) na tela de login para restringir funcionalidades com base no cargo do usuário.",
    descricaoEn: "Pharmacy inventory management system developed as a final OOP project. The application controls the purchasing flow, product storage, and employee management, featuring a strict hierarchical access control system (RBAC) on the login screen to restrict functionalities based on the user's role.",
    techs: [
      "Java", 
      "Java Web", 
      "MySQL", 
      "jQuery", 
      "Modelagem de Dados"
    ],
    imageUrl: "/estoque-farmacia.png", 
    repoUrl: "https://github.com/christopherfifo/sistema-de-estoque-de-farmacia",
    // liveUrl omitido por ser um projeto local/acadêmico
  },
  {
    id: 3, 
    titulo: "SeteChaves",
    descricao:
      "Aplicação Java Web voltada para o gerenciamento e armazenamento seguro de credenciais. O sistema permite organizar contas por categorias, gerar senhas fortes com critérios customizados e mitigar riscos de segurança através de boas práticas de criptografia no ecossistema Java, integrando-se a um banco de dados relacional.",
    descricaoEn:
      "Java Web application focused on the management and secure storage of credentials. The system allows organizing accounts by categories, generating strong passwords with custom criteria, and mitigating security risks through good cryptography practices in the Java ecosystem, integrating with a relational database.",
    techs: [
      "Java",
      "Java Web (Servlets/JSP)",
      "MySQL",
      "JDBC",
      "Criptografia",
    ],
    imageUrl: "/setechaves.png", 
    repoUrl: "https://github.com/christopherfifo/SeteChaves",

  },
  {
    id: 4,
    titulo: "FSW-Donalds",
    descricao: "Aplicação Full Stack inspirada nos totens de autoatendimento do McDonald's. O sistema gerencia toda a jornada do usuário: escolha entre consumir no local ou levar, gerenciamento dinâmico de carrinho de compras (com incremento/decremento), confirmação de pagamentos e uma área restrita para consulta e validação de pedidos.",
    descricaoEn: "Full Stack application inspired by McDonald's self-service kiosks. The system manages the entire user journey: choosing between dining in or taking out, dynamic shopping cart management (with increment/decrement), payment confirmation, and a restricted area for order consultation and validation.",
    techs: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL (Neon)",
      "Shadcn UI",
      "React Hook Form",
      "Zod"
    ],
    imageUrl: "/fsw-donalds.png",
    repoUrl: "https://github.com/christopherfifo/FSW-Donalds",
    liveUrl: "https://fsw-donalds-vert.vercel.app/"
  }
];
