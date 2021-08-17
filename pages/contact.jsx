import Navbar from '../components/Navbar';
import Social from '../components/Social';
import Head from 'next/head'

//a basic contact page with some jsx styles below
function Contact() {
	return (
		<div>
			<Head>
				<script async src="https://www.googletagmanager.com/gtag/js?id=G-RNM6HQ1XXV"></script>
				<script>
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments)}
					gtag('js', new Date());

					gtag('config', 'G-RNM6HQ1XXV');
				</script>
				<title>Contact</title>
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			</Head>

			<Navbar />

			<Social />

			<section className="hero">
				<div className="container">
					<div className="text-wrapper w-full contact-text">
						<h1 className="title">Contact</h1>
						<p className="description">
							Please dont hesitate to reach out if you have any queries
						</p>
						<ul className="contact-links">
							<li className="contact-item"><a href="mailto:liamvolschenk@gmail.com">liamvolschenk@gmail.com</a></li>
							<li className="contact-item">+27 66 296 6589</li>
						</ul>
					</div>
					<div>
						<img src="/contact.jpeg" alt="" />
					</div>
				</div>
			</section>
			<style jsx>
				{`
				.contact-links {
					padding: 0;
					padding-left: 15px;
					margin-top: -10px;
					list-style: none;
					position: relative;
					right: 15px;
				}
				
				.contact-links .contact-item {
					padding-top: 10px;
					padding-bottom: 10px;
				}
				`}
			</style>
		</div>
	);
}

export default Contact;