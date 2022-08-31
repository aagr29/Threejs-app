// import * as THREE from 'three'
// import { OrbitControls } from './jsm/controls/OrbitControls.js'
// import Stats from './jsm/libs/stats.module.js'
// import { GUI } from './jsm/libs/lil-gui.module.min.js'

// const scene = new THREE.Scene()

// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 500)
// // camera.position.z = 2
// camera.position.set( 100, 100, 100 );
// camera.lookAt( 0, 0, 0 );
// const renderer = new THREE.WebGLRenderer()
// renderer.setSize(window.innerWidth, window.innerHeight)
// document.body.appendChild(renderer.domElement)

// const controls = new OrbitControls(camera, renderer.domElement)

// // const geometry = new THREE.BoxGeometry()
// // const material = new THREE.MeshBasicMaterial({
// //     color: 0x00ff00,
// //     wireframe: true,
// // })
// // const cube = new THREE.Mesh(geometry, material)
// // scene.add(cube)
// window.addEventListener(
//     'resize',
//     () => {
//         camera.aspect = window.innerWidth / window.innerHeight
//         camera.updateProjectionMatrix()
//         renderer.setSize(window.innerWidth, window.innerHeight)
//         render()
//     },
//     false
// )

// const stats = Stats()
// document.body.appendChild(stats.dom)

// //---------------------------------------------------------------------------------------------------------------------------------



// // POLE ON THE LEFT
// var geometry1 = new THREE.CylinderGeometry( 0.2, 0.2, 294.022/10, 64,1 );
// var material1 = new THREE.MeshBasicMaterial( {color: 0x4F2C07} );
// var cylinder1 = new THREE.Mesh( geometry1, material1 );
// cylinder1.position.set(0,294.022/20,0)
// scene.add( cylinder1 );

// //POLE ON THE RIGHT

// var geometry2 = new THREE.CylinderGeometry( 0.2, 0.2, 292.225/10, 64,1 );
// var material2 = new THREE.MeshBasicMaterial( {color: 0x4F2C07} );
// var cylinder2 = new THREE.Mesh( geometry2, material2 );
// cylinder2.position.set(28.915000000968575,292.225/20,26.033999998122454)
// scene.add( cylinder2 );

// // declare 



// //WIRE 1

// var curveRoadNo1 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( -1.1455622364301234, 293.347158013558/10, 0.8396915588527918 ),
//     new THREE.Vector3( 7.668897353694774, 292.009670998508/10, 8.695489291101694 ),new THREE.Vector3( 19.421510139247403,291.459028578464/10,19.16988624818623),new THREE.Vector3( 28.235969727509655, 291.968154568372/10,27.025683967396617)])
  
//   const geometry = new THREE.TubeGeometry( curveRoadNo1, 64, 0.02, 8, false );
//   const material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh = new THREE.Mesh( geometry, material );
//   scene.add( mesh );
  
//   //WIRE 2
  
//   var curveRoadNo2 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( -0.37054140941472724, 291.440906418797/10, 0.09223296958953142 ),
//     new THREE.Vector3( 8.419193830399308, 290.50693591184/10, 7.870228558778763 ),new THREE.Vector3( 17.208929071144667, 289.946033818785/10,15.648224148899317 ),new THREE.Vector3( 28.92857605702011, 289.777571553903/10,26.018884927034378)])
  
//   const geometry3 = new THREE.TubeGeometry( curveRoadNo2, 64, 0.02, 8, false );
//   const material3= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh2 = new THREE.Mesh( geometry3, material3 );
//   scene.add( mesh2 );
  
//   //WIRE 3
//   var curveRoadNo3 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( 0.23527719732373953, 290.913314183378/10,-0.5837629800662398),
//     new THREE.Vector3(8.85244362265803, 289.845035754284/10,7.387307329103351),new THREE.Vector3( 20.341998854884878, 289.238167386377/10,18.01540106907487),new THREE.Vector3( 28.959165279055014, 289.394965760292/10,25.98647137824446)])
  
//   const geometry4 = new THREE.TubeGeometry( curveRoadNo3, 64, 0.02, 8, false );
//   const material4= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh3 = new THREE.Mesh( geometry4, material4 );
//   scene.add( mesh3 );
  
//   //WIRE 4
//   var curveRoadNo4 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( -0.1243802581448108, 290.924396487641/10,-0.1824424210935831),
//     new THREE.Vector3( 8.597199439944234, 289.644158135097/10, 7.671712978743017 ),new THREE.Vector3(20.225972370011732,288.868699619755/10,18.14392017852515),new THREE.Vector3( 28.947552065656055, 288.983800100647/10,25.998075577430427)])
  
//   const geometry5 = new THREE.TubeGeometry( curveRoadNo4, 64, 0.02, 8, false );
//   const material5= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh4 = new THREE.Mesh( geometry5, material5 );
//   scene.add( mesh4 );
  
//   //WIRE 5
//   var curveRoadNo5 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( -0.5631367061869241,290.760297894014/10,0.6586254192516208),
//     new THREE.Vector3( 8.302457271027379, 289.376124224568/10, 8.245421359315515 ),new THREE.Vector3(17.168051245855168,288.607719553586/10,15.83221728913486),new THREE.Vector3(28.988843212253414,288.537620452957/10,25.94794520828873)])
  
//   const geometry6 = new THREE.TubeGeometry( curveRoadNo5, 64, 0.02, 8, false );
//   const material6= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh5 = new THREE.Mesh( geometry6, material6 );
//   scene.add( mesh5 );
  
//   //WIRE 6
//   var curveRoadNo6 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( -0.8786044995067641,290.59892309874/10,1.0513131599873304),
//     new THREE.Vector3(8.06984540517442,289.123479407451/10,8.533791529014707),new THREE.Vector3(20.001111948338803,288.120492590558/10,18.510429348796606),new THREE.Vector3( 28.949561854475178,288.088727316581/10,25.992907719686627)])
  
//   const geometry7 = new THREE.TubeGeometry( curveRoadNo6, 64, 0.02, 8, false );
//   const material7= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh6 = new THREE.Mesh( geometry7, material7 );
//   scene.add( mesh6 );
//   //WIRE 7
//   var curveRoadNo7 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3(-0.4276559423888102,293.56095809414/10,0.17481542006134987),
//     new THREE.Vector3(8.36981468833983,292.253802916903/10,8.025620579719543),new THREE.Vector3(17.16728531807894,291.699040733546/10,15.876425748690963),new THREE.Vector3(28.897246157051995,292.126305284202/10,26.344165958464146)])
  
//   const geometry8 = new THREE.TubeGeometry( curveRoadNo7, 64, 0.02, 8, false );
//   const material8= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh7 = new THREE.Mesh( geometry8, material8 );
//   scene.add( mesh7 );
//   //WIRE 8
//   var curveRoadNo8 = new THREE.CatmullRomCurve3([
//     new THREE.Vector3( 0.20575016678776592,293.431135957642/10,-0.41181617975234985),
//     new THREE.Vector3(8.99553593492601,292.359020866827/10,7.427064970135689),new THREE.Vector3(20.715250287321396,291.776710470395/10,17.878906498663127),new THREE.Vector3(29.50503605394624,291.974154494837/10,25.717787647619843)])
  
//   const geometry9 = new THREE.TubeGeometry( curveRoadNo8, 64, 0.02, 8, false );
//   const material9= new THREE.MeshBasicMaterial( { color: 0x000000 } );
//   const mesh8 = new THREE.Mesh( geometry9, material9 );
//   scene.add( mesh8 );
//   scene.background = new THREE.Color( 0xffffff );
// //---------------------------------------------------------------------------------------------------------------------------------------------------------


// const gui = new GUI()
// // // const cubeFolder = gui.addFolder('Cube')
// // // cubeFolder.add(cube.scale, 'x', -5, 5)
// // // cubeFolder.add(cube.scale, 'y', -5, 5)
// // // cubeFolder.add(cube.scale, 'z', -5, 5)
// // // cubeFolder.open()
// const cameraFolder = gui.addFolder('Camera')
// cameraFolder.add(camera.position, 'z', 0, 500)
// cameraFolder.open()

// function animate() {
//     requestAnimationFrame(animate)
//     // cube.rotation.x += 0.01
//     // cube.rotation.y += 0.01
//     controls.update()
//     render()
//     stats.update()
// }

// function render() {
//     renderer.render(scene, camera)
// }
// // render()
// animate()

// import proj4 from 'proj4';
// proj4.defs([

//     [

//         'EPSG:4326',

//         '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees'],

//     [

//         'EPSG:4269',

//         '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees'

//     ],

//     [

//         'EPSG:28356',

//         '+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs '

//     ],

//     [

//         'EPSG:28350',

//         '+proj=utm +zone=50 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs '

//     ]

// ]);

// function projectionTransform(secondProjection, x, y) {
//     let firstProjection = "EPSG:4326"
//     return proj4(firstProjection, secondProjection, [x, y]);
// }
// var y_pole_1=-28.543944504006674
// var x_pole_1=115.51127211328847
// var z_pole_1=294.022
// var l1=projectionTransform("EPSG:28350",x_pole_1,y_pole_1)
// var y_pole_2=-28.543712825505082
// var x_pole_2=115.51157089698127 
// var z_pole_2=292.225
// var l2=projectionTransform("EPSG:28350",x_pole_2,y_pole_2)
// console.log(l1)
// console.log(l2)