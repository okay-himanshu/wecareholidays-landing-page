// import { Form } from "../components";
import About from "../components/About";
import Banner from "../components/Banner";
import Grid from "../components/Grid";

function Home() {
  return (
    <main>
      <div>
        <div className="relative">
          <Banner />
        </div>
        <About />
        <Grid />
      </div>
    </main>
  );
}

export default Home;
