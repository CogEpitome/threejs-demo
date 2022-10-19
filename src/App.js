import React from "react";
import { Canvas } from "@react-three/fiber";
import {Stage, OrbitControls} from "@react-three/drei";
import Flora from "./components/Flora.js";
import Boar from "./components/Boar.js";
import Ground from "./components/Ground.js";
import './App.css'

export default function App() {
  
  return (    
    <body>
      <header />
      <main>
        <section class="flora-wrapper">
          <div>            
            <img class="flora-portrait cursor-block" src="/flora_portrait.png"/>
            <img class="flora-frame cursor-block" src="/flora_frame_drawn.png"/>
            <img class="bg cursor-block" src="/bg.png"/>            
            <Canvas>     
              <Stage preset="rembrandt" intensity={0.7} environment="night">                              
                <Flora />
                <Boar />           
                <Ground />        
                <OrbitControls />
              </Stage>
            </Canvas>      
          </div>          
        </section>
      </main>
      <footer />
    </body>    
  );
}