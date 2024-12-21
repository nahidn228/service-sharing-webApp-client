import Carousel from "../components/Carousel";
import PopularServices from "../components/PopularServices";
import TabCategories from "../components/TabCategories";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <PopularServices></PopularServices>
      <TabCategories></TabCategories>
      <WhyChooseUs></WhyChooseUs>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
