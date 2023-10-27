import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navitem.css";
import { useNavigate, Link } from "react-router-dom";

export default function Navitem({ content, index, isactive, setState, route }) {
   const navigate = useNavigate();

  function itemClick(index, setState) {
    setState(index);
    navigate(route);
  }
  return (
    <li className="nav-item">
      <a
        href="#"
        className={`nav-link nav-style ${isactive ? "active" : ""}`}
        onClick={() => {
          itemClick(index, setState);
        }}
      >
        {content}
      </a>
    </li>
  );
}
