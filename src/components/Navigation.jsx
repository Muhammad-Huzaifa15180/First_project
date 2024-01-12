const Navigation = () => {
    return <div>
       <nav>
        <div className="logo">
        <img src="./images/brand_logo.png" alt="" />
        </div>

        <ul>
            <li href="#">MENU</li>
            <li href="#">LOCATION</li>
            <li href="#">ABOUT</li>
            <li href="#">CONTACT</li>
        </ul>
        <div className="navigation-btn">
        <button>Login</button>
        </div>

       </nav>
    </div>;
};
export default Navigation;