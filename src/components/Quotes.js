import React from "react";
import Contents from "./Contents";

function Quotes() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <Contents />
            <hr />

            <div className="clearfix">
              <a
                className="btn btn-primary float-right"
                href="https://www.youtube.com/watch?v=hb7Q33ysCwI"
              >
                Check out &rarr;{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Quotes;
