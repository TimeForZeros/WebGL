var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ffff});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let animate = function(){
    // cube.rotation.z += 0.05;
    cube.rotation.x += 0.01;
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};
animate();