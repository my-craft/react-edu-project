import React from "react";
import Form from "components/Form";
import Header from "components/Header";

const FromPage = () => (
  <div>
    <Header title="Добавить задачу" />
    <div className="content">
      <Form isOpened={true} />
    </div>
  </div>
);

export default FromPage;