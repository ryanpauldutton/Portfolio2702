import Link from "next/link"

export default function Navbar(){
    return(
        <nav>
            <ul>
<Link href={"/"}>
    <li>Home</li>
    </Link>
    <Link href={"/"}>
    <li>Contact</li>
    </Link>
            </ul>
        </nav>
    )
}