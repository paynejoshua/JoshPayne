import React, {useState, useEffect} from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import Projects from "../Projects";
import AboutMe from "../aboutMe"
import Resume from "../Resume"
import ContactMe from "../Contact"
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowCircleRight} from "@fortawesome/free-solid-svg-icons"
import { faArrowCircleLeft} from "@fortawesome/free-solid-svg-icons"




function WindowSlide(props){

    const [projectPane, setProjectPane] = useState(false)
    const [aboutMePane, setAboutMePane] = useState(false)
    const [resumePane, setResumePane] = useState(false)
    const [contactPane, setContactPane] = useState(false)

    const [state, setState] = useState({
        isPaneOpenRight: false,
        isPaneOpenLeft: false,
      });

      useEffect(() =>{
        switch(props.paneChoice){
          case "Projects":
            setProjectPane(true)
            setState({ isPaneOpenRight: true })
            break
          case "About Me":
            setAboutMePane(true)
            setState({ isPaneOpenRight: true })
            break
          case "Resume":
            setResumePane(true)
            setState({ isPaneOpenRight: true })
            break
          case "Contact":
            setContactPane(true)
            setState({ isPaneOpenRight: true })
            break
          default:
            setState({ isPaneOpenRight: false })
        }

      }, [props.paneChoice])
    
      return (
        <div>

          {/* Right */}
          { projectPane ?
            <SlidingPane
          // Projects Pane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpenRight}
            title="Projects"
            closeIcon={<FontAwesomeIcon icon={faArrowCircleRight} size="lg"/>}
            subtitle="Here are some of the projects I have worked on."
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              setState({ isPaneOpenRight: false });
              setProjectPane(false)
              props.onClose()
            }}
          >
            <Projects />
          </SlidingPane>
          : null  
        }

        { aboutMePane ?
          <SlidingPane
          // About Me Pane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpenRight}
            title="About Me"
            closeIcon={<FontAwesomeIcon icon={faArrowCircleRight} size="lg" />}
            onRequestClose={() => {
              // triggered on "<" on left top click or on outside click
              setState({ isPaneOpenRight: false });
              setAboutMePane(false)
              props.onClose()
            }}
          >
            <AboutMe />
          </SlidingPane>

          : null


        }


          {
            resumePane ? 
            <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpenRight}
            title="Resume:"
            from="left"
            closeIcon={<FontAwesomeIcon icon={faArrowCircleLeft} size="lg"/>}
            onRequestClose={() => {
              setState({ isPaneOpenRight: false });
              setResumePane(false)
              props.onClose()
            
            }
          }
          >
            <Resume />
          </SlidingPane>
          
            : null
        }

        {
          contactPane ?
          <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
            isOpen={state.isPaneOpenRight}
            title="Get in touch with me:"
            from="left"
            closeIcon={<FontAwesomeIcon icon={faArrowCircleLeft} size="lg" />}
            width= "30rem"
            onRequestClose={() => {
              setState({ isPaneOpenRight: false });
              setContactPane(false)
              props.onClose()
            
            }
            }
            
          >
            <ContactMe />
          </SlidingPane>

          : null

        }
        </div>
      );
    
}

export default WindowSlide