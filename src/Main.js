import About from "./components/page/about/About";
import Home from "./components/page/home/Home";
import Menu from "./components/page/menu/Menu";
import OrderOnline from "./components/page/order_online/OrderOnline";
import Reservations from "./components/page/reservations/Reservations";
import Login from "./components/page/login/Login";

const Main = () => {
  return (
    <>
      <About />
      <Home />
      <Menu />
      <OrderOnline />
      <Reservations />
      <Login />
    </>
  );
};

export default Main;
