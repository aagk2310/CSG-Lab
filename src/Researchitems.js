export default function Researchitems({ imgName, content }) {
  return (
    <div style={{ display: "inline-block" }}>
      <img
        src={`./researchareas/${imgName}`}
        style={{ width: "10vh", height: "10vh" }}
      />
      <span
        style={{
          display: "inline-block",
          width: "200px",
          marginLeft: "3vh",
          fontFamily: "Inter",
          fontWeight: "200",
        }}
      >
        {content}
      </span>
    </div>
  );
}
