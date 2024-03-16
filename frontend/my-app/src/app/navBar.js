import React from 'react'
import Link from 'next/link';

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link href="/home"><a>Home</a></Link>
                </li>
                <li>
                    <Link href="/about"><a>About</a></Link>
                </li>
                <li>
                    <Link href="/profile"><a>Profile</a></Link>
                </li>
                <li>
                    <Link href="/signIn"><a>Sign In</a></Link>
                </li>
                <li>
                    <Link href="/signUp"><a>Sign Up</a></Link>
                </li>
                <li>
                    <Link href="/tweet"><a>Tweet</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar