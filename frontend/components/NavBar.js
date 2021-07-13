import React from "react";
import Link from "next/link";
import menuItems from "../utils/menuItems";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);


  return (
    <>
      <nav className="d-flex justify-content-between align-items-center">
        <Link href="/">
          <a>
            <div>
              <img src="/logo.svg" alt="icon" width={45.93} height={45.93} />
            </div>
          </a>
        </Link>

        <div className="menu-mobile" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src="/menu-mobile.svg" alt="menu-mobile" />
        </div>

        <div className={ isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <ul className="menu-list d-flex">
            {menuItems.map((item) => {
              return (
                <li className={item.className}>
                  <Link href={item.url}>
                    <a>{item.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
      <style jsx>{`
        nav {
          background-color: black;
          padding:1rem;
          flex-wrap: wrap;
        }

        .menu-list-item {
          margin: 0 1rem;
          color: #fff;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .menu-mobile {
          display: none;
        }

        @media (max-width: 520px) {
          nav {
            height: 80px;
            position: sticky;
            top: 0;
            z-index:2;
          }

          .menu-mobile {
            display: block;
            position: relative;
          }

          .nav-menu {
            display: flex;
            flex-direction: column;
            width: 100%;
            background-color: #000000;
            height: 100vh;
            position: absolute;
            top: 80px;
            opacity: 0.9;
            transition: all 0.5s ease;
            right: 100%;
            z-index: ;
          }

          .nav-menu.active {
            right: 0;
            transition: all 0.5s ease;
            z-index: 1;
          }

          .menu-list {
            flex-direction: column;

            width: inherit;
            align-items: center;
            height: 75%;
            justify-content: space-between;

            margin-top: 1rem;
          }
        }
      `}</style>
    </>
  );
};

export default NavBar;

