/*
 *  Copyright 2023 Patrick L. Branson
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from "react";
import Sketch from "react-p5";
import ReactDOM from "react-dom/client";

import "./App.css";

function App() {
  let angle = 0;
  let slider = null;

  function setup(p5, canvasParentRef) {
    p5.createCanvas(640, 360).parent(canvasParentRef);
    slider = p5.createSlider(0, p5.TWO_PI, p5.PI / 4, 0.01);
  }

  function draw(p5) {
    p5.background(0);
    angle = slider.value();
    p5.stroke(255);
    p5.strokeWeight(2);
    p5.translate(p5.width * 0.5, p5.height);
    branch(p5, 100);
  }

  function branch(p5, length) {
    p5.line(0, 0, 0, -length);
    p5.translate(0, -length);
    if (length > 4) {
      // Right side branch
      p5.push();
      p5.rotate(angle);
      branch(p5, length * 0.67);
      p5.pop();

      // Left side branch
      p5.push();
      p5.rotate(-angle);
      branch(p5, length * 0.67);
      p5.pop();
    }
  }

  return (
    <Sketch setup={setup} draw={draw} />
  );
}

const app = ReactDOM.createRoot(document.getElementById("app"))
app.render(<App />); // Note: React.StrictMode causes duplication of the Sketch
