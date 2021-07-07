import React from "react";
import Link from "next/link";
import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="d-flex justify-content-between align-items-center">
      <Link href="/">
        <a>
          <div>
            <Image src="/logo.svg" alt="icon" width={45.93} height={45.93} />
          </div>
        </a>
      </Link>

      <div className="Nav-menu">
        <ul className="Menu-list d-flex">
          <li className="Menu-list-item">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="Menu-list-item">
            <Link href="/nosotros">
              <a>Nosotros</a>
            </Link>
          </li>
          <li className="Menu-list-item">
            <Link href="/servicios">
              <a>Servicios</a>
            </Link>
          </li>
          <li className="Menu-list-item">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className="Menu-list-item">
            <Link href="/contacto">
              <a>Contacto</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
