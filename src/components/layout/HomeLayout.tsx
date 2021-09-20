import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";

const HomePageLayout = (props) => {
  return (
    <div>
      <Header />
      <div
        id="content"
        style={{
          minHeight: "100vh",
          marginTop: 20,
          marginBottom: 50
        }}
      >
        {props.children}
      </div>

      <Footer />
    </div>
  );
};

export default HomePageLayout;
