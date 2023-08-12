//body {
//}

import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//const controls = new OrbitControls(camera, renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, (window.innerWidth / 2) / window.innerHeight, 0.1, 1000);
//camera.position.set(0, 0, 100);
//camera.lookAt(0, 0, 0);
const renderer = new THREE.WebGLRenderer();

const loader = new GLTFLoader();
loader.load('/static/model/Tiger_I.glb', function (gltf) {
    scene.add(gltf.scene);
}, undefined, function (err) {
    console.error(err)
})

//console.log('rendering');

renderer.setSize(window.innerWidth / 2, window.innerHeight);
document.body.appendChild(renderer.domElement);


// 큐브 그리기
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// 라인 그리기
//const material = new THREE.LineBasicMaterial({ color: 0x0000ff });
//const points = [];
//points.push(new THREE.Vector3(-10, 0, 0));
//points.push(new THREE.Vector3(-0, 10, 0));
//points.push(new THREE.Vector3(10, 0, 0));

//const geometry = new THREE.BufferGeometry().setFromPoints(points);
//const line = new THREE.Line(geometry, material);

//scene.add(line);
//renderer.render(scene, camera);
// You should now be seeing an arrow pointing upwards, made from two blue lines.