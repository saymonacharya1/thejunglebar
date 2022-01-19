import { useEffect, useRef, useState } from "react";
import Img1 from "./img/1.png";
import Img2 from "./img/2.png";
import Img3 from "./img/3.png";
import Img4 from "./img/4.png";
import {ParallaxProvider, ParallaxBanner, Parallax} from "react-scroll-parallax";
import './index.css';
import Navbar from "./Navbar";

const appContainerStyle = {
  position: "relative",
  height: "100vh",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const scrollContainerStyle = {
  position: "absolute",
  height: "100%",
  width: "100%",
  overflowY: "scroll",
  overflowX: "hidden"
};

const backgroundsContainerStyle = {
  position: "absolute",
  height: "100vh",
  width: "100%",
  backgroundColor: "red"
};

const scrollContentStyle = {
  height: "100vh",
  width: "100%"
};

const content = [
  { name: "Img1", img: Img1 },
  { name: "Img2", img: Img2 },
  { name: "Img3", img: Img3 },
  { name: "Img4", img: Img4 }
];

const App = () => {
  const containerRef = useRef();
  const [contRef, setContRef] = useState("");

  useEffect(() => {
    setContRef(containerRef.current);
  }, [containerRef]);


  return (
    
    <ParallaxProvider scrollContainer={contRef}>
      <div style={appContainerStyle}>
        <h1>Hello Universe</h1>
        <div style={backgroundsContainerStyle}>
        <Navbar />
        </div>
        
        <h1 className="section1">Welcome</h1>
        <div
          className="container"
          ref={containerRef}
          style={scrollContainerStyle}
        >
         
          
          <div
            style={{
              ...scrollContentStyle,
              backgroundColor: "rgba(40,40,40,.5)"
            }}
          >
            <ParallaxBanner
              layers={[
                {
                  image: Img4,
                  amount: 0.9
                },
                {
                  image: Img3,
                  amount: 0.6
                },
                {
                  image: Img2,
                  amount: 0.7
                },
                {
                  image: Img1,
                  amount: -0.2
                },
                {
                  image: <h1>TEST</h1>,
                  amount: 0
                }
              ]}
              style={{
                height: "100vh",
                width: "100%"
              }}
            ></ParallaxBanner>
            <section className="section1">

<h1>Hello World</h1>
<div className="content">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem architecto esse cupiditate iste quaerat veniam quam omnis rerum reiciendis porro molestiae ut, recusandae pariatur similique eos debitis et commodi tempore!
  Doloribus dignissimos suscipit ipsum perferendis cupiditate necessitatibus error nisi deserunt, laudantium obcaecati! Praesentium, fuga odio? Earum labore voluptas laudantium magnam iure! Vero, officiis! Totam quia laudantium ratione culpa quis id?
</div>

</section>
          </div><section className="section1">

<h1>Hello World</h1>
<div className="content">
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem architecto esse cupiditate iste quaerat veniam quam omnis rerum reiciendis porro molestiae ut, recusandae pariatur similique eos debitis et commodi tempore!
  Doloribus dignissimos suscipit ipsum perferendis cupiditate necessitatibus error nisi deserunt, laudantium obcaecati! Praesentium, fuga odio? Earum labore voluptas laudantium magnam iure! Vero, officiis! Totam quia laudantium ratione culpa quis id?
</div>

</section>
          <div
            style={{
              ...scrollContentStyle,
              backgroundColor: "rgba(60,60,60,.5)"
            }}
          ></div>
          <div
            style={{
              ...scrollContentStyle,
              backgroundColor: "rgba(60,60,60,.5)"
            }}
          >
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </ParallaxProvider>
  );
};

export default App;
