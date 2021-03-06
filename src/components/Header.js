import React from "react";

function Header() {
  return (
    <div>
      <header className="masthead myhead">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <div className="site-heading">
                <h1>Shailendra's Quote Blog</h1>
                <span className="subheading">Collection of Some Quotes</span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
