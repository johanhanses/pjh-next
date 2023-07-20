export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: 'Pjh',
  description:
    'Pjh home. Web developer and apsiring Data Viz using JavaScript, TypeScript, GraphQL, React, Nextjs, Remix, Nodejs, Python, Vuejs, Svelte',
  url: 'https://johanhanses.com',
  // ogImage: "https://johanhanses.com/og.jpg",
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
    linkedin: 'https://www.linkedin.com/in/johanhanses',
    github: 'https://github.com/johanhanses',
  },
}
