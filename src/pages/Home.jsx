import { motion } from "framer-motion";
import Carousel from "../components/Carousel";
import PopularServices from "../components/PopularServices";
import TabCategories from "../components/TabCategories";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      {/* Animated Carousel */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}  // Trigger animation with 20% of the element visible
        transition={{ duration: 0.8 }}
        key="carousel"
      >
        <Carousel />
      </motion.div>

      {/* Popular Services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}  // Trigger animation with 20% of the element visible
        transition={{ duration: 0.6 }}
        key="popular-services"
      >
        <PopularServices />
      </motion.div>

      {/* Tab Categories */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ amount: 0.2 }}  // Trigger animation with 20% of the element visible
        transition={{ duration: 0.8 }}
        key="tab-categories"
      >
        <TabCategories />
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }}  // Trigger animation with 20% of the element visible
        transition={{ duration: 0.6 }}
        key="why-choose-us"
      >
        <WhyChooseUs />
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }}  // Trigger animation with 20% of the element visible
        transition={{ duration: 0.8 }}
        key="testimonials"
      >
        <Testimonials />
      </motion.div>
    </div>
  );
};

export default Home;
