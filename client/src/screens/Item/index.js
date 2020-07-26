import React from "react";

function Home({ match }) {
  console.log("test");
  console.log("res:" + match.params.category);
  console.log("res:" + match.params.id);

  return <div>test</div>;
}

export default Home;
