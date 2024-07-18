import { tours } from "../data.js";

import Title from "./Title";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title1="featured" title2="tours" />

      <div className="section-center featured-center">
        {tours.map((list) => {
          const { id, img, date, title, content, country, days, price } = list;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{content}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {country}
                  </p>
                  <p>{days} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
        ;
      </div>
    </section>
  );
};
export default Tours;
