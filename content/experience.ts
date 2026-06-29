import type { Role } from "./types";

export const experience: Role[] = [
  {
    company: "LexisNexis Legal & Professional",
    companyUrl: "https://www.lexisnexis.com",
    title: "Software Engineering Lead",
    location: "Raleigh, NC",
    dates: { start: "2025-07", end: null },
    highlights: [
      "Lead two engineering teams on Vault, a document vectorization platform scaled from single-use service to platform adopted by 10+ internal teams. Redesigned from consultant-driven onboarding to self-serve plug-and-play: managed model (CloudFront bundle, hours to deploy) and self-hosted appliance model (run in your own AWS account). Enables 50K+ users to access document storage, vectorization, and AI workflows independently.",
      "Architected migration of the monolithic Vault to two microservices and a microfrontend using the Backend-for-Frontend (BFF) pattern, enabling independent team ownership and accelerated feature delivery.",
      "Orchestrated modernization from Angular 12 to Angular 20 using Module Federation with microfrontends, reducing platform onboarding from days to hours.",
      "Designed and implemented a distributed job management system with auto-scaling based on ingestion load, reducing infrastructure costs by 35% and improving throughput by 40%.",
      "Improved key API performance by 80% — sub-100ms responses for 50K+ concurrent users, with 60% lower database load through architectural optimization and query profiling.",
    ],
    stack: [
      ".NET",
      "Angular 20",
      "Module Federation",
      "AWS S3",
      "AWS Cloudfront",
      "AWS SQS",
      "PostgreSQL",
    ],
  },
  {
    company: "LexisNexis Legal & Professional",
    companyUrl: "https://www.lexisnexis.com",
    title: "Principal Software Engineer",
    location: "Raleigh, NC",
    dates: { start: "2024-05", end: "2025-07" },
    highlights: [
      "Led a technical leadership team addressing platform-wide architectural challenges; drove initiatives in modernization, event architecture, and future-state planning.",
      "Transformed Parley Pro integration from synchronous API-coupled microservices (causing cascading production failures) to event-driven architecture using SQS with UI-as-entry-point orchestration. Result: eliminated incidents, increased team velocity, and enabled independent feature delivery without tight API coordination.",
      "Mentored five or more team members on microservice design principles, improving code quality and reducing architectural debt.",
      "Designed an AngularJS-to-Angular migration strategy leveraging Web Components and lazy loading, cutting build times by 30% and improving FCP/LCP by 50% across the 50K+ user base.",
      "Established a micro-frontend framework using React and Angular with lazy loading, reducing bundle sizes by 30–50% and improving application startup.",
      "Led SVN-to-Git migration and established GitHub Flow branching, enabling continuous deployment and reducing release cadence from three months to on-demand.",
      "Refactored the Maven build pipeline, achieving a 60% reduction in build times through dependency optimization and parallel build configuration.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "React",
      "Module Federation",
      "GitHub Actions",
    ],
  },
  {
    company: "LexisNexis Legal & Professional",
    companyUrl: "https://www.lexisnexis.com",
    title: "Senior Software Engineer I & II",
    location: "Raleigh, NC",
    dates: { start: "2021-04", end: "2024-05" },
    highlights: [
      "Directed a UI refresh initiative, standardizing design patterns and rewriting legacy AngularJS features to modern Angular with OnPush change detection — 40% reduction in render time and improved perceived performance.",
      "Optimized Hibernate queries addressing n+1 problems and database bottlenecks through temp-table indexing and query plan analysis, improving query execution speed by up to 70%.",
      "Dockerized microservices for local environments and automated dependency installation scripts, cutting new-hire onboarding time by 60%.",
      "Authored automated browser and unit tests using Selenium, JUnit, Karma, and Mockito, raising code coverage from 45% to 85%.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Hibernate",
      "Angular",
      "AngularJS",
      "Docker",
      "Selenium",
    ],
  },
  {
    company: "LexisNexis Legal & Professional",
    companyUrl: "https://www.lexisnexis.com",
    title: "Software Engineer III",
    location: "Raleigh, NC",
    dates: { start: "2020-09", end: "2021-04" },
    highlights: [
      "Delivered Contacts and Calendaring modules in Java, Spring Boot, and Angular — key contributor enabling 500+ concurrent users.",
      "Migrated batch invoice adjustment queries to table-valued parameters (TVPs), improving performance by 90% and reducing monthly processing from 8 hours to 48 minutes.",
    ],
    stack: ["Java", "Spring Boot", "Angular", "SQL Server"],
  },
  {
    company: "LexisNexis Legal & Professional",
    companyUrl: "https://www.lexisnexis.com",
    title: "Software Engineer I & II",
    location: "Raleigh, NC",
    dates: { start: "2018-11", end: "2020-09" },
    highlights: [
      "Supported feature teams' transition to Angular with architectural guidance; led the AngularJS 1.5 to 1.7.9 migration addressing security vulnerabilities.",
      "Developed scalable features using AngularJS, Java/Spring Boot, and SQL Server; refactored legacy J2EE to Spring Boot; decomposed large stored procedures into reusable functions and views.",
    ],
    stack: ["Java", "Spring Boot", "AngularJS", "SQL Server", "JUnit"],
  },
];

// Sort newest-first at module load so display components stay display-only.
experience.sort((a, b) => (a.dates.start < b.dates.start ? 1 : -1));
