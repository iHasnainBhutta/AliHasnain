import { useEffect, useState } from "react";
import decor3 from "../../images/decoration/Group-31.png";
import decor4 from "../../images/decoration/Path-25.png";
import "./Intro.css";
import { useGetHomeDetailsQuery } from "../../Api/api";
import { useGetSocialMediaQuery } from "../../Api/api";
const myContact = [
  {
    id: 12,
    link: "https://twitter.com/ihasnainbhutta",
    icon: "fab fa-twitter"
  },
  {

    id: 1,
    link: "https://instagram.com/ihasnainbhutta",
    icon: "fa fa-instagram"
  },
  {
    id: 2,
    link: "https://wa.me/03069597579?text",
    icon: "fa fa-whatsapp"
  },
  {
    id: 3,
    link: "https://linkedin.com/in/hasnain-bhutta",
    icon: "fa fa-linkedin"
  },


]



const Intro = () => {
  const { data: conta } = useGetSocialMediaQuery();

  const { data: homeData, isFetching } = useGetHomeDetailsQuery();
  const [homeDetails, setHomeDetails] = useState(homeData);
  const [contacts1Details, setContact2Details] = useState(conta);
  const img_300 = "http://drive.google.com/uc?id=";
  const title_name = homeDetails && homeDetails.map((detail2) => detail2.name);

  useEffect(() => {
    setHomeDetails(homeData);
    setContact2Details(conta);

    document.title = title_name;
    // console.log(conta);
  }, [homeDetails, homeData, contacts1Details, conta, title_name]);
  if (isFetching) return "loading";

  return (
    <>
      {/* {homeDetails & */}
      {/* homeDetails.map((detail) => ( */}
      <section className=" intro-page" id="home" >
        <div className="decorations">
          <div className="decor-dot2">
            <img src={decor3} alt="" />
          </div>

          <div className="parcol"></div>
        </div>
        <div className="small-intro">
          <div className="intro-row">
            <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
              <div className="intro-name">
                <h3
                  className="hello"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                >
                  {/* {detail.job_title} */}

                  Software Engineer
                </h3>
                <h3
                  className="name"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Hey! I Am
                </h3>
                <h3
                  className="job  text-animate"
                  data-aos="fade-down"
                  data-aos-duration="1700"
                >
                  Ali Hasnain
                  {/* {detail.name} */}
                </h3>
                <p
                  className="myinfo"
                  data-aos="fade-down"
                  data-aos-duration="1800"
                >
                  {/* {detail.par_inro} */}
                  A motivated individual with in-depth knowledge of languages and development tools
                  with having 1.5 + year experience in Development.

                </p>
              </div>
              <div
                className="intro-btns"
                data-aos="fade-up"
                data-aos-duration="1900"
              >
                <a
                  href={`mailto:ihasnainbhutta@gmail.com`}
                  className="contactMe"
                >
                  <button className="contact-me">
                    Hire me <i class="bx bx-send "></i>
                  </button>
                </a>
              </div>
              <div
                class="intro-contact"
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <span>Follow Me:</span>
                <ul>
                  <li>
                  {
                          myContact.map((data1) => ( 
                    <a
                      href={data1.link}
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    key={data1.id}
                    >
                      <i class={data1.icon} aria-hidden="true"></i>
                    </a>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-lg-7 col-md-6 col-sm-12 left-img "
              data-aos="fade-down-left"
            >
              <div className="ff">
                <img
                      className="intro-img"
                      src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
                      // src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
                      alt=""
                    />
                <img
                  className="intro-img"
                  // src={`${img_300}${detail.avatar_img}`}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ))} */}
    </>
  );
};

export default Intro;
