import React from "react"
import ProfileImage from "../../assets/images/profileImage.jpg"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col" 
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faGithubSquare} from "@fortawesome/free-brands-svg-icons"
import { faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeSquare} from "@fortawesome/free-solid-svg-icons"

function ContactMe(){

    return(
        <>
            <Container>
            <img src={ProfileImage} alt="profile-pic" width="100px"/>

              <Row>
                <Col lg={12} sm={12}>
                <FontAwesomeIcon icon={faLinkedin} size={"lg"} />
               
                <a href="https://www.linkedin.com/in/josh-payne-5435a41a6/" rel="noreferrer" target="_blank"> LinkedIn</a>
             
                </Col>

                <Col lg={12} sm={12}>
                <FontAwesomeIcon icon={faGithubSquare} size={"lg"} />
               
                <a href="https://github.com/paynejoshua" rel="noreferrer" target="_blank"> GitHub</a>
           
                </Col>

                <Col lg={12} sm={12}>
                <FontAwesomeIcon icon={faEnvelopeSquare} size={"lg"} />
                <span> paynejoshua1@gmail.com</span>              
                </Col>
              </Row>

            </Container>

            <FontAwesomeIcon icon={['fa-github-square']}></FontAwesomeIcon>
              
              
        
            
        </>
    )
}

export default ContactMe