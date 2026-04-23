"use client"

import { Button } from "@/components/ui/button"
import { IconDoor, IconMenu2, IconX } from "@tabler/icons-react"
import Link from "next/link"
import { useState, useEffect } from "react"

const links = [
  { label: "Funcionalidades", href: "#features" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Depoimentos", href: "#testimonials" },
  { label: "Preços", href: "#pricing" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/40 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-black tracking-tight text-foreground"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary">
            <IconDoor className="size-4 text-primary-foreground" />
          </div>
          TrackDoor
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
            asChild
          >
            <Link href="/auth">Entrar</Link>
          </Button>
          <Button
            size="sm"
            className="rounded-xl px-5 font-semibold shadow-md shadow-primary/20"
            asChild
          >
            <Link href="/auth">Começar grátis</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="rounded-xl p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <IconX className="size-5" />
          ) : (
            <IconMenu2 className="size-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="flex flex-col gap-1 border-t border-border/40 bg-background/95 px-6 py-4 backdrop-blur-xl md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-border/40 pt-4">
            <Button variant="outline" size="sm" className="rounded-xl" asChild>
              <Link href="/auth" onClick={() => setOpen(false)}>Entrar</Link>
            </Button>
            <Button size="sm" className="rounded-xl font-semibold" asChild>
              <Link href="/auth" onClick={() => setOpen(false)}>Começar grátis</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
