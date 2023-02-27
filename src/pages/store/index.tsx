import React, { useEffect } from "react";
import homeStyles from "@/styles/Home.module.css";

function Store() {
  useEffect(() => {}, []);

  return (
    <div
      className={homeStyles.main}
      style={{
        backgroundImage:
          "url(https://www.oneplus.in/content/dam/oasis/product-asset-library/salami/11r/images-design-silver-mo-img-1-1.jpg.webp)",
        // backgroundRepeat: "no-repeat",
        // backgroundSize: "cover",
      }}
    >
      Top Smartphone
    </div>
  );
}

export default Store;
