export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Pjh',
  description:
    'Pjh home. Web developer, Apsiring Data Viz, JavaScript, TypeScript, GraphQL, React, Nextjs, Remix, Nodejs, Python, Vuejs, Svelte',
  // url: "https://tx.shadcn.com",
  // ogImage: "https://tx.shadcn.com/og.jpg",
  mainLinks: [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'Admin',
      href: '/admin',
    },
    {
      title: 'Log in',
      href: '/api/auth/signin',
    },
    {
      title: 'Log out',
      href: '/api/auth/signout',
    },
  ],
  links: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/taxonomy',
  },
}
