import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Head from 'next/head'

//this is the index page, which acts as a home/landing page to the site
function Home() {
  return (
    <>
      <Head>
        <title>LV - Home</title>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="viewport" content="initial-scale=1" maximum-scale="1" user-scalable="no" width="device-width" viewport-fit="cover" />
      </Head>

      <Navbar />

      <Social />

      <section className="hero">
        <div className="container">
          <img className="home-img" src="/web-developer.jpeg" alt="home-image" />
          <div className="text-wrapper home-text">
            <h1 className="title">Hello, I am Liam Volschenk</h1>
            <p className="description">I am an aspiring web developer, photographer, designer, problem solver and forward thinker</p>

          </div>
        </div>
      </section>
    </>
  );
}

export default Home;