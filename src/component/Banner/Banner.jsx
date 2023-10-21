

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img className="w-full" src="https://i.ibb.co/n68d2Nq/Hot-Wings-EN-Final-Creative-Small-Image-2492x1400-ep-H4-Mo-RTGrexahb-D.jpg" alt="" />
        <div className="absolute top-10 md:top-20 lg:top-40 left-10 md:left-20 text-white">
        
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="text-white md:text-5xl text-sm ">
            ❮
          </a>
          <a href="#slide2" className="text-white  md:text-5xl text-sm ">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/xfc5T0y/CCH-MY24-0001-V001-Do-Va-N8hajgdkkd-Fhg-E-1.png" alt="" />
        <div className="absolute top-10 md:top-20 lg:top-40 left-10 md:left-20 text-white">
          <h1>
            {" "}
            <span className="text-sm md:text-2xl font-medium">CONFIGURATOR</span>
            <br />
            <span className="text-2xl md:text-5xl lg:text-7xl font-bold">
              CREATE YOUR
              <br />
              REVUELTO
            </span>
          </h1>
          <button className="hover:underline text-xs md:text-sm md:mt-3 ml-4">Learn more</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="text-white  md:text-5xl text-sm">
            ❮
          </a>
          <a href="#slide3" className="text-white  md:text-5xl text-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
       <img src="https://i.ibb.co/PZzPY1x/BZ-homepage-desktop-m-Zfh-GVVv-AUo-P75-Kh4-Ns-jyeq2.png" alt="" />
        <div className="absolute top-10 md:top-20 lg:top-40 left-10 md:left-20 text-white">
          <h1>
            {" "}
            <span className="text-sm md:text-2xl font-medium">2024 Prius</span>
            <br />
            <span className="text-2xl uppercase md:text-5xl lg:text-7xl font-bold">
             Toyota 
             Avalon,
             <br />
             More Power
             <br />
              with Less Fuel
            </span>
          </h1>
          <button className="hover:underline text-xs md:text-sm md:mt-3 ml-4">Learn more</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="text-white  md:text-5xl text-sm">
            ❮
          </a>
          <a href="#slide4" className="text-white  md:text-5xl text-sm">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://i.ibb.co/T05W6DB/hk-00-teaser-hd.webp" alt="" />
        <div className="absolute top-10 md:top-20 lg:top-40 left-10 md:left-20 text-white">
          <h1>
            {" "}
            <span className="text-sm md:text-2xl font-medium">2016 Prius</span>
            <br />
            <span className="text-2xl uppercase md:text-5xl lg:text-7xl font-bold">
            Range Rover 
            <br />
            Vogue 
            </span>
            <br />
            <span>
            (L405, fourth generation, Australia)
            </span>
          </h1>
          <button className="hover:underline text-xs md:text-sm md:mt-3 ml-4">Learn more</button>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="text-white  md:text-5xl text-sm">
            ❮
          </a>
          <a href="#slide1" className="text-white  md:text-5xl text-sm">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
