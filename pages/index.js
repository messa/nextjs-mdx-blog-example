import Link from 'next/link'
import posts from '../posts'

const PostPreview = ({ post, prefetch }) => {
  return (
    <div>
      <h2>
        <Link href={post.urlPath} prefetch={prefetch}><a>{post.title}</a></Link>
      </h2>
    </div>
  )
}

export default () => (
  <div>
    {posts.map((post, i) => (
      <PostPreview key={i} post={post} prefetch={i < 3} />
    ))}
  </div>
)
