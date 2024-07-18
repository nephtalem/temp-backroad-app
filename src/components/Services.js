import Title from "./Title";
import { servicesList } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title1="our" title2="service" />
      <div className="section-center services-center">
        {servicesList.map((list) => {
          const { id, icon, title, content } = list;
          return (
            <article className="service" key={id}>
              <span className="service-icon">
                <i className={icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <p className="service-text">{content}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
