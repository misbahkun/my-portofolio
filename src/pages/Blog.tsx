import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { blogPosts } from '../data/blog'

export function Blog() {
  return (
    <div className="prose dark:prose-invert">
      <Helmet>
        <title>Blog — Misbahudin</title>
        <meta name="description" content="Thoughts and articles about fullstack development, Go, Laravel, React, and software engineering." />
        <meta property="og:title" content="Blog — Misbahudin" />
        <meta property="og:description" content="Thoughts and articles about fullstack development, Go, Laravel, React, and software engineering." />
      </Helmet>
      <h1 className="text-center mt-5">My Blog</h1>
      <section>
        {blogPosts.map((post) => (
          <div
            key={post.slug}
            className="border-b border-gray-200 dark:border-gray-800 py-4 last:border-b-0"
          >
            <div className="flex gap-3 items-baseline">
              <div className="text-sm text-gray-400 font-medium w-8 shrink-0">
                {post.lang}
              </div>
              <div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="font-medium hover:underline"
                >
                  {post.title}
                </Link>
                <div className="text-sm text-gray-400 mt-1">{post.date}</div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}
