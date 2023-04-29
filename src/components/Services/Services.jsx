import "./Services.css";
import { useGetServicesQuery } from "../../Api/api";
import { useEffect, useState } from "react";

const myServices = [
  {
    id: 1,
    link: "http://drive.google.com/uc?id=1Xou8hPivlKoRgGi5p68iSQ90cU0Zozq6",
    title: "Web Development",
    des: "As a web developer, I specialize in building applications using React, Node.js, Express, and PostgreSQL. With my expertise, I am able to develop dynamic and responsive web applications."
  },
  {

    id: 2,
    link: "https://drive.google.com/uc?id=1JcoLNZtWCXFHP1cq6qU6e5AE4UmPnHmP",
    title: "Mobile Apps Development",
    des: "As a skilled React Native developer, I specialize in developing high-quality mobile applications for both iOS and Android platforms. With my expertise in React Native, I am able to create robust and responsive mobile applications."
  },
  {
    id: 3,
    link: "http://drive.google.com/uc?id=1KAJwHOx7L9gmvoe0VX8PTl1Y2vqG6etc",
    title: "API Integration",
    des: "I have extensive experience in API development, I can ensure secure and reliable data exchange between applications, resulting in improved efficiency and productivity."
  },


]

const Services = () => {
  const { data: services, isFetching } = useGetServicesQuery();
  const [servicesDetails, setServicesDetails] = useState(services);
  const img_300 = "http://drive.google.com/uc?id=";

  useEffect(() => {
    setServicesDetails(services);
    console.log(servicesDetails);
  }, [servicesDetails, services]);
  if (isFetching) return "loading";

  return (
    <>
      <section id="services">
        <div className="service-container">
          <div className="service-title">
            <h2>What Service i Offer you</h2>

            <h3>Services</h3>
          </div>

          <div className="service-row">
            {
              myServices.map((service) => (
                <div
                  className=" my-service"
                  key={service.id}
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                >
                  <div className="ser-back">
                    <img src={`${service.link}`} alt="" />
                  </div>
                  <h4 className="web">{service.title}</h4>
                  <p className="service-info">{service.des}</p>
                  {/* <h6 className="learn-more">{service.learn_more}</h6> */}

                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
