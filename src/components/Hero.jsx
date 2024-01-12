const Hero = () => {
    return(
        <div className="container">
        <main className="hero">

            <div className="hero-content">

                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU   WITH OUR SHOES.</p>

                <div className="btn-flex">
                <div className="hero-btn1">
                    <button>Shop Now</button>
                </div>
                <div className="hero-btn2">
                    <button>Category</button>
                </div>
                </div>
            <div className="shoping">
                <p>Also Available On</p>
                <div className="icon">
                    <img src="./images/flipkart.png" alt="" />
                    <img src="./images/amazon.png" alt="" />
                </div>
            </div>
        </div>
        <div className="hero-img">
            <img src="./images/shoe_image.png" alt="" />
        </div>
    </main>
    </div>

    );
  
};
export default Hero;