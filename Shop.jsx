import React from 'react';
import '../shop/shop.css'; // Updated path to point to location inside src
import Navbar from '../Navbar';

function Shop() {
  return (
    <>
      <Navbar />
      {/* Divs containing product information */}
      <div id="Div1">
          <div id="nendivi1">
              <div id="nendiviidivittepare">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2017</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div2">
          <div id="nendivi2">
              <div id="nendiviidivittedyte">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2018</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div3">
          <div id="nendivi3">
              <div id="nendiviidivittetrete">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2019</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div4">
          <div id="nendivi4">
              <div id="nendiviidivittekatert">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2017</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div5">
          <div id="nendivi5">
              <div id="nendiviidivittepeste">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2020</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div6">
          <div id="nendivi6">
              <div id="nendiviidivittegjashte">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2017</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div7">
          <div id="nendivi7">
              <div id="nendiviidivitteshtate">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2018</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div8">
          <div id="nendivi8">
              <div id="nendiviidivittetete">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2017</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div9">
          <div id="nendivi9">
              <div id="nendiviidivittenente">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2021</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      <div id="Div10">
          <div id="nendivi10">
              <div id="nendiviidivitte10">
                  <p id="p1">Year</p>
                  <hr id="hr1"/>
                  <p id="p2">Price</p>
                  <hr id="hr2"/>
                  <p id="p3">2022</p>
                  <p id="p4">30$</p>
              </div>
          </div>
      </div>

      {/* Footer - Assuming the footer will be a separate component or included in App.js later */}
      {/* For now, including it here for structure, but will likely refactor */}
      <footer id="footer">
          <h3 id="Privacy">Privacy Policy</h3>
          <a href="/main"><p id="Returns">Return</p></a> {/* Update href for React Router */}
          <p id="V2025">2025 <span id="span1">designed by Leart Shulina</span></p>
          <p id="Quote">A poem in every bottle</p>
          <p id="Spam">Labi wine</p>
      </footer>

      {/* Scroll to top button */}
      <a className="gotop" href="#"><i className="fa-solid fa-arrow-up"></i></a>
    </>
  );
}

export default Shop; 