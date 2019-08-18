// The whole graph/chart
      // Quadrants - textarea for now
// The List
  // adds all items from all quadrants (1)
    // orders items:
      // DWTHT , DHTWT, WTHT, DWTWHT (2)

import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';


class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dontHaveToDontWantTo: '',
      haveToWantTo: '',
      dontHaveToWantTo: '',
      haveToDontWantTo: ''
    }
    this.changeShared = this.changeShared.bind(this);
  }
  changeShared(event, id) {
    if (id === 'dontHaveToDontWantTo') {
      this.setState({
        dontHaveToDontWantTo: event.target.value
      });
    } else if (id === 'haveToWantTo') {
      this.setState({
        haveToWantTo: event.target.value
      });
    } else if (id === 'dontHaveToWantTo') {
      this.setState({
        dontHaveToWantTo: event.target.value
      });
    } else if (id === 'dontWantToHaveTo') {
      this.setState({
        dontWantToHaveTo: event.target.value
      });
    }
  }
  render() {
    return (
      <div>
        <div id="main">
          <h3 id="haveTo">Want to Do --></h3>
          <section id="underMain">
            <h3>^ Have to Do <br/>|<br/>|</h3>
            <section id="quadrants">
              <form id="top">            
                <Quadrant id="dontWantToHaveTo" changeMethod={this.changeShared} />
                <Quadrant id="haveToWantTo" changeMethod={this.changeShared} />
              </form>
              <form id="bottom">
                <Quadrant id="dontHaveToDontWantTo" changeMethod={this.changeShared} />
                <Quadrant id="dontHaveToWantTo" changeMethod={this.changeShared} />
              </form>
            </section>
          </section>
        </div>
        <List dontHaveToDontWantTo={this.state.dontHaveToDontWantTo} 
              haveToWantTo={this.state.haveToWantTo} 
              dontWantToHaveTo={this.state.dontWantToHaveTo}
              dontHaveToWantTo={this.state.dontHaveToWantTo} 
        />
      </div>
    );
  }
};

class Quadrant extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event, id) {
    this.setState({
      input: event.target.value
    })
    this.props.changeMethod(event, this.props.id);
  };
  render() {
    return (
        <textarea onChange={this.handleChange} placeholder={this.props.id} />
    );
  }
};

class List extends React.Component {
  // Items in list are generated from comma-separated words from quadrant component
  render() {
    return(
      <div id="list">
        <h2>The List:</h2>
        <ol>
          {this.props.dontWantToHaveTo && this.props.dontWantToHaveTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
          {this.props.haveToWantTo && this.props.haveToWantTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
          {this.props.dontHaveToWantTo && this.props.dontHaveToWantTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
          {this.props.dontHaveToDontWantTo && this.props.dontHaveToDontWantTo.split(', ').map(function(item) {
              return <li>{item}</li>;
          })}
        </ol>
      </div>
    );
  }
};

class ThreeJSContainer extends React.Component {
  render() {
    return(
      <div id="container"></div>
    );
  }
};

ReactDOM.render(
  <div>
    <Graph />
    <ThreeJSContainer />
  </div>, 
  document.getElementById('root')
);

// ### BEGIN THREE.JS ###

const WIDTH = 400;
const HEIGHT = 300;

const VIEW_ANGLE = 45;
const ASPECT = WIDTH / HEIGHT;
const NEAR = 0.1;
const FAR = 10000;

const container = document.querySelector('#container');

const renderer = new THREE.WebGLRenderer();
const camera = new THREE.PerspectiveCamera(
  VIEW_ANGLE,
  ASPECT,
  NEAR,
  FAR
); 

const scene = new THREE.Scene();

scene.add(camera);

renderer.setSize(WIDTH, HEIGHT);
container.appendChild(renderer.domElement);

const RADIUS = 50;
const SEGMENTS = 16;
const RINGS = 16;

const sphereMaterial =
      new THREE.MeshLambertMaterial(
      {
        color: 0xCC0000
      });

const sphere = new THREE.Mesh(
  new THREE.SphereGeometry(
    RADIUS,
    SEGMENTS,
    RINGS),
  
  sphereMaterial
);

sphere.position.z = -300;

scene.add(sphere);


const planeGeometry = new THREE.PlaneGeometry( 50, 50, 32 );
const planeMat = new THREE.MeshLambertMaterial( {
  color: 0xffff00, side: THREE.DoubleSide
});
const plane = new THREE.Mesh( planeGeometry, planeMat );
plane.position.z = -250;
plane.position.x = 60;
plane.position.y = -35;
plane.rotateX(0.4);
plane.rotateY(0.3);

scene.add(plane);


function rotatePlane(plane) {
  plane.rotation.y = plane.rotation.y + 0.005;
  plane.rotation.x = plane.rotation.x + 0.004;
}

let maxed = false;

function bounceBall(ball, height) {
  if (ball.position.y >= height) {
    maxed = true;
  } else if (ball.position.y <= 0){
    maxed = false;
  }
  if (maxed === false) {
    ball.position.y += 0.3;
  } else {
    ball.position.y -= 0.3;
  }
}

const pointLight = new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);

function update () {
  rotatePlane(plane);
  bounceBall(sphere, 50);
  renderer.render(scene, camera);
  requestAnimationFrame(update);
}

requestAnimationFrame(update);
