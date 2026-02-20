import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Markdown from 'react-markdown'
import { blogPosts } from '../data/blog'

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="text-center py-20">
        <h1>Post not found</h1>
        <Link to="/blog" className="underline">
          Back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="prose dark:prose-invert mx-auto">
      <Helmet>
        <title>{post.title} — Misbahudin</title>
        <meta name="description" content={post.content.slice(0, 155).replace(/[#*`]/g, '')} />
        <meta property="og:title" content={`${post.title} — Misbahudin`} />
        <meta property="og:description" content={post.content.slice(0, 155).replace(/[#*`]/g, '')} />
        <meta property="og:type" content="article" />
      </Helmet>
      <div className="mb-8">
        <time className="text-sm text-gray-400">Published {post.date}</time>
        <h1 className="mt-2">{post.title}</h1>
      </div>
      <Markdown>{post.content}</Markdown>
      <hr />
      <Link to="/blog" className="text-sm">
        &larr; Back to all posts
      </Link>
    </div>
  )
}
