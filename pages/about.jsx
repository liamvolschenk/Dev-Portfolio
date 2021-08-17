//this is the about page for the site
import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Head from 'next/head'

//a basic about page to share some information about myself. I have included the navbar component. there are also some jsx styles below
function About() {
	return (
		<div className="about-page">
			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-RNM6HQ1XXV"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());

					gtag('config', 'G-RNM6HQ1XXV');
				</script>
				<title>About</title>
			</Head>

			<Navbar />

			<Social />

			<section className="hero about">
				<div className="container">
					<div className="text-wrapper w-full">
						<div className="about-text">
							<h1 className="title about-title">About</h1>
							<p className="description">
								Hello, my name is Liam Volschenk, I am an aspiring web developer with a passion for photography, design, technology and problem
								solving.
								<br />
								<br />
								I specialize in the MERN stack (MongoDB, Express, React.js and Node.js). However, I am a fast learner and I enjoy learning and
								adapting to any technologies or stack.
								<br />
								<br />
								I hope to use my work as a means of growing our economy fairly and safe guarding our environment for all future generations to
								enjoy.
							</p>
						</div>
						<div className="about-image">
							<img src="/environment.png" alt="" />
						</div>
					</div>
				</div>
			</section>
			<style jsx>
				{`
				.about-text {
					position: relative;
					bottom: 40px;
					width: 60%;
				}
				
				.about-image {
					position: absolute;
					right: 0px;
					top: 160px;
					z-index: -1;
				}
				`}
			</style>
		</div>
	);
}

export default About;
