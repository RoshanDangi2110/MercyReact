import bg from "../assets/bg.webp";
import "./page.css";
const Page = () => {
  return (
    <div className="page">
      <div className="text">
        <h1>Players Unknown BattleGround</h1>
        <p>Let The Battle Begin!</p>
        <p>Join 100M players online for the ultimate chicken dinner.</p>
        <button className="btn">Download</button>
      </div>
      <div className="pic">
        <img src={bg} alt="" className="image" />
      </div>
    </div>
  );
};

export default Page;
