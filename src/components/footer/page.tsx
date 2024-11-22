import React from 'react';
import Link from 'next/link';

const enterpriseLinks = [
    { href: "#", label: "Home" },
    { href: "#", label: "About" },
    { href: "#", label: "Writers Bank" },
    { href: "#", label: "Contact" },
    { href: "#", label: "Portfolio" }
];

const productLinks = [
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." }
];

const docsLinks = [
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." }
];

const communityLinks = [
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." },
    { href: "#", label: "coming soon...." }
];

const footerLinks = [
    {
        name: "Home",
        links : enterpriseLinks
    },
    {
        name: "Home..",
        links : productLinks
    },
    {
        name: "Docs",
        links : docsLinks
    }
]

export default function Footer() {
    return (
        <footer className="card variant-outlined !bg-transparent">
            <div className="max-w-7xl mx-auto space-y-16 px-6 py-16 ">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-8">
                    <h1 className='text-white text-2xl font-bold'>GWO</h1>
                    <div className="flex gap-3">
                        <Link href="https://github.com/tailus-ui" target="blank" aria-label="github" className="size-8 flex *:m-auto text-body text-white hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                            </svg>
                        </Link>
                        <Link href="https://twitter.com/tailus_ui" target="blank" aria-label="twitter" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-white dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                            </svg>
                        </Link>
                        <Link href="https://youtube.com/@tailus-ui" target="blank" aria-label="medium" className="size-8 flex *:m-auto rounded-[--btn-border-radius] text-white dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="grid grid-cols-2  sm:grid-cols-4">
                    {
                        footerLinks.map((linksGroup, index) => (
                            <div key={index}>
                                <span className="font-medium text-xl hover:text-slate-400/40 cursor-pointer italic text-white dark:text-white">{linksGroup.name}</span>
                                <ul className="mt-4 list-inside space-y-4">
                                    {
                                        linksGroup.links.map((link, index) => (
                                            <li key={index}>
                                                <Link
                                                    href={link.href}
                                                    className="text-sm text-white dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                                                >
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                    <div>
                        <span className="text-xl hover:text-slate-400/40 font-medium cursor-pointer text-white dark:text-white italic ">Community</span>
                        <ul className="mt-4 list-inside space-y-4">
                            {
                                communityLinks.map((link, index) => (
                                    <li key={index}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-white dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>

                        <form className="mt-12 max-w-xs w-full">
                            <div className="space-y-2.5 has-[:disabled]:has-[:where(label,span)]:select-none has-[:disabled]:has-[:where(label,span)]:opacity-50 text-white dark:text-white has-[:disabled]:has-[:where(label,span)]:text-white">
                                <label className="block font-medium text-sm" htmlFor="email">Subscribe to our newsletter</label>
                                <input className="input bg-slate-400/40 rounded-[5px] pl-4 py-2 text-white" placeholder="Your email" type="email" id="email" required name="email" />
                                <span className="hidden peer-disabled:text-white dark:peer-disabled:text-gray-400 text-white dark:text-gray-400 text-sm">Helper message</span>
                            </div>
                            <button type="submit" className="btn bg-slate-400 px-4 rounded-xl sz-md mt-3">
                                <span>Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="mt-16 flex items-center bg-slate-600 justify-between rounded-xl  px-6 py-3 card variant-soft">
                    <span className="text-title  hover:text-white">&copy; GWO 2024 - Present</span>
                    <Link href="#" className="text-sm text-body hover:text-white dark:hover:text-primary-500">Licence</Link>
                </div>
            </div>
        </footer>
    );
}