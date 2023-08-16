import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Navbar, Flowbite, DarkThemeToggle, Footer } from 'flowbite-react'
import BannerGithub from './BannerGithub'

type Props = {
  children?: ReactNode
  title?: string
  background?: string
}
// Header and Footer adjustment can be done here where other part of the objects can be parsed or called in other components 

const Layout = ({ children, title = 'This is the default title', background = 'bg-gradient-to-r from-sky-500 to-indigo-500' }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Flowbite>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {/* NAVBAR STARTS HERE */}
    <Navbar
      fluid={true}
      rounded={false}
    >
    <Navbar.Brand href="https://flowbite.com/">
      <img
        src="https://flowbite.com/docs/images/logo.svg"
        className="mr-3 h-6 sm:h-9"
        alt="Logo"
      />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        Injexicon
      </span>
    </Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse>
      <Navbar.Link
        href="/navbars"
        active={true}
      >
        Home
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        About
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Levels
      </Navbar.Link>
      <Navbar.Link href="/navbars">
        Contact
      </Navbar.Link>
      <div className="flex md:order-2">
      <DarkThemeToggle />
      </div>
    </Navbar.Collapse>
  </Navbar>
    {/* NAVBAR ENDS HERE */}
    <BannerGithub />
    <div className="flex-auto from-indigo-500 to-indigo-300">
    {children}
    </div>
    {/* FOOTER STARTS HERE */}
    <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">About</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
            </li>
            <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">Licensing</a>
            </li>
            <li>
                <a href="#" className="hover:underline">Contact</a>
            </li>
        </ul>
    </footer>
    {/* FOOTER ENDS HERE */}
    </Flowbite>
  </div>
)

export default Layout
