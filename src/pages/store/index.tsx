import React, { useEffect } from "react";
import homeStyles from "@/styles/Home.module.css";
import TopSmartPhone from "@/components/store/topsmartphone";

function Store() {
  useEffect(() => {}, []);

  return (
    <div className={homeStyles.main}>
      <TopSmartPhone />
    </div>
  );
}

export default Store;
