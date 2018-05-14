import Link from 'next/link'
import posts from '../posts'

const PostPreview = ({ post, prefetch }) => {
  const href = `/${post.slug}`
  return (
    <div>
      <h2>
        <Link href={href} prefetch={prefetch}><a>{post.title}</a></Link>
      </h2>
    </div>
  )
}

export default () => (
  <div>
    <h1>My blog</h1>
    {posts.map((post, i) => (
      <PostPreview key={post.slug} post={post} prefetch={i < 3} />
    ))}
  </div>
)
