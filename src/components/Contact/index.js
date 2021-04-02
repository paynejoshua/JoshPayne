import React from "react"
import ProfileImage from "../../assets/images/profileImage.jpg"


function ContactMe(){

    return(
        <>

          <p>Github, LinkedIn, Email</p>
            <img src={ProfileImage} alt="profile-pic" width="100px"/>
              <div class="linkedIn">
                <a href="https://www.linkedin.com/in/josh-payne-5435a41a6/" rel="noreferrer" target="_blank">LinkedIn</a>
              </div>
              <div class="gitHub">
                <a href="https://github.com/paynejoshua" rel="noreferrer" target="_blank">GitHub</a>
              </div>
        
            <p>paynejoshua1@gmail.com</p>
        </>
    )
}

export default ContactMe