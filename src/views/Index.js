import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom"
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
import SignUp from "views/index-sections/SignUp.js"

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <BrowserRouter>
          <Switch>
              <Route path="signup" element={<SignUp />} />
          </Switch>
        </BrowserRouter>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
