const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    throw new Error('WebGL not supported');
}

const vertex9 = [

    //angka 9
    -0.550000, 0.900000, 0,         0, 0.5, 0.8,
    -0.250000, 0.900000, 0,         0, 0.5, 0.8,
    -0.150000, 0.800000, 0,         0, 0.5, 0.8,
    -0.150000, 0.200000, 0,         0, 0.5, 0.8,
    -0.250000, 0.100000, 0,         0, 0.5, 0.8,
    -0.550000, 0.100000, 0,         0, 0.5, 0.8,
    -0.650000, 0.200000, 0,         0, 0.5, 0.8,
    -0.650000, 0.350000, 0,         0, 0.5, 0.8,
    -0.500000, 0.350000, 0,         0, 0.5, 0.8,
    -0.500000, 0.250000, 0,         0, 0.5, 0.8,
    -0.300000, 0.250000, 0,         0, 0.5, 0.8,
    -0.300000, 0.450000, 0,         0, 0.5, 0.8,
    -0.550000, 0.450000, 0,         0, 0.5, 0.8,
    -0.650000, 0.550000, 0,         0, 0.5, 0.8,
    -0.650000, 0.800000, 0,         0, 0.5, 0.8,
    -0.550000, 0.900000, 0,         0, 0.5, 0.8,

    -0.500000, 0.760000, 0,         0, 0.5, 0.8,
    -0.300000, 0.760000, 0,         0, 0.5, 0.8,
    -0.300000, 0.590000, 0,         0, 0.5, 0.8,
    -0.500000, 0.590000, 0,         0, 0.5, 0.8,
    -0.500000, 0.760000, 0,         0, 0.5, 0.8,

    // angka 9 (2)
    -0.550000, 0.900000, -0.3,              0, 0.5, 0.8,
    -0.250000, 0.900000, -0.3,              0, 0.5, 0.8,
    -0.150000, 0.800000, -0.3,              0, 0.5, 0.8,
    -0.150000, 0.200000, -0.3,              0, 0.5, 0.8,
    -0.250000, 0.100000, -0.3,              0, 0.5, 0.8,
    -0.550000, 0.100000, -0.3,              0, 0.5, 0.8,
    -0.650000, 0.200000, -0.3,              0, 0.5, 0.8,
    -0.650000, 0.350000, -0.3,              0, 0.5, 0.8,
    -0.500000, 0.350000, -0.3,              0, 0.5, 0.8,
    -0.500000, 0.250000, -0.3,              0, 0.5, 0.8,
    -0.300000, 0.250000, -0.3,              0, 0.5, 0.8,
    -0.300000, 0.450000, -0.3,              0, 0.5, 0.8,
    -0.550000, 0.450000, -0.3,              0, 0.5, 0.8,
    -0.650000, 0.550000, -0.3,              0, 0.5, 0.8,
    -0.650000, 0.800000, -0.3,              0, 0.5, 0.8,
    -0.550000, 0.900000, -0.3,              0, 0.5, 0.8,

    -0.500000, 0.760000, -0.3,              0, 0.5, 0.8,
    -0.300000, 0.760000, -0.3,              0, 0.5, 0.8,
    -0.300000, 0.590000, -0.3,              0, 0.5, 0.8,
    -0.500000, 0.590000, -0.3,              0, 0.5, 0.8,
    -0.500000, 0.760000, -0.3,              0, 0.5, 0.8,
];

const indices9 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41
];

const vertex1 = [
    //angka 1
    0.330000, 0.900000, 0,          0, 0.5, 0.8,
    0.480000, 0.900000, 0,          0, 0.5, 0.8,
    0.480000, 0.250000, 0,          0, 0.5, 0.8,
    0.630000, 0.250000, 0,          0, 0.5, 0.8,
    0.630000, 0.100000, 0,          0, 0.5, 0.8,
    0.170000, 0.100000, 0,          0, 0.5, 0.8,
    0.170000, 0.250000, 0,          0, 0.5, 0.8,
    0.320000, 0.250000, 0,          0, 0.5, 0.8,
    0.320000, 0.700000, 0,          0, 0.5, 0.8,
    0.170000, 0.700000, 0,          0, 0.5, 0.8,
    0.170000, 0.770000, 0,          0, 0.5, 0.8,
    0.330000, 0.900000, 0,          0, 0.5, 0.8,

    //angka 1 (2)
    0.330000, 0.900000, -0.3,               0, 0.5, 0.8,
    0.480000, 0.900000, -0.3,               0, 0.5, 0.8,
    0.480000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.630000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.630000, 0.100000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.100000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.320000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.320000, 0.700000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.700000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.770000, -0.3,               0, 0.5, 0.8,
    0.330000, 0.900000, -0.3,               0, 0.5, 0.8,
];

const indices1 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23
];

const vertexA = [
    //huruf A
    -0.300000, -0.100000, 0,                0, 0.5, 0.8,
    -0.550000, -0.900000, 0,                0, 0.5, 0.8,
    -0.700000, -0.900000, 0,                0, 0.5, 0.8,
    -0.450000, -0.100000, 0,                0, 0.5, 0.8,

    -0.300000, -0.100000, 0,                0, 0.5, 0.8,
    -0.050000, -0.900000, 0,                0, 0.5, 0.8,
    -0.200000, -0.900000, 0,                0, 0.5, 0.8,
    -0.450000, -0.100000, 0,                0, 0.5, 0.8,

    -0.550000, -0.600000, 0,                0, 0.5, 0.8,
    -0.250000, -0.600000, 0,                0, 0.5, 0.8,
    -0.250000, -0.700000, 0,                0, 0.5, 0.8,
    -0.550000, -0.700000, 0,                0, 0.5, 0.8,

    // -0.3, -0.1, 
    // -0.55, -0.9,
    // -0.7, -0.9,
    // -0.45, -0.1,
    
    // -0.3, -0.1,
    // -0.05, -0.9,
    // -0.2, -0.9,
    // -0.45, -0.1,

    // -0.55, -0.6,
    // -0.25, -0.6,
    // -0.25, -0.7,
    // -0.55, -0.7,

    //huruf A (2)
    -0.300000, -0.100000, -0.3,             0, 0.5, 0.8,
    -0.550000, -0.900000, -0.3,             0, 0.5, 0.8,
    -0.700000, -0.900000, -0.3,             0, 0.5, 0.8,
    -0.450000, -0.100000, -0.3,             0, 0.5, 0.8,
    -0.300000, -0.100000, -0.3,             0, 0.5, 0.8,
    -0.050000, -0.900000, -0.3,             0, 0.5, 0.8,
    -0.200000, -0.900000, -0.3,             0, 0.5, 0.8,
    -0.450000, -0.100000, -0.3,             0, 0.5, 0.8,
    -0.550000, -0.600000, -0.3,             0, 0.5, 0.8,
    -0.250000, -0.600000, -0.3,             0, 0.5, 0.8,
    -0.250000, -0.700000, -0.3,             0, 0.5, 0.8,
    -0.550000, -0.700000, -0.3,             0, 0.5, 0.8,

    // -0.3, -0.1, 
    // -0.55, -0.9,
    // -0.7, -0.9,
    // -0.45, -0.1,
    
    // -0.3, -0.1,
    // -0.05, -0.9,
    // -0.2, -0.9,
    // -0.45, -0.1,

    // -0.55, -0.6,
    // -0.25, -0.6,
    // -0.25, -0.7,
    // -0.55, -0.7,

];

const indicesA = [
    0,  1,  2,     0,  2,  3,
    4,  5,  6,     4,  6,  7,   
    8,  9,  10,    8,  10, 11,  
    12, 13, 14,    12, 14, 15, 
    16, 17, 18,    16, 18, 19,  
    20, 21, 22,    20, 22, 23
];

const vertexT = [
    //huruf T
    0.100000, -0.100000, 0,         0, 0.5, 0.8,
    0.700000, -0.100000, 0,         0, 0.5, 0.8,
    0.700000, -0.250000, 0,         0, 0.5, 0.8,
    0.100000, -0.250000, 0,         0, 0.5, 0.8,
    0.330000, -0.100000, 0,         0, 0.5, 0.8,
    0.480000, -0.100000, 0,         0, 0.5, 0.8,
    0.480000, -0.900000, 0,         0, 0.5, 0.8,
    0.330000, -0.900000, 0,         0, 0.5, 0.8,

    // 0.1, -0.1,
    // 0.7, -0.1,
    // 0.7, -0.25,
    // 0.1, -0.25,

    // 0.33, -0.1,
    // 0.48, -0.1,
    // 0.48, -0.9,
    // 0.33, -0.9,

    //huruf T (2)
    0.100000, -0.100000, -0.3,              0, 0.5, 0.8,
    0.700000, -0.100000, -0.3,              0, 0.5, 0.8,
    0.700000, -0.250000, -0.3,              0, 0.5, 0.8,
    0.100000, -0.250000, -0.3,              0, 0.5, 0.8,
    0.330000, -0.100000, -0.3,              0, 0.5, 0.8,
    0.480000, -0.100000, -0.3,              0, 0.5, 0.8,
    0.480000, -0.900000, -0.3,              0, 0.5, 0.8,
    0.330000, -0.900000, -0.3,              0, 0.5, 0.8,

    // 0.1, -0.1,
    // 0.7, -0.1,
    // 0.7, -0.25,
    // 0.1, -0.25,

    // 0.33, -0.1,
    // 0.48, -0.1,
    // 0.48, -0.9,
    // 0.33, -0.9,
];

const indicesT = [
    0,  1,  2,     0,  2,  3,
    4,  5,  6,     4,  6,  7,   
    8,  9,  10,    8,  10, 11,  
    12, 13, 14,    12, 14, 15, 
    16, 17, 18,    16, 18, 19,  
    20, 21, 22,    20, 22, 23
];

const objects = [
    {
      vertices: vertex9,
      indices: indices9,
      length: indices9.length,
      type: gl.LINE_LOOP,
    },
    {
      vertices: vertex1,
      indices : indices1,
      length: indices1.length,
      type: gl.LINE_LOOP
    },
    {
      vertices: vertexA,
      indices: indicesA,
      length: indicesA.length,
      type: gl.TRIANGLES,
    },
    {
      vertices: vertexT,
      indices: indicesT,
      length: indicesT.length,
      type: gl.TRIANGLES,
    },
  ]


// function randomColor() {
//     return [Math.random(), Math.random(), Math.random()];
// }


// let colorData = [];
// for (let face = 0; face < 6; face++) {
//     let faceColor = randomColor();
//     for (let vertex = 0; vertex < 6; vertex++) {
//         colorData.push(...faceColor);
//     }
// }

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
varying vec3 vColor;

// uniform mat4 matrix;
uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main() {
    vColor = color;
    // gl_Position = matrix * vec4(position, 1);
    gl_Position = mProj * mView * mWorld * vec4(position, 1);
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;

varying vec3 vColor;

void main() {
    gl_FragColor = vec4(vColor, 1);
}
`);
gl.compileShader(fragmentShader);
console.log(gl.getShaderInfoLog(fragmentShader));

const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

// varoaible lokal
var rotateX = 0;
var rotateY = 0;
var canvasWidth = 12
var horizontalSpeed = 0.091;
var horizontalDelta = 0.0;
var verticalDelta = 0.0;
var scaleDelta = 0.0;
var scaleSpeed = 0.05;

// View
var cameraX = 0.0;
var cameraZ = 7.5;
var view = glMatrix.mat4.create();

glMatrix.mat4.lookAt(
  view,
  [cameraX, 0.0, cameraZ],
  [cameraX, 0.0, 0],
  [0.0, 1.0, 0.0]
);

var perspective = glMatrix.mat4.create();
glMatrix.mat4.perspective(perspective, Math.PI/2.4, 1.0, 0.5, 50.0);

const draw = (vertices, indices, start=0, end, type=gl.LINE_LOOP) =>{ 
  const buffer = gl.createBuffer();
  const indexBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  const aPosition = gl.getAttribLocation(program, 'position');
  const aColor = gl.getAttribLocation(program, 'color');

  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
    6 * Float32Array.BYTES_PER_ELEMENT, 
    0 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aPosition);
    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      6 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT 
      );
    gl.enableVertexAttribArray(aColor);
    
    gl.drawElements(type, indices.length, gl.UNSIGNED_SHORT, 0);
}
// const position9Buffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, position9Buffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex9), gl.STATIC_DRAW);

// const position1Buffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, position1Buffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertex1), gl.STATIC_DRAW);

// const positionABuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, positionABuffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexA), gl.STATIC_DRAW);

// const positionTBuffer = gl.createBuffer();
// gl.bindBuffer(gl.ARRAY_BUFFER, positionTBuffer);
// gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexT), gl.STATIC_DRAW);

gl.linkProgram(program);

// const positionLocation = gl.getAttribLocation(program, `position`);
// gl.enableVertexAttribArray(positionLocation);
// gl.bindBuffer(gl.ARRAY_BUFFER, position9Buffer);
// gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

// const colorLocation = gl.getAttribLocation(program, `color`);
// gl.enableVertexAttribArray(colorLocation);
// gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
// gl.vertexAttribPointer(colorLocation, 3, gl.FLOAT, false, 0, 0);

gl.useProgram(program);
// gl.enable(gl.DEPTH_TEST);

const animate9 = () =>{
    var model = glMatrix.mat4.create();

    if (horizontalDelta >= (canvasWidth/2) || horizontalDelta <= (-canvasWidth/2+1)) {
      horizontalSpeed = horizontalSpeed * -1;
    }

    horizontalDelta += horizontalSpeed;

    glMatrix.mat4.translate(model, model, [horizontalDelta, verticalDelta, 0.0]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
  }
  
  const animate1 = () =>{
    var model = glMatrix.mat4.create();

    if (scaleDelta >= 2 || scaleDelta <= -0.5) {
      scaleSpeed = scaleSpeed * -1;
    }

    scaleDelta += scaleSpeed;

    glMatrix.mat4.translate(model, model, [0, 0, scaleDelta]);
    
    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  }

  const animateA = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateY(
      model, model, rotateY
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj"); 

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  }

  const animateT = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.rotateX(
      model, model, rotateX
    );

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }
  
  function onKeydown(event) {
    if (event.keyCode == 65 || event.keyCode == 37) { // a / arrow kiri
      rotateY -= 0.2;
    } else if (event.keyCode == 68 || event.keyCode == 39) { // d / arrow kanan
      rotateY += 0.2;
    }

    if (event.keyCode == 87 || event.keyCode == 38) { // w / arrow atas
      rotateX -= 0.2;
    } else if (event.keyCode == 83 || event.keyCode == 40) { // s / arrow bawah
      rotateX += 0.2;
    }
  }
  document.addEventListener("keydown", onKeydown);

  const render = () => {  
    gl.clearColor(0.02, 0.27, 0.37, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

    animate9();
    animate1();
    animateA();
    animateT();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);


// const uniformLocations = {
//     matrix: gl.getUniformLocation(program, `matrix`),
// };

// const matrix = mat4.create();

// // mat4.translate(matrix, matrix, [.2, .5, 0]);

// // mat4.scale(matrix, matrix, [0.5, 0.5, 0.5]);

// function animate1() {
//     requestAnimationFrame(animate1);
//     // mat4.rotateZ(matrix, matrix, Math.PI/2 / 70);
//     // mat4.rotateY(matrix, matrix, Math.PI/2 / 70);
//     gl.uniformMatrix4fv(uniformLocations.matrix, false, matrix);
//     gl.drawArrays(gl.LINE_LOOP, 0, 21);
// }

// animate1();

// function animate2() {
//     requestAnimationFrame(animate2);
//     // mat4.rotateZ(matrix, matrix, Math.PI/2 / 70);
//     // mat4.rotateY(matrix, matrix, Math.PI/2 / 70);
//     gl.uniformMatrix4fv(uniformLocations.matrix, false, matrix);
//     gl.drawArrays(gl.TRIANGLES, 33, 18);
// }

// animate2();
