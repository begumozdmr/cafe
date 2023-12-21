import React, { useEffect, useState } from 'react';
import { IconBrandInstagram, IconMenu2 } from '@tabler/icons-react';
import { IconBrandFacebookFilled, IconBrandTwitterFilled } from '@tabler/icons-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

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
  });

  return (
    <>
      <header className='relative w-full'>
        <nav className='flex w-full justify-between items-center self-stretch fixed h-70 bg-transparent pl-26 pr-26 text-white-100 gap-2 z-50 navbar'>
          <Link to="/">
            <h1 className='text-50'>Sanum</h1>
          </Link>

          <ul className='transition-all duration-500 ease-in opacity-0 invisible w-0 flex-row gap-5 self-stretch h-full items-center justify-center responsive--navbar'>
            {
              NavbarLinkData.map((index: LinkType) => {
                return (
                  <li className='h-full self-stretch text-13 font-700 tracking-[.20em] transition-all ease-in duration-500  hover:text-primary--color' key={index.id}>
                    <Link to={index.path} className={`flex items-center h-full  ${index.id === activeLink ? "activeLink" : ""}`} onClick={() => handleActiveLink(index.id)}>{index.name}</Link>
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

      <div className={`w-full bg-submenu-normal--color pt-3 fixed top-[7.5%] z-[1000] h-auto text-white-100 responsive--navbar--menu transition-all duration-200 ease-in opacity-0 invisible ${responsiveMenu ? "active" : ""}`}>
        <div className='flex flex-col gap-4'>
          {
            NavbarLinkData.map((index: LinkType) => {
              return (
                <div className='h-full self-stretch text-13 font-700 tracking-[.20em] transition-all ease-in duration-500  hover:text-primary--color' key={index.id}>
                  <Link to={index.path} className={`flex items-center h-full p-2 ${index.id === activeLink ? "activeLink" : ""}`} onClick={() => handleActiveLink(index.id)}>{index.name}</Link>
                  <hr className='mt-2 opacity-20' />
                </div>
              )
            })
          }
        </div>
      </div>

    </>

  )
}
