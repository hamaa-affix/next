// @ts-nocheck
import Link from "next/link";

export const Header = () => {
    return (
        <header
            className="box-border h-24 w-full shadow bg-white flex justify-between"
        >
            <div className=" ml-7">
                <Link href="/">
                    <a>
                        <img
                            className="mt-5"
                            src="/traditional.png" alt="" />
                    </a>
                </Link>
            </div>
            <div className="mr-48" >
                <div className="h-24 w-24 bg-yellow-100 text-center" >
                    <Link href="/login">
                        <a className="inline-block mt-8">Login</a>
                    </Link>
                </div>
            </div>
        </header>
    );
}
