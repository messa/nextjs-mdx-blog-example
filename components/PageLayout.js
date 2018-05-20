import Head from 'next/head'
import Link from 'next/link'
import posts from '../posts'

const globalStyles = `

  body, html {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size: 16px;
  }

  a {
    color: #00c;
  }
  a:hover {
    color: #33f;
  }

  .contentContainer {
    max-width: 700px;
    margin: 0 auto;
  }

  .siteTitle {
    font-size: 30px;
    font-weight: 400;
    margin-top: 3rem;
    margin-bottom: 2rem;
  }
  .siteTitle a {
    color: #000;
    text-decoration: none;
  }
  .siteTitle a:hover {
    color: #666;
  }


`

const SiteTitle = ({ isHomepage }) => {
  const title = 'My blog'
  if (isHomepage) {
    return (
      <h1 className='siteTitle'>{title}</h1>
    )
  } else {
    return (
      <div className='siteTitle'>
        <Link href='/'><a>{title}</a></Link>
      </div>
    )
  }
}

export default ({ pathname, children }) => {
  const post = posts.find(post => post.urlPath === pathname)
  const title = post ? post.title : 'My blog'
  return (
    <div>
      <Head>
        <title>{title}</title>
        <style>{globalStyles}</style>
        <link rel="alternate" type="application/rss+xml" href="/static/rss-feed.xml" />
      </Head>
      <div className='contentContainer'>
        <SiteTitle isHomepage={pathname === '/'} />
        {children}
      </div>
    </div>
  )
}
