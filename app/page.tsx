export default async function Home() {
  return (
    <section className="flex flex-col gap-8">
      <h1 className="text-3xl text-neutral-100">Pjh</h1>
      <p className="max-w-[60ch] leading-6">
        A <strong className="font-normal text-orange-500">software developer</strong> using
        TypeScript, Node, React, GraphQL, Next and Remix. Currently learning data visualisations
        with D3. Work is at{' '}
        <a
          href="https://www.digitaltvilling.se"
          className="hover:text-neutral-100 cursor-pointer"
          rel="noreferrer"
          target="_blank"
        >
          Digital Tvilling
        </a>
        .
      </p>
      <ul role="list" className="flex flex-row gap-2">
        <li>
          <a
            href="https://github.com/johanhanses"
            className="hover:text-neutral-100 cursor-pointer"
            rel="noreferrer"
            target="_blank"
          >
            Github
            <span className="sr-only">Github link</span>
          </a>
        </li>

        <li>/</li>
        <li>
          <a
            href="https://www.linkedin.com/in/johanhanses"
            className="hover:text-neutral-100 cursor-pointer"
            rel="noreferrer"
            target="_blank"
          >
            Linkedin
            <span className="sr-only">Linkedin link</span>
          </a>
        </li>
      </ul>
    </section>
  )
}
