import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




function Social() {
    return (
        <div>
            <div className="social-icons">
                <a target="_blank" href="https://github.com/liamvolschenk"><FontAwesomeIcon className="icon" icon={faGithub}></FontAwesomeIcon></a>
                <a target="_blank" href="https://www.linkedin.com/in/liam-volschenk-a72538116/"><FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
        </div>
    );
}

export default Social;