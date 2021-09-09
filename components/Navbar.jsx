//a basic navbar component that allows users to easily to different pages on the site, the component will be imported and used on every page
//importing the next link API and router to help with the routing and navigation
import Link from 'next/link';
import { withRouter } from 'next/router';

//setting the titles and links for all of the nav items on the navbar
function Navbar({ router }) {
  const navs = [
    { text: 'Home', href: '/' },
    { text: 'Portfolio', href: '/portfolio' },
    { text: 'About', href: '/about' },
    { text: 'Contact', href: '/contact' },
  ];

  //creating a basic navbar, below is a function to map over all the nav variables created above
  //some jsx styles are used below to style the component
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <Link href="/"><a className="logo">LV.</a></Link>

          <ul className="nav-links">
            {navs.map(nav => (
              <li><Link href={nav.href}><a className={`nav-item ${router.pathname == nav.href ? 'active' : ''}`}>{nav.text}</a></Link></li>
            ))}
          </ul>
        </div>
      </nav>
      <style jsx>
        {`
        a[href] {
          color: #000;
        }
        
        .container {
          width: 100%;
          max-width: 980px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .navbar {
          margin-top: 20px;
        }
        
        .navbar .container {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }
        
        .navbar .logo {
          font-size: 28px;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-weight: 500;
          text-decoration: none;
        }
        
        @media screen and (max-width: 1010px){
          .navbar .logo {
            padding-left: 20px;
          }
        }

        .navbar .nav-links {
          display: flex;
          margin-left: auto;
          list-style: none;
          flex-wrap: wrap;
        }

        @media screen and (max-width: 800px){
          .navbar .nav-links { 
            padding: 0;
            margin: 20px auto;
          }
        }
        
        .navbar .nav-links .nav-item {
          position: relative;
          display: inline-block;
          margin-left: 20px;
          margin-right: 20px;
          text-decoration: none;
          transition: opacity 0.3s;
        }

        @media screen and (max-width: 500px){
          .navbar .nav-links .nav-item {
            margin: 0 5px !important;
            padding: 0;
            font-size: 14px;
          }
        }
        
        .navbar .nav-links .nav-item.active {
          font-weight: 700;
        }
        
        .navbar .nav-links .nav-item:hover {
          opacity: 0.5;
        }
        
        .navbar .nav-links .nav-item.active:after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 25px;
          height: 2px;
          background-color: #000;
       }
        `}
      </style>
    </div>
  );
}

export default withRouter(Navbar);