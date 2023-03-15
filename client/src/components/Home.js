import "./Style/Home.css";

const Home = () => {
  return (
    <div className="home-page-top">
      <div class="container">
        <div class="row">
          <div class="col-md-12 text-center">
            <h1 className="animate-heading main-heading heading">
              Wizarding Wiki
            </h1>
          </div>
        </div>
      </div>

      <p className="home-page-content text">
        The number one stop for all of your wizarding information.
      </p>
    </div>
  );
};

export default Home;
