import { Heading } from "./Aboutus";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Researchitems from "./Researchitems";
const imgDetails = [
  { path: "code.png", content: "Programming Languages" },
  { path: "local-area-network.png", content: "Computer Networks" },
  { path: "architecture.png", content: "Computer Architecture" },
  { path: "iot.png", content: "Internet Of Things" },
  { path: "password.png", content: "Systems Security" },
  { path: "cloud.png", content: "Cloud Computing" },
];

export default function Research() {
  return (
    <div
      className="container d-flex flex-column justify-content-center align-items-center"
      style={{
        clipPath: "polygon(0% 10%, 100% 0%, 100% 100%,0% 100%)",
        backgroundColor: "rgba(0, 0, 0, 0.72)",
        color: "white",
        height: "90vh",
      }}
    >
      <div className="row d-flex justify-content-center gx-5">
        <div
          className="col-12"
          style={{
            marginTop: "5%",
            textAlign: "center",
            width: "100%",
            fontFamily: "Montserrat",
            fontWeight: "300",
            letterSpacing: ".4rem",
            fontSize: "1.2rem",
          }}
        >
          RESEARCH AREAS OF INTEREST
        </div>
      </div>
      <div className="row d-flex justify-content-center gx-5">
        <div className="col-4 d-flex justify-content-center align-items-center my-5">
          <Researchitems
            imgName={imgDetails[0].path}
            content={imgDetails[0].content}
          />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center my-5">
          <Researchitems
            imgName={imgDetails[1].path}
            content={imgDetails[1].content}
          />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center my-5">
          <Researchitems
            imgName={imgDetails[2].path}
            content={imgDetails[2].content}
          />
        </div>
      </div>
      <div className="row d-flex justify-content-center gx-5">
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Researchitems
            imgName={imgDetails[3].path}
            content={imgDetails[3].content}
          />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Researchitems
            imgName={imgDetails[4].path}
            content={imgDetails[4].content}
          />
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <Researchitems
            imgName={imgDetails[5].path}
            content={imgDetails[5].content}
          />
        </div>
      </div>
    </div>
  );
}
