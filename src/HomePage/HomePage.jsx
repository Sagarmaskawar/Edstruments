import React from "react";
import Header from "../header/Header";
import UploadFile from "../CreateInvoice/UploadFile";
import styles from "./HomePage.module.scss";
import FormDetails from "../FormDetails/FormDetails";

const HomePage = () => {
  return (
    <div className={styles.home_container}>
      <div className={styles.header_containers}>
        <Header />
      </div>

      <div className={styles.home__form_container}>
        <div className={styles.home__for_uploadfile}>
          <UploadFile />
        </div>
        <div className={styles.scrollable_form}>
          <FormDetails />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
