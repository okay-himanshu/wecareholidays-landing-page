import { Form } from "../components";
import Banner from "../components/Banner";
import Grid from "../components/Grid";

function Home() {
  return(
 <main>
  <div><Banner/>
  <Grid/>
  </div>
    <div>
      <div className="relative">
        <Banner />
        <div className="absolute -top-6 right-32">
          <Form />
        </div>
      </div>
    </div>
  </main>
    )
}

export default Home;
