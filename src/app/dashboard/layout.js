import Link from "next/link";

export default function Layout({ children }) {
    return(
        <section className="min-h-screen flex">
            <div className="w-1/4 border-r-2 border-r-purple-600">
            <Link className="p-2 text-center w-full block hover:bg-purple-300" href="/dashboard/settings">
            Settings
            </Link>
            <Link className="p-2 text-center w-full block hover:bg-purple-300" href="/dashboard/profile">
            Profile
            </Link>
            </div>
            <div className="w-3/4">{children}</div>
            </section>
    )
}