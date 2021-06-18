import React from "react";
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav>
      <div>
        <img alt="icon" />
      </div>
      <div>
        <ul className="Menu-list">
          <li className="Menu-list-item"><Link href="/">Home</Link></li>
          <li className="Menu-list-item"><Link href="/">Nosotros</Link></li>
          <li className="Menu-list-item"><Link href="/">Servicios</Link></li>
          <li className="Menu-list-item"><Link href="/">Blog</Link></li>
          <li className="Menu-list-item"><Link href="/">Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
