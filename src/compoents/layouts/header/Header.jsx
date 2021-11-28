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
                <div className="h-full w-24 bg-yellow-100 text-center" >
                    <div>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
