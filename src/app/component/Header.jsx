"use client"

import { usePathname } from "next/navigation"
import Link from "next/link"

export default function Header() {
    const pathname = usePathname();
    return(
        <nav className="bg-purple-300 h-20 flex justify-center gap-3 items-center py-2">
            <Link className={`link ${pathname === "/" ? "active underline" : ""}`} href="/">
            Home
            </Link>
            <Link className={`link ${pathname === "/dashboard" ? "active underline" : ""}`} href="/dashboard">
            Dashboard
            </Link>
            <Link className={`link ${pathname === "/quotes" ? "active underline" : ""}`} href="/quotes">
            Quotes
            </Link>
            <Link className={`link ${pathname === "/blogs" ? "active underline" : ""}`} href="/blogs">
            Blogs
            </Link>
            <Link className={`link ${pathname === "/contact" ? "active underline" : ""}`} href="/contact">
            Contact
            </Link>
            <Link className={`link ${pathname === "/about" ? "active underline" : ""}`} href="/about">
            About
            </Link>
        </nav>
    )
}