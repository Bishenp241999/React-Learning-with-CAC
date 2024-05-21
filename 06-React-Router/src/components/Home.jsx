import techQuote from "../assets/OIP.jpg";

export default function Home() {
  return (
    <div className="section1">
      <img src={techQuote} />
      <h1>
        The{" "}
        <span
          style={{ backgroundColor: "whitesmoke", fontFamily: "monospace" }}
        >
          ENTHUSIAST
        </span>{" "}
        Web Developer
      </h1>
      <p>Prapti Bishen</p>
    </div>
  );
}
