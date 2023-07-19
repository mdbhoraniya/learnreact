import React from "react";
import Footer from "../components/footer";
import HeaderNavbar from "../components/header";
import Card from "../components/card";

function Home() {
  return (
    <React.Fragment>
      <HeaderNavbar></HeaderNavbar>
      <h1>Home</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
          <Card title='Title 1' desc='description text goes here' imgUrl='https://picsum.photos/200'></Card>
          </div>
          <div className="col-md-4">
          <Card title='Title 2' desc='description text goes here' imgUrl='https://picsum.photos/200'></Card>
          </div>
          <div className="col-md-4">
          <Card title='Title 3' desc='description text goes here' imgUrl='https://picsum.photos/200'></Card>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default Home;
