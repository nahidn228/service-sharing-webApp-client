import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Carousel from "../components/Carousel";
import FAQ from "../components/FAQ";
import PopularServices from "../components/PopularServices";
import Testimonials from "../components/Testimonials";
import WhyChooseUs from "../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Digital World Technology</title>
        <link rel="canonical" href="https://fullstackservice1.web.app" />
      </Helmet>
      {/* Animated Carousel */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }} // Trigger animation with 20% of the element visible
        transition={{ duration: 0.8 }}
        key="carousel"
      >
        <Carousel></Carousel>
      </motion.div>

      {/* Popular Services */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }} // Trigger animation with 20% of the element visible
        transition={{ duration: 0.6 }}
        key="popular-services"
      >
        <PopularServices></PopularServices>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ amount: 0.2 }} // Trigger animation with 20% of the element visible
        transition={{ duration: 0.6 }}
        key="why-choose-us"
      >
        <WhyChooseUs></WhyChooseUs>
      </motion.div>

      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }} // Trigger animation with 20% of the element visible
        transition={{ duration: 0.8 }}
        key="testimonials"
      >
        <Testimonials></Testimonials>
      </motion.div>

      {/* FAQ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.2 }} // Trigger animation with 20% of the element visible
        transition={{ duration: 0.8 }}
        key="faq-services"
      >
        <FAQ></FAQ>
      </motion.div>
    </div>
  );
};

export default Home;
