export type Project = {
    title: string;
    description: string;
    technologies: string[];
    link: {
        href: string;
        text: string;
    };
    image: string;
};

export const projects = [
    {
        title: 'Tilled Node',
        description:
            "A Node.js library for interacting with Tilled's API. Built with Typescript and OpenAPIGenerator to automatically generate upon changes to the Tilled API. Processes 250k+ weekly SDK requests in production.",
        technologies: [
            'Node.js',
            'Typescript',
            'OpenAPIGenerator',
            'TypeDoc',
            'Github Actions',
        ],
        link: {
            href: 'https://github.com/gettilled/tilled-node',
            text: 'View on GitHub',
        },
        image: '/images/tilled-node.png',
    },
    {
        title: 'Paysafe Processor Service',
        description:
            "Led implementation of Tilled's first processor service within a distributed architecture. Designed domain event contracts, state transitions for onboarding/payments, and multi-datastore persistence strategy using Postgres, Redis, and DynamoDB. Established modeling conventions adopted across subsequent integrations.",
        technologies: ['Node.js', 'NestJS', 'Typescript', 'Postgres', 'Redis', 'DynamoDB', 'RabbitMQ', 'AWS'],
        link: {
            href: 'https://tilled.com',
            text: 'Learn about Tilled',
        },
        image: '/images/tilled-node.png',
    },
    {
        title: 'docs.tilled.com',
        description:
            "Tilled's technical documentation, built with Next.js, a custom fork of StaticCMS, and support for whitelabel functionality that drives our resellers product offering. This site is used in production by Tilled.",
        technologies: ['Next.js', 'Typescript', 'Amplify', 'Github Actions', 'Preact'],
        link: {
            href: 'https://docs.tilled.com',
            text: 'View at docs.tilled.com',
        },
        image: '/images/docs-tilled.png',
    },
    {
        title: 'Tilled Example Monorepo',
        description:
            "A monorepo containing examples to integrate with Tilled's tokenization library and API to process payments. The examples are built with React, Node.js, Swift, Typescript, and vanilla Javascript.",
        technologies: ['React', 'Node.js', 'Swift', 'Express', 'Typescript', 'Javascript'],
        link: {
            href: 'https://github.com/gettilled/tilled-example-monorepo',
            text: 'View on GitHub',
        },
        image: '/images/tilled-examples.png',
    },
    {
        title: 'karuna.health',
        description:
            'A marketing website for Karuna Health, built with Astro and Tailwind. This site is lightning fast, with a 100% Lighthouse score and is used in production by Karuna Health.',
        technologies: ['Astro', 'Typescript', 'Tailwind', 'Vercel'],
        link: {
            href: 'https://karuna.health',
            text: 'View at karuna.health',
        },
        image: '/images/karuna-health.png',
    },
    {
        title: 'markdown-to-preact-parser',
        description: 'A markdown parser for Preact, built with Typescript. This library is used in production by Tilled.',
        technologies: ['Preact', 'Typescript', 'Markdown'],
        link: {
            href: 'https://www.npmjs.com/package/@dpatt/markdown-to-preact-parser',
            text: 'View on NPM',
        },
        image: '/images/markdown-to-preact.png',
    },
    {
        title: 'delimiterized-regex-builder',
        description:
            'A Typescript library for generating a regex from an array of strings to match all of the strings in order, separated by a delimiter.',
        technologies: ['Typescript', 'Regex'],
        link: {
            href: 'https://www.npmjs.com/package/@dpatt/delimiterized-regex-builder',
            text: 'View on NPM',
        },
        image: '/images/delimiterized-regex.png',
    },
    {
        title: 'Portfolio',
        description:
            'This website! Built with Next.js, Chakra UI, and Typescript. This site is used in production by Daniel Patton😁.',
        technologies: ['Next.js', 'Chakra UI', 'Typescript'],
        link: { href: 'https://github.com/dpatton1992/next-portfolio', text: 'View on GitHub' },
        image: '/images/portfolio.png',
    },
];