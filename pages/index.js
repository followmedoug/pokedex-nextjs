import React from "react";

import Title from "../components/Title";
import WrapperTitle from "../components/WrapperTitle";

export default function Home(props) {
  return (
    <WrapperTitle>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg"
        style={{ width: "50%" }}
      />
    </WrapperTitle>
  );
}
