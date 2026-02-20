import { Helmet } from 'react-helmet-async'

export function About() {
  return (
    <div className="prose dark:prose-invert">
      <Helmet>
        <title>Misbahudin — About</title>
        <meta name="description" content="Fullstack developer from Tegal, Indonesia. Working with Laravel, Go, and React" />
        <meta property="og:title" content="Misbahudin — About" />
        <meta property="og:description" content="Fullstack developer from Tegal, Indonesia. Working with Laravel, Go, and React" />
      </Helmet>
      <h1 className="text-center mt-5">Misbahudin</h1>
      <p>
        Hey! I'm Misbah, a passionate fullstack developer from Tegal, Indonesia.
      </p>
      <p>
        My passion for software lies with dreaming up ideas and making them come
        true with elegant interfaces. I take great care in experience,
        architecture, and code quality of the things I build.
      </p>
      <p>
        I work across the entire stack — from building REST APIs with Laravel,
        Express, to crafting frontends with React. I also
        enjoy exploring mobile development with Kotlin/Flutter and diving into machine
        learning projects.
      </p>
      <p>
        Outside of programming, I enjoy learning new things and challenging
        myself to grow both as a developer and as a person. I also like to play games FPS.
      </p>
      <hr />
      <p>
        Find me on{' '}
        <a
          href="https://github.com/misbahkun"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{' '}
        and{' '}
        <a
          href="https://linkedin.com/in/misbahudin99"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        .
      </p>
    </div>
  )
}
