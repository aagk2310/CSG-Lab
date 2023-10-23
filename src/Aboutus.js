import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export function Heading({ content }) {
  return (
    <div
      style={{
        fontFamily: "Montserrat",
        marginTop: "2rem",
        fontWeight: "500",
        letterSpacing: ".4rem",
        width: "20%",
        textAlign: "center",
        fontSize: "1.5rem",
        borderBottom: "4px solid #ff6969",
      }}
    >
      {content}
    </div>
  );
}
export function Aboutus() {
  return (
    <div className="container justify-content-center">
      <div className="row justify-content-center">
        <Heading content={"ABOUT US"} />
      </div>
      <div
        className="row justify-content-center"
        style={{ width: "100%", marginTop: "2rem" }}
      >
        <div
          className="col-6"
          style={{
            textAlign: "start",
            fontFamily: "Inter",
            fontWeight: "300",
            lineHeight: "1.5rem",
            color: "#000",
          }}
        >
          The Computer Systems Group (CSG) was set-up in June 2017. Computer
          Systems Group undertakes research and development in all fundamental
          aspects of Computing Systems spanning across hardware and software.
          This group is actively involved in research and imparting advanced
          training through workshops, seminars, and semester long courses in the
          fields of computer architecture, compilers, computer networks,
          operating systems and other related topics. As a new group CSG today
          has about 3 faculty members and about 15 research students including
          Phd, Masters and honors students working on research topics that
          directly contribute and make an impact on the next-generation
          computing hardware and software.
        </div>
      </div>
    </div>
  );
}
