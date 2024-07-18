const Title = ({ title1, title2 }) => {
  return (
    <div className="section-title">
      <h2>
        {title1} <span>{title2}</span>
      </h2>
    </div>
  );
};
export default Title;
