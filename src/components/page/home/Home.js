import "../../../index.css";

const Home = () => {
  return (
    <main>
      <section class="first-section">
        <article class="first-article">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            quo reprehenderit delectus sint ex perspiciatis fugit quibusdam,
            praesentium voluptas consequuntur pariatur laboriosam nostrum ad
            assumenda harum suscipit? Debitis, excepturi doloremque.
          </p>
          <button>Reserve a table</button>
        </article>
        <article class="second-article">
          <img
            src={require("../../../assets/images/restaurantfood.jpg")}
            alt="Little Lemon Logo"
            height="300rem"
            width="300rem"
          />
        </article>
      </section>
      <section class="second-section">
        <p class="specials">This week's specials!</p>
        <button>Online Menu</button>
      </section>
      <section class="third-section">
        <article>
          <div>
            <img
              src={require("../../../assets/images/greek salad.jpg")}
              alt="Little Lemon Logo"
              height="300"
              width="300"
            />
          </div>
          <div>
            <ul>
              <li>
                <h4>
                  Greek Salad<span>$12.00</span>
                </h4>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis magnam ipsum corporis provident sequi sunt, labore
                  minima dignissimos cumque eum quidem facere suscipit illum
                  accusantium vel fugit quisquam. Porro, voluptate.
                </p>
              </li>
              <li>
                Order a delivery
                <span id="bike">
                  <img
                    src={require("../../../assets/images/bike.png")}
                    alt="Little Lemon Logo"
                    height="20"
                    width="20"
                  />
                </span>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <div>
            <img
              src={require("../../../assets/images/brucheta.jpg")}
              alt="Little Lemon Logo"
              height="300"
              width="300"
            />
          </div>
          <div>
            <ul>
              <li>
                <h4>
                  Greek Salad<span>$12.00</span>
                </h4>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis magnam ipsum corporis provident sequi sunt, labore
                  minima dignissimos cumque eum quidem facere suscipit illum
                  accusantium vel fugit quisquam. Porro, voluptate.
                </p>
              </li>
              <li>
                Order a delivery
                <span id="bike">
                  <img
                    src={require("../../../assets/images/bike.png")}
                    alt="Little Lemon Logo"
                    height="20"
                    width="20"
                  />
                </span>
              </li>
            </ul>
          </div>
        </article>
        <article>
          <div>
            <img
              src={require("../../../assets/images/lemon-cake.jpg")}
              alt="Little Lemon Logo"
              height="300"
              width="300"
            />
          </div>
          <div>
            <ul>
              <li>
                <h4>
                  Greek Salad<span>$12.00</span>
                </h4>
              </li>
              <li>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis magnam ipsum corporis provident sequi sunt, labore
                  minima dignissimos cumque eum quidem facere suscipit illum
                  accusantium vel fugit quisquam. Porro, voluptate.
                </p>
              </li>
              <li>
                Order a delivery
                <span id="bike">
                  <img
                    src={require("../../../assets/images/bike.png")}
                    alt="Little Lemon Logo"
                    height="20"
                    width="20"
                  />
                </span>
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Home;
