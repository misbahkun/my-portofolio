import {
  MdEmail,
  MdOpenInNew,
} from 'react-icons/md'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'
import { Helmet } from 'react-helmet-async'

const contacts = [
  {
    icon: MdEmail,
    label: 'misbahudin.id@gmail.com',
    href: 'mailto:misbahudin.id@gmail.com',
    color: 'text-red-500',
  },
  {
    icon: FaLinkedin,
    label: 'Misbahudin',
    href: 'https://linkedin.com/in/misbahudin99',
    color: 'text-blue-500',
    external: true,
  },
  {
    icon: FaInstagram,
    label: '@misbahudin.99',
    href: 'https://instagram.com/misbahudin.99',
    color: 'text-red-500',
    external: true,
  },
  {
    icon: FaGithub,
    label: 'misbahkun',
    href: 'https://github.com/misbahkun',
    color: 'text-gray-800 dark:text-gray-200',
    external: true,
  },
]

export function Contact() {
  return (
    <div className="prose dark:prose-invert">
      <Helmet>
        <title>Reach Me — Misbahudin</title>
        <meta name="description" content="Get in touch with Misbahudin via email, LinkedIn, Instagram, or GitHub." />
        <meta property="og:title" content="Reach Me — Misbahudin" />
        <meta property="og:description" content="Get in touch with Misbahudin via email, LinkedIn, Instagram, or GitHub." />
      </Helmet>
      <h1 className="text-center mt-5">Reach Me!</h1>
      <div className="mx-auto max-w-[300px]">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="flex items-center gap-3 mb-5"
          >
            <contact.icon className={`w-6 h-6 ${contact.color}`} />
            <a
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
            >
              {contact.label}
              {contact.external && (
                <MdOpenInNew className="inline ml-1 w-3 h-3 opacity-50" />
              )}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
