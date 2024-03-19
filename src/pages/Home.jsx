import { Form } from "../components";
import Banner from "../components/Banner";

function Home() {
  return (
    <div>
      <div className="relative">
        <Banner />
        <div className="absolute -top-6 right-32">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Home;
