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
var y_pole_1=-28.543944504006674 // origin y coordinate ----------- this is our reference origin 
var x_pole_1=115.51127211328847 // origin x coordinate ----------- this is our reference origin 
var l1=projectionTransform("EPSG:28350",x_pole_1,y_pole_1)
var ref_x=l1[0]
var ref_y=l1[1]
console.log(l1)

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// Poles data wrangling
var data = fs.readFileSync('./Poles.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array

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
//conert lat long to meters
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
// send data to client in json
app.get('/get_coordinates', function(req, res) {
  
     
  
        res.status(200).json({'x': x_meters, "y": y_meters, "z": z_meters})
   
 
  })

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Conductors data wrangling
var data_conductors = fs.readFileSync('./Conductors.csv')
    .toString() // convert Buffer to string
    .split('\n') // split string to lines
    .map(e => e.trim()) // remove white spaces for each line
    .map(e => e.split(',').map(e => e.trim())); // split each line to array
var xc1= [];
var yc1= [];
var zc1= [];
var xc2= [];
var yc2= [];
var zc2= [];
var xc3= [];
var yc3= [];
var zc3= [];
var xc4= [];
var yc4= [];
var zc4= [];
var xc5= [];
var yc5= [];
var zc5= [];
var xc6= [];
var yc6= [];
var zc6= [];
var xc7= [];
var yc7= [];
var zc7= [];
var xc8= [];
var yc8= [];
var zc8= [];
var xc9= [];
var yc9= [];
var zc9= [];
var xc10= [];
var yc10= [];
var zc10= [];
var xc11= [];
var yc11= [];
var zc11= [];
let regExpLiteral1 = /\((.*)/
for (let step = 1; step < data_conductors.length-1; step++) {
    let coordinates1=data_conductors[step][7].match(regExpLiteral1)
    let coordinates2=data_conductors[step][8].split(" ")
    let coordinates3=data_conductors[step][9].split(" ")
    let coordinates4=data_conductors[step][10].split(" ")
    let coordinates5=data_conductors[step][11].split(" ")
    let coordinates6=data_conductors[step][12].split(" ")
    let coordinates7=data_conductors[step][13].split(" ")
    let coordinates8=data_conductors[step][14].split(" ")
    let coordinates9=data_conductors[step][15].split(" ")
    let coordinates10=data_conductors[step][16].split(" ")
    let coordinates11=data_conductors[step][17].match(regExpLiteral)
    let myArray1 = coordinates1[1].split(" ")
    let myArray2 = coordinates11[1].split(" ")
    let x_coordinate1=parseFloat(myArray1[0])
    let y_coordinate1=parseFloat(myArray1[1])
    let z_coordinate1=parseFloat(myArray1[2])
    let x_coordinate2=parseFloat(coordinates2[0])
    let y_coordinate2=parseFloat(coordinates2[1])
    let z_coordinate2=parseFloat(coordinates2[2])
    let x_coordinate3=parseFloat(coordinates3[0])
    let y_coordinate3=parseFloat(coordinates3[1])
    let z_coordinate3=parseFloat(coordinates3[2])
    let x_coordinate4=parseFloat(coordinates4[0])
    let y_coordinate4=parseFloat(coordinates4[1])
    let z_coordinate4=parseFloat(coordinates4[2])
    let x_coordinate5=parseFloat(coordinates5[0])
    let y_coordinate5=parseFloat(coordinates5[1])
    let z_coordinate5=parseFloat(coordinates5[2])
    let x_coordinate6=parseFloat(coordinates6[0])
    let y_coordinate6=parseFloat(coordinates6[1])
    let z_coordinate6=parseFloat(coordinates6[2])
    let x_coordinate7=parseFloat(coordinates7[0])
    let y_coordinate7=parseFloat(coordinates7[1])
    let z_coordinate7=parseFloat(coordinates7[2])
    let x_coordinate8=parseFloat(coordinates8[0])
    let y_coordinate8=parseFloat(coordinates8[1])
    let z_coordinate8=parseFloat(coordinates8[2])
    let x_coordinate9=parseFloat(coordinates9[0])
    let y_coordinate9=parseFloat(coordinates9[1])
    let z_coordinate9=parseFloat(coordinates9[2])
    let x_coordinate10=parseFloat(coordinates10[0])
    let y_coordinate10=parseFloat(coordinates10[1])
    let z_coordinate10=parseFloat(coordinates10[2])
    let x_coordinate11=parseFloat(myArray2[0])
    let y_coordinate11=parseFloat(myArray2[1])
    let z_coordinate11=parseFloat(myArray2[2])
    let i=step-1
    xc1[i]=x_coordinate1
    yc1[i]=y_coordinate1
    zc1[i]=z_coordinate1
    xc2[i]=x_coordinate2
    yc2[i]=y_coordinate2
    zc2[i]=z_coordinate2
    xc3[i]=x_coordinate3
    yc3[i]=y_coordinate3
    zc3[i]=z_coordinate3
    xc4[i]=x_coordinate4
    yc4[i]=y_coordinate4
    zc4[i]=z_coordinate4
    xc5[i]=x_coordinate5
    yc5[i]=y_coordinate5
    zc5[i]=z_coordinate5
    xc6[i]=x_coordinate6
    yc6[i]=y_coordinate6
    zc6[i]=z_coordinate6
    xc7[i]=x_coordinate7
    yc7[i]=y_coordinate7
    zc7[i]=z_coordinate7
    xc8[i]=x_coordinate8
    yc8[i]=y_coordinate8
    zc8[i]=z_coordinate8
    xc9[i]=x_coordinate9
    yc9[i]=y_coordinate9
    zc9[i]=z_coordinate9
    xc10[i]=x_coordinate10
    yc10[i]=y_coordinate10
    zc10[i]=z_coordinate10
    xc11[i]=x_coordinate11
    yc11[i]=y_coordinate11
    zc11[i]=z_coordinate11
  }

// convert lat long to meters
for (let step = 0; step < array_x_coordinate.length; step++) {
    let coordinates=projectionTransform("EPSG:28350",array_x_coordinate[step],array_y_coordinate[step])
    x_meters[step]=coordinates[0]-ref_x
    y_meters[step]=coordinates[1]-ref_y
    z_meters[step]=array_z_coordinate[step]/10
  }

  var x1= [];
  var y1= [];
  var z1= [];
  var x2= [];
  var y2= [];
  var z2= [];
  var x3= [];
  var y3= [];
  var z3= [];
  var x4= [];
  var y4= [];
  var z4= [];
  var x5= [];
  var y5= [];
  var z5= [];
  var x6= [];
  var y6= [];
  var z6= [];
  var x7= [];
  var y7= [];
  var z7= [];
  var x8= [];
  var y8= [];
  var z8= [];
  var x9= [];
  var y9= [];
  var z9= [];
  var x10= [];
  var y10= [];
  var z10= [];
  var x11= [];
  var y11= [];
  var z11= [];

  for (let step = 0; step < xc1.length; step++) {
    let c1=projectionTransform("EPSG:28350",xc1[step],yc1[step])
    x1[step]=c1[0]-ref_x
    y1[step]=c1[1]-ref_y
    z1[step]=zc1[step]/10
    let c2=projectionTransform("EPSG:28350",xc2[step],yc2[step])
    x2[step]=c2[0]-ref_x
    y2[step]=c2[1]-ref_y
    z2[step]=zc2[step]/10
    let c3=projectionTransform("EPSG:28350",xc3[step],yc3[step])
    x3[step]=c3[0]-ref_x
    y3[step]=c3[1]-ref_y
    z3[step]=zc3[step]/10
    let c4=projectionTransform("EPSG:28350",xc4[step],yc4[step])
    x4[step]=c4[0]-ref_x
    y4[step]=c4[1]-ref_y
    z4[step]=zc4[step]/10
    let c5=projectionTransform("EPSG:28350",xc5[step],yc5[step])
    x5[step]=c5[0]-ref_x
    y5[step]=c5[1]-ref_y
    z5[step]=zc5[step]/10
    let c6=projectionTransform("EPSG:28350",xc6[step],yc6[step])
    x6[step]=c6[0]-ref_x
    y6[step]=c6[1]-ref_y
    z6[step]=zc6[step]/10
    let c7=projectionTransform("EPSG:28350",xc7[step],yc7[step])
    x7[step]=c7[0]-ref_x
    y7[step]=c7[1]-ref_y
    z7[step]=zc7[step]/10
    let c8=projectionTransform("EPSG:28350",xc8[step],yc8[step])
    x8[step]=c8[0]-ref_x
    y8[step]=c8[1]-ref_y
    z8[step]=zc1[step]/10
    let c9=projectionTransform("EPSG:28350",xc9[step],yc9[step])
    x9[step]=c9[0]-ref_x
    y9[step]=c9[1]-ref_y
    z9[step]=zc9[step]/10
    let c10=projectionTransform("EPSG:28350",xc10[step],yc10[step])
    x10[step]=c10[0]-ref_x
    y10[step]=c10[1]-ref_y
    z10[step]=zc10[step]/10
    let c11=projectionTransform("EPSG:28350",xc11[step],yc11[step])
    x11[step]=c11[0]-ref_x
    y11[step]=c11[1]-ref_y
    z11[step]=zc11[step]/10
  }


// send data to client in json
app.get('/get_coordinates_conductors', function(req, res) {
  
     
  
    res.status(200).json({'x1': x1, "y1": y1, "z1": z1,'x2': x2, "y2": y2, "z2": z2,'x3': x3, "y3": y3, "z3": z3,'x4': x4, "y4": y4, "z4": z4,'x5': x5, "y5": y5, "z5": z5,'x6': x6, "y6": y6, "z6": z6,'x7': x7, "y7": y7, "z7": z7,'x8': x8, "y8": y8, "z8": z8,'x9': x9, "y9": y9, "z9": z9,'x10': x10, "y10": y10, "z10": z10,'x11': x11, "y11": y11, "z11": z11})


})