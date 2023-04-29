import "./AboutMe.css";
import { useGetAboutMeQuery, useGetHomeDetailsQuery } from "../../Api/api";
import { useEffect, useState } from "react";
import decor1 from "../../images/decoration/dots-1.png";
import reactagle from "../../images/decoration/Rectangle-7.png";
import shady from "../../images/decoration/dots.png";

const AboutMe = () => {
  const { data: aboutData, isFetching } = useGetAboutMeQuery();
  const [aboutMe, setAboutMe] = useState(aboutData);
  const img_300 = "https://drive.google.com/uc?id=1B97-7cbBT2HhLUqHh5bvfckaGLsudQmj"; 

  const { data: conta2 } = useGetHomeDetailsQuery();
  const [contacts1Details, setContact2Details] = useState(conta2);
  const cv = contacts1Details && contacts1Details.map((data1) => data1.cv_link);
  console.log(cv);
  console.log(conta2);

  useEffect(() => {
    setAboutMe(aboutData);
    setContact2Details(conta2);
  }, [aboutData, conta2]);

  return (
    <>

      <main id="about" >
        <div className="aboutMe-container">
          <div className="about-decor">
            <div className="about-dots">
              <img src={decor1} alt="" />
            </div>
            <div className="about-rect">
              <img src={reactagle} alt="" />
            </div>
            <div className="about-shady">
              <img src={shady} alt="" />
            </div>
          </div>
          <div className="abouMe-row">
            <div
              className=" col-lg-6 col-md-5 col-sm-12 about-img"
              data-aos="fade-up-right"
            >
              <img src={`${img_300}`} alt="" />
            </div>
            <div
              className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
              data-aos="fade-up-left"
            >
              <div className="title">
                {/* <h2>{details.title}</h2> */}
                <h2>About Me</h2>
                <h3>Why hire me for your next project?</h3>
              </div>
              <div className="about-description">
                <div id="foo" unselectable="on" class="unselectable">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `<p> I am enthusiastic <strong>SOFTWARE DEVELOPER </strong> based in <a href="https://goo.gl/maps/syKE6Dcj4ngFJxd37"> <strong> Multan, Pakistan </strong> </a>. I have expertise in developing scalable and efficient web and mobile applications. My proficiency in <strong>MERN STACK</strong> enables me to develop scalable and efficient applications that meet the requirements of businesses of all sizes. My ability to work with the entire technology stack and strong communication skills make me a valuable asset to any development project. </p>`,
                    }}
                  />
                </div>
              </div>

              <div className="itscv" style={{marginTop:"3%"}}>
                <a
                  href="https://drive.google.com/file/d/1GZ6AfR-5BBip6pr79pIa-m41xUxNYHLB/view?usp=sharing"
                  download="RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="download-cv">
                    Download Cv <i class="bx bx-download"></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* ))} */}
    </>
  );
};

export default AboutMe;
