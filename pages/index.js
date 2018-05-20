import Link from 'next/link'
import posts from '../posts'

const PostPreview = ({ post, prefetch }) => {
  return (
    <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <h2>
        <Link href={post.urlPath} prefetch={prefetch}><a>
          {post.title}
        </a></Link>
      </h2>
    </div>
  )
}

export default () => (
  <div>
    {posts.map((post, i) => (
      <PostPreview key={i} post={post} prefetch={i < 3} />
    ))}
    <p style={{ textAlign: 'right' }}>
      <a rel="alternate" type="application/rss+xml" href="/static/rss-feed.xml">
        <img src='/static/rss-feed-icon-28x28.png' alt='RSS feed' width='28' height='28' />
      </a>
      {' '}
      <a href="https://github.com/messa/nextjs-mdx-blog-example">
        <img src='/static/github-icon-64x64.png' alt='Github repo' width='28' height='28' />
      </a>
    </p>
  </div>
)
