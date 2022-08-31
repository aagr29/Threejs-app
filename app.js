import express from 'express';
const app = express();
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.use(express.static(__dirname + '/public'))
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')))
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')))

app.listen(3000, () => console.log('Visit http://127.0.0.1:3000'))


import proj4 from 'proj4';
import fs from 'fs';
proj4.defs([

    [

        'EPSG:4326',

        '+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees'],

    [

        'EPSG:4269',

        '+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees'

    ],

    [

        'EPSG:28356',

        '+proj=utm +zone=56 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs '

    ],

    [

        'EPSG:28350',

        '+proj=utm +zone=50 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs '

    ]

]);

function projectionTransform(secondProjection, x, y) {
    let firstProjection = "EPSG:4326"
    return proj4(firstProjection, secondProjection, [x, y]);
}
var y_pole_1=-28.543944504006674
var x_pole_1=115.51127211328847
var z_pole_1=294.022
var l1=projectionTransform("EPSG:28350",x_pole_1,y_pole_1)
var ref_x=l1[0]
var ref_y=l1[1]
console.log(l1)
var data = fs.readFileSync('./Poles.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array
//  console.log(data[1][6]);
//  console.log(JSON.stringify(data, '', 2)); // as json
// let regExpLiteral1 = /(.*?)\)/
// var coordinates=data[1][6].match(regExpLiteral1)
// console.log(coordinates[1])
// const myArray = coordinates[1].split(" ")
// console.log(myArray)
// let x_coordinate=parseFloat(myArray[0])
// let y_coordinate=parseFloat(myArray[1])
// let z_coordinate=parseFloat(myArray[2])
// console.log(x_coordinate)
// console.log(y_coordinate)
// console.log(z_coordinate)
var array_x_coordinate = [];
var array_y_coordinate = [];
var array_z_coordinate = [];
console.log(data)
let regExpLiteral = /(.*?)\)/
for (let step = 1; step < data.length-1; step++) {
    console.log(data[step][6])
    let coordinates=data[step][6].match(regExpLiteral)
    let myArray = coordinates[1].split(" ")
    let x_coordinate=parseFloat(myArray[0])
    let y_coordinate=parseFloat(myArray[1])
    let z_coordinate=parseFloat(myArray[2])
    let i=step-1
    array_x_coordinate[i]=x_coordinate
    array_y_coordinate[i]=y_coordinate
    array_z_coordinate[i]=z_coordinate
  }

// console.log(array_x_coordinate)
// console.log(array_y_coordinate)
// console.log(array_z_coordinate)
// var l2=projectionTransform("EPSG:28350",x_pole_2,y_pole_2)

var x_meters=[]
var y_meters=[]
var z_meters=[]

for (let step = 0; step < array_x_coordinate.length; step++) {
    let coordinates=projectionTransform("EPSG:28350",array_x_coordinate[step],array_y_coordinate[step])
    x_meters[step]=coordinates[0]-ref_x
    y_meters[step]=coordinates[1]-ref_y
    z_meters[step]=array_z_coordinate[step]/10
  }
console.log(x_meters)
console.log(y_meters)
console.log(z_meters)

app.get('/get_coordinates', function(req, res) {
  
     
  
        res.status(200).json({'x': x_meters, "y": y_meters, "z": z_meters})
   
 
  })



//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var data_conductors = fs.readFileSync('./Conductors.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

console.log(data_conductors)


var xc1= [];
var yc1= [];
var zc1= [];

let regExpLiteral1 = /\((.*)/
for (let step = 1; step < data_conductors.length-1; step++) {
    console.log(data_conductors[step][7])
    let coordinates=data_conductors[step][7].match(regExpLiteral1)
    console.log(data_conductors[step][7])
    let myArray = coordinates[1].split(" ")
    let x_coordinate=parseFloat(myArray[0])
    let y_coordinate=parseFloat(myArray[1])
    let z_coordinate=parseFloat(myArray[2])
    let i=step-1
    xc1[i]=x_coordinate
    yc1[i]=y_coordinate
    zc1[i]=z_coordinate
  }

console.log(xc1.length)

console.log(yc1.length)

console.log(zc1.length)
