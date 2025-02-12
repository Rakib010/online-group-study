import Banner from "../banner/Banner";
import Features from "../banner/Features";
import Courses from "../course/Courses";
import Faq from "../Faq/Faq";
import Review from "../Review/Review";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Banner />
      <Features />
      <Courses />
      <Faq />
      <Review />
    </div>
  );
};

export default Home;
