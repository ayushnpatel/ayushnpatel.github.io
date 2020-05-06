import React from 'react';
import { Navbar, Nav, Col} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faLinkedin, faGithubSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons'
import "/Users/ayush/Desktop/JavaScript/React/website/src/stylesheets/navigationBar.css"

function navigationBar(){
    return(
        <Navbar sticky="top" className="justify-content-start" bg="transparent" expand="lg">
            <Col>
                <Nav className="justify-content-start" >
                    <Nav.Item>
                        <Nav.Link href="#aboutme"><span className="anctag">About Me</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#projects" ><span className="anctag">Projects</span></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#contact" ><span className="anctag">Contact me!</span></Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
            <Col>
                <Nav className="justify-content-end">
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://github.com/ayushnpatel">
                            <FontAwesomeIcon icon={faGithubSquare} size="3x" className="smicons Github"></FontAwesomeIcon>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://www.facebook.com/ayush.patel.927">
                            <FontAwesomeIcon icon={faFacebookSquare} size="3x" className="smicons Facebook"></FontAwesomeIcon>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank" href="https://www.linkedin.com/in/ayush-patel-725832197/">
                            <FontAwesomeIcon icon={faLinkedin} size="3x" className="smicons Linkedin"></FontAwesomeIcon>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link target="_blank"  href="https://www.instagram.com/ayush.127/">
                            <FontAwesomeIcon icon={faInstagramSquare} size="3x" className="smicons Instagram"></FontAwesomeIcon>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Navbar>
    )
}

export default navigationBar;