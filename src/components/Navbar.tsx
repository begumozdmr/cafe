import React, { useEffect, useState } from 'react';
import { IconBrandInstagram, IconMenu2, IconX } from '@tabler/icons-react';
import { IconBrandFacebookFilled, IconBrandTwitterFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Button from './Button';

interface LinkType {
  id: number,
  path: string,
  name: string
};

const NavbarLinkData: LinkType[] = [
  {
    id: 1,
    path: "/",
    name: "HOME"
  },
  {
    id: 2,
    path: "/menu",
    name: "MENU"
  },
  {
    id: 3,
    path: "/reservation",
    name: "RESERVATION"
  },
  {
    id: 4,
    path: "/contact",
    name: "CONTACT"
  },
  {
    id: 5,
    path: "/gallery",
    name: "GALLERY"
  },
  {
    id: 6,
    path: "/team",
    name: "TEAM"
  },
];

export default function Navbar() {

  const [activeLink, setActiveLink] = useState<number>(1);
  const [responsiveMenu, setResponsiveMenu] = useState<boolean>(false);

  const handleResponsiveMenu = () => {
    setResponsiveMenu(!responsiveMenu);
  };

  const handleActiveLink = (id: number) => {
    setActiveLink(id === activeLink ? 0 : id);
    setResponsiveMenu(false);
    window.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(".navbar",
      {
        backgroundColor: 'transparent',
      },
      {
        backgroundColor: '#252525',
        scrollTrigger: {
          trigger: ".navbar",
          start: "top",
          scrub: true,
          toggleActions: "play none none reverse"
        }
      }
    );

    const bodyStyle = document.querySelector("body")?.style;

    if (responsiveMenu && bodyStyle) {
      bodyStyle.overflow = "hidden";
    }
    else if (bodyStyle) {
      bodyStyle.overflow = "auto";
    }
  });

  return (
    <>
      <header className='relative w-full'>
        <nav className='flex w-full justify-between items-center fixed h-70 bg-transparent pl-26 pr-26 text-white-100 gap-2 z-50 navbar'>
          <Link to="/">
            <h1 className='text-50'>Sanum</h1>
          </Link>

          <ul className='transition-all duration-500 ease-in opacity-0 invisible w-0 flex-row gap-5 self-stretch h-full items-center justify-center responsive--navbar'>
            {
              NavbarLinkData.map((index: LinkType) => {
                return (
                  <li className='text-13 font-700 tracking-[.20em] transition-all ease-in duration-500  hover:text-primary--color' key={index.id}>
                    <Link to={index.path} className={`flex items-center  ${index.id === activeLink ? "activeLink" : ""}`} onClick={() => handleActiveLink(index.id)}>{index.name}</Link>
                  </li>
                )
              })
            }
          </ul>
          <div className='flex flex-row gap-3'>
            <Link to="#">
              <IconBrandFacebookFilled width={"18px"} />
            </Link>

            <Link to="#">
              <IconBrandTwitterFilled width={"18px"} />
            </Link>

            <Link to="#">
              <IconBrandInstagram width={"18px"} />
            </Link>

            <div className='responsive cursor-pointer' onClick={handleResponsiveMenu}>
              <IconMenu2 width={"18px"} />
            </div>
          </div>
        </nav>

      </header>

      <div className={`overflow-x-scroll w-responsive--navbar bg-submenu-normal--color p-10 fixed z-[1000] h-screen text-footer--color responsive--navbar--menu transition-all duration-200 ease-in opacity-0 invisible ${responsiveMenu ? "active" : ""}`}>
        <div className='flex flex-col gap-4'>
          <div className='p-2 cursor-pointer' onClick={() => setResponsiveMenu(false)}>
            <IconX />
          </div>
          {
            NavbarLinkData.map((index: LinkType) => {
              return (
                <div className='p-2 h-full self-stretch text-13 font-700 tracking-[.20em] transition-all ease-in duration-500  hover:text-primary--color' key={index.id}>
                  <Link to={index.path} className={`ml-[48px] flex h-full ${index.id === activeLink ? "activeLink" : ""}`} onClick={() => handleActiveLink(index.id)}>{index.name}</Link>
                </div>
              )
            })
          }
          <div className='flex justify-center items-center flex-col gap-5'>
            <Button value='book a table' />
            <p className='text-footer--color mt-5'>58 Ralph Ave<br />New York, New York 1111</p>
            <p className='text-24 text-footer--color'>+1 800 000 111</p>
            <h1 className='text-70'>Sanum</h1>
          </div>
        </div>
      </div>
    </>
  )
}
