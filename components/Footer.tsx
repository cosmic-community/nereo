interface FooterProps {
  footerLinkLabel: string
  footerLinkUrl: string
}

export default function Footer({ footerLinkLabel, footerLinkUrl }: FooterProps) {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 text-center">
        <a
          href={footerLinkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-white"
        >
          {footerLinkLabel}
        </a>
      </div>
    </footer>
  )
}