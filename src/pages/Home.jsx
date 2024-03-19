import { Form } from "../components";
import Banner from "../components/Banner";
import Grid from "../components/Grid";

function Home() {
  return (
    <main>
      <div>
        <div className="relative">
          <Banner />
          <div className="absolute top-2 right-32">
            <Form />
          </div>
        </div>
        <Grid />
      </div>
    </main>
  );
}

export default Home;
