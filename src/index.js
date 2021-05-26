import React from "react";
import ReactDOM from "react-dom";

import * as cocoSsd from "@tensorflow-models/coco-ssd";
import "@tensorflow/tfjs";
import "./styles.css" 

class App extends React.Component  {
    videoRef = React.createRef();
    canvasRef = React.createRef();
  
    componentDidMount() {
      if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        const webCamPromise = navigator.mediaDevices
        .getUserMedia ({
          audio: false,
          video: {
            facingmode: "user"
          }
        })
        .then(stream => {
          window.stream = stream;
          this.videoRef.current.srcObject = stream;
          return new Promise((resolve, reject) => {
            this.videoRef.current.onloadedmetadata = () => {
              resolve();
            }
          })
        })

      }

    }
  




  }
