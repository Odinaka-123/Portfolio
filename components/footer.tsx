export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-muted/40 py-6">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-center text-sm text-muted-foreground">© {currentYear} Oddy. All rights reserved.</p>
        <p className="text-center text-sm text-muted-foreground">Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  )
}
