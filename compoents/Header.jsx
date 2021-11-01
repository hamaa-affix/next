// @ts-nocheck
import Link from "next/link";

export const Header = () => {
    return (
        <header>
            <Link href="/">
              <a>indexへ</a>
            </Link>
            <Link href="/about">
                <a>aboutへ</a>
            </Link>
        </header>
    );
}
