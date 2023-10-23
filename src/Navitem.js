import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./Navitem.css";
export default function Navitem({ content, index, isactive, setState }) {
  function itemClick(index, setState) {
    setState(index);
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
