import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Singh Ecommerce",
    myimage: "https://www.nakshtechnologies.com/wp-content/uploads/2021/10/732-7329685_e-commerce-website-background-image-e-commerce-website-removebg-preview.png"
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
