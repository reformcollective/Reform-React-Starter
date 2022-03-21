import React from "react";

import Seo from "components/Seo";
import Hero from "sections/home/01-Hero";

const Home: React.FC = () => {
  return (
    <>
      <Seo title="Home | Reform Starter" />
      <Hero />
    </>
  );
};

export default Home;
