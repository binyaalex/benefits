import { Link } from "react-router-dom";

const GrayIcon = ({ img, i, url, link, title }) => {
  let cn = link === url ? "grayIconLink chosen" : "grayIconLink ";

  return (
    <Link to={link} className={cn}>
      {img}
      <div className="grayIconTitle">{title}</div>
    </Link>
  );
};

export default GrayIcon;
