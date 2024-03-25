import { FC } from "react"
import Link from "next/link"

export const Navbar: FC = () => {
    return (
        <header className="main__nav">
            <nav>
                <div className="page__links">
                    <Link href="/works">Works</Link>
                    <Link href="/info">Info</Link>
                </div>
            </nav>
        </header>
    )
}