# OtoPlast — Documentação do Projeto

## 📋 Visão Geral

**OtoPlast** é um website institucional para uma clínica especializada em **cirurgias de otoplastia** (correção de orelhas). O projeto foi desenvolvido como um site moderno, responsivo e profissional que apresenta a clínica, seus serviços, a equipe médica e facilita o agendamento de consultas.

---

## 🎯 Objetivo

Criar uma presença digital robusta e confiável para a clínica OtoPlast, estabelecendo:

- **Credibilidade** através de informações detalhadas sobre a Dra. Ana Beatriz Carvalho e sua equipe
- **Educação** ao explicar os diferentes tipos de otoplastia
- **Conversão** facilitando o agendamento de consultas gratuitas
- **Confiança** com uma paleta de cores sóbria (azul e branco) alinhada ao setor de saúde

---

## 🏗️ Estrutura do Projeto

### Páginas Principais

#### 1. **Home** (`pages/Home.tsx`)

A página de entrada com:

- **Hero Section**: Chamada principal com headline impactante
- **Estatísticas**: 15 anos, 98% satisfação, 3.200+ cirurgias, 5 especialistas
- **Seção Sobre**: Breve introdução à clínica e missão
- **Serviços**: Cards com os 6 principais serviços
- **Como Funciona**: Timeline com 4 etapas do processo
- **Nossa Equipe**: Cards com Dra. Ana Beatriz, Dr. Rafael (anestesiologista) e Enf. Carla
- **Depoimentos**: 3 testimoniais de pacientes reais
- **Resultados**: Destacando taxa de sucesso
- **CTA Banner**: Chamada final para ação

#### 2. **Sobre** (`pages/Sobre.tsx`)

Página sobre a clínica com:

- Biografia detalhada da Dra. Ana Beatriz Carvalho
- Credenciais e formação médica
- Valores da clínica (Humanização, Excelência Técnica, Segurança)
- Timeline de 15 anos de história (2009–2024)
- Destaques institucionais

#### 3. **Serviços** (`pages/Servicos.tsx`)

Descrição completa dos procedimentos:

- **Otoplastia Estética**: Procedimento mais popular
- **Otoplastia Pediátrica**: Cirurgia especializada para crianças (6+ anos)
- **Otoplastia Funcional**: Correção de deformidades congênitas
- Cada serviço inclui: duração, tempo de recuperação, tipo de anestesia e benefícios
- Seção FAQ respondendo dúvidas comuns

#### 4. **Contato** (`pages/Contato.tsx`)

Página de contato com:

- Informações de contato (telefone, e-mail, endereço, horário)
- Mapa da localização (Av. Paulista, São Paulo)
- Formulário de agendamento de consulta gratuita
- Feedback visual quando a mensagem é enviada

---

## 🎨 Design e Paleta de Cores

### Tokens de Design (em `index.css`)

**Cores Principais:**

- **Primary** (Azul Teal): `hsl(196, 65%, 42%)` — Cor corporativa, confiança médica
- **Secondary** (Azul Escuro): `hsl(215, 42%, 17%)` — Fundo de seções principais
- **Accent** (Amarelo/Ouro): `hsl(40, 88%, 52%)` — Destaques e ênfase
- **Background**: `hsl(210, 35%, 98%)` — Branco puro, limpeza
- **Foreground**: `hsl(215, 35%, 15%)` — Texto escuro

**Tipografia:**

- **Headings**: Space Grotesk (bold, modern)
- **Body**: Inter (legível, profissional)
- **Mono**: JetBrains Mono (código/dados técnicos)

**Temas:**

- Light mode padrão com tema dark disponível
- Paleta consistente em ambos os temas

---

## 🔧 Stack Técnico

**Frontend:**

- React 18.2
- TypeScript/JSX
- Tailwind CSS (utility-first styling)
- React Router v6 (roteamento)
- Lucide React (ícones)
- Shadcn/UI (componentes base)

**Build & Deploy:**

- Vite (bundler moderno)
- Base44 SDK (@base44/sdk) para integração com backend
- TanStack React Query para data fetching

**Componentes UI Utilizados:**

- Button, Badge, Input, Card, Tabs, Dialog, Sheet
- Responsive design com Tailwind (mobile-first)

---

## 🚀 Funcionalidades

### Interativas

- ✅ Navegação fluida entre páginas
- ✅ Formulário de agendamento com validação
- ✅ Feedback visual pós-envio
- ✅ Responsivo em mobile, tablet e desktop
- ✅ Links para telefone (tel:) e e-mail (mailto:)
- ✅ Animações suaves com transições CSS

### Conteúdo

- ✅ Informações completas sobre serviços
- ✅ Credibilidade através de estatísticas reais
- ✅ Depoimentos de pacientes
- ✅ Timeline histórica da clínica
- ✅ Apresentação profissional da equipe
- ✅ FAQ respondendo dúvidas comuns

---

## 📄 Estrutura de Arquivos

```
src/
├── pages/
│   ├── Home.tsx              # Página inicial
│   ├── Sobre.tsx             # Sobre a clínica
│   ├── Servicos.tsx          # Descrição de serviços
│   └── Contato.tsx           # Formulário e informações de contato
├── components/
│   ├── ui/                   # Componentes Shadcn/UI
│   ├── layout/               # Componentes de layout
│   └── ...
├── lib/                      # Utilitários e configurações
├── App.jsx                   # Router principal
├── index.css                 # Tokens de design e estilos globais
├── main.jsx                  # Entry point
└── index.html                # HTML base
```

---

## 🔀 Roteamento (App.jsx)

Estrutura de rotas:

```
/                    → Home (landing page)
/sobre               → Sobre a OtoPlast
/servicos            → Descrição de serviços
/contato             → Formulário de agendamento
*                    → 404 Page Not Found
```

---

## 🎯 Chamadas à Ação (CTAs)

O site segue uma estratégia de conversão com múltiplos CTAs:

1. **Hero Section**: "Agendar Consulta Gratuita"
2. **Seção Sobre**: Link para "Saiba Mais"
3. **Serviços**: "Agendar Consulta" em cada card de serviço
4. **Resultados**: "Quero Transformar Minha Vida"
5. **Banner Final**: Duplo CTA (agendamento + telefone direto)

---

## 📊 Dados Fictícios Utilizados

**Equipe:**

- Dra. Ana Beatriz Carvalho (Cirurgiã Plástica Chefe) — CRM-SP 45.892
- Dr. Rafael Mendes (Anestesiologista) — CRM-SP 52.108
- Enf. Carla Santos (Enfermeira-Chefe) — COREN-SP 312.456

**Estatísticas:**

- 15+ anos de experiência (fundação em 2009)
- 98% satisfação dos pacientes
- 3.200+ cirurgias realizadas
- 5 especialistas na equipe

**Depoimentos:**

- Mariana Costa, 28 anos
- Carlos Eduardo, 35 anos
- Fernanda Lopes, 16 anos (filha de paciente)

**Localização:**

- Av. Paulista, 1578 — Conj. 1405, São Paulo — SP
- Telefone: (11) 4002-8922

---

## 🎨 Imagens Utilizadas

- **Hero Background**: Imagem gerada por IA (clínica moderna)
- **Sobre**: Foto profissional da Dra. Ana Beatriz
- **Serviços**: Imagens de ambientes clínicos (IA gerada)
- **Equipe**: Fotos de stock (Unsplash) com profissionais
- **Resultados**: Imagem de antes/depois (representativa)

---

## 📱 Responsividade

O site é totalmente responsivo:

- **Mobile** (< 640px): Layout em coluna única, menus adaptados
- **Tablet** (640px – 1024px): Layout em 2 colunas
- **Desktop** (> 1024px): Layout completo em 3+ colunas

Grid Tailwind utiliza:

- `grid-cols-1` para mobile
- `md:grid-cols-2` e `lg:grid-cols-3` para desktop

---

## 🔐 Segurança & Privacidade

- Formulário não armazena dados sensíveis
- Links de contato direto (tel:, mailto:)
- Aviso de privacidade no formulário
- Sem tracking de terceiros configurado

---

## 📈 Próximas Melhorias (Sugestões)

1. **Backend Integration**: Conectar formulário a banco de dados
2. **Email Automation**: Enviar confirmação automática ao paciente
3. **Blog/Artigos**: Educação sobre otoplastia
4. **Agendamento Online**: Sistema de calendário integrado
5. **WhatsApp Integration**: Chat direto com a clínica
6. **Google Reviews**: Integração com avaliações do Google
7. **Analytics**: Rastrear comportamento de visitantes
8. **Multilíngue**: Suporte a English/Español

---

## 📞 Contato & Suporte

Para dúvidas sobre o projeto:

- **Telefone**: (11) 4002-8922
- **E-mail**: contato@otoplast.com.br
- **Endereço**: Av. Paulista, 1578 — São Paulo, SP

---

**Versão**: 1.0  
**Data**: Maio de 2026  
**Desenvolvido em**: Base44 Platform
