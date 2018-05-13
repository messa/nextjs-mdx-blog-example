import Link from 'next/link'
import posts from '../posts'

const PostPreview = ({ post }) => {
  const href = `/${post.slug}`
  return (
    <div>
      <h2><Link href={href}><a>{post.title}</a></Link></h2>
    </div>
  )
}

export default () => (
  <div>
    <h1>My blog</h1>
    {posts.map(post => <PostPreview key={post.slug} post={post} />)}
  </div>
)
