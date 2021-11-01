// @ts-nocheck
export const Links = () => {
    const ITEMS = [
        {
            href: "https://nextjs.org/docs",
            title: "Documentation &rarr;",
            description: "Find in-depth information about Next.js features and API."
        },
        {
            href: "https://nextjs.org/learn",
            title: "Documentation &rarr;",
            description: "Find in-depth information about Next.js features and API."
        },
        {
            href: "https://github.com/vercel/next.js/tree/master/examples",
            title: "Documentation &rarr;",
            description: "Discover and deploy boilerplate example Next.js projects."
        },
        {
            href: "https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
            title: "Deploy &rarr;",
            description: "Instantly deploy your Next.js site to a public URL with Vercel."
        },
    ]
    return(
      <div className="grid">
        { ITEMS.map( item => {
          return (
            <a key={key.href} href={ item.href } className="card">
              <h3>{ item.title }</h3>
              <p>{ item.description }</p>
            </a>
          )
        })}
    </div>
    );
  }
