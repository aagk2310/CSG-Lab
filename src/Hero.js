import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function CSG() {
  return (
    <div
      className="col-5"
      style={{
        fontSize: "1.5rem",
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <img
        src="./csg-logo-white.png"
        style={{ width: "40%", aspectRatio: "auto" }}
      />
      <span
        style={{
          fontFamily: "Montserrat",
          fontWeight: "500",
          letterSpacing: ".4rem",
        }}
      >
        COMPUTER
      </span>
      <span
        style={{
          fontFamily: "Montserrat",
          fontWeight: "500",
          letterSpacing: ".4rem",
        }}
      >
        SYSTEMS GROUP
      </span>
    </div>
  );
}
function Heroimage() {
  return (
    <div
      className="col-7 "
      style={{ overflow: "hidden", height: "100%", justifyContent: "flex-end" }}
    >
      <img
        src="./Image1.jpg"
        alt="Hero Image"
        style={{ width: "100%", height: "100%", marginRight: "0" }}
      />
    </div>
  );
}
export default function Hero() {
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#9F885B",
        width: "100%",
        height: "15rem",
        display: "flex",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <div className="row h-100" style={{ alignItems: "center" }}>
        <CSG />
        <Heroimage />
      </div>
    </div>
  );
}
