import Link from "next/link"
import { Mountain } from "lucide-react"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <Link href="/" className="flex items-center space-x-2">
        <Mountain className="h-6 w-6" />
        <span className="font-bold text-lg">Acme SaaS</span>
      </Link>
      <p className="text-xs text-muted-foreground sm:ml-auto">
        &copy; {new Date().getFullYear()} Acme SaaS Inc. All rights reserved.
      </p>
      <nav className="flex gap-4 sm:gap-6">
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Terms of Service
        </Link>
        <Link href="#" className="text-xs hover:underline underline-offset-4">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  )
}
