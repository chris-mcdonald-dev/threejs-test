import "./style.css";
import * as THREE from 'three';
import { posFromWorldOrigin } from "./events/mouse-move.js";

const scene = new THREE.Scene();
scene.background = new THREE.Color('white');

let camera;
const FOV = 75;
const closeClip = 0.1;
const farClip = 1000;
camera = new THREE.PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, closeClip, farClip);

const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(2, 50, 50);
const material = new THREE.MeshPhongMaterial({ color: 'white' });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-3, 2, 4);
scene.add(light);

camera.position.z = 5;
const mouseStrength = .003;

function repositionCamera() {
    camera.position.x += (posFromWorldOrigin.X - camera.position.x) * mouseStrength;
    camera.position.y += (- posFromWorldOrigin.Y - camera.position.y) * mouseStrength;
    camera.lookAt(scene.position);
}

function animate(time) {
    requestAnimationFrame(animate);
    time *= 0.0005;
    sphere.rotation.x = time;
    sphere.rotation.y = time;

    repositionCamera();
    

    renderer.render(scene, camera)
}

animate(1);

console.log("Here's the scenery!: ", scene, camera, renderer);

