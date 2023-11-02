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
        title: 'Tilled Node',
        description:
            "A Node.js library for interacting with Tilled's API. Built with Typescript and OpenAPIGenerator to automatically generate upon changes to the Tilled API.",
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
        title: 'docs.tilled.com',
        description:
            "Tilled's technical documentation, built with Hugo, a custom fork of StaticCMS, and support for whitelabel functionality. This site is used in production by Tilled.",
        technologies: ['Hugo', 'Javascript', 'Netlify', 'Github Actions', 'Preact'],
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
        title: 'FancyUI',
        description:
            'A Fancy React component library built with React, Typescript, Emotion, Jest, and Storybook and hosted on NPM. This library shows off my skills in building a component library, including accessibility, documentation, and testing.',
        technologies: ['React', 'Typescript', 'Emotion', 'Jest', 'Storybook'],
        link: {
            href: 'https://www.npmjs.com/package/fancy-ui-react',
            text: 'View on NPM',
        },
        image: '/images/fancy-ui.png',
    },
    {
        title: 'Portfolio',
        description:
            'This website! Built with Next.js, Chakra UI, and Typescript. This site is used in production by Daniel Patton😁.',
        technologies: ['Next.js', 'Chakra UI', 'Typescript'],
        link: { href: '/', text: 'View on GitHub' },
        image: '/images/portfolio.png',
    },
];