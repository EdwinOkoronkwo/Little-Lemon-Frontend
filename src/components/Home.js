import "./index.css";

const Home = () => {
  return (
    <div className="container">
      <img
        width={300}
        height={300}
        src={require("../assets/images/greek salad.jpg")}
        alt="Greek Salad"
        className="item"
      />
      <img
        width={300}
        height={300}
        src={require("../assets/images/brucheta.jpg")}
        alt="Brucheta"
        className="item"
      />
      <img
        width={300}
        height={300}
        src={require("../assets/images/lemon-cake.jpg")}
        alt="Lemon Cake"
        className="item"
      />
    </div>
  );
};

export default Home;
