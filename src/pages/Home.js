import Header from "../Components/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeScript, ReactJS, Astro, Redux, HTML, CSS, API
                BootStrap, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>NodeJS, Express, MySQL, DataBases</p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Home;
