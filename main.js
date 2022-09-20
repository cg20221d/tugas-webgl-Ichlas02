function main(){
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    var vertices = [
        //angka 9
        -0.55, 0.9,
        -0.25, 0.9,
        -0.15, 0.8,
        -0.15, 0.2,
        -0.25, 0.1,
        -0.55, 0.1,
        -0.65, 0.2,
        -0.65, 0.35,
        -0.5, 0.35,
        -0.5, 0.25,
        -0.3, 0.25,
        -0.3, 0.45,
        -0.55, 0.45,
        -0.65, 0.55,
        -0.65, 0.8,
        -0.55, 0.9,

        -0.5, 0.76,
        -0.3, 0.76,
        -0.3, 0.59,
        -0.5, 0.59,
        -0.5, 0.76,

        //angka 1
        0.33, 0.9,
        0.48, 0.9,
        0.48, 0.25,
        0.63, 0.25,
        0.63, 0.1,
        0.17, 0.1,
        0.17, 0.25,
        0.32, 0.25,
        0.32, 0.7,
        0.17, 0.7,
        0.17, 0.77,
        0.33, 0.9,

        //huruf A
        -0.3, -0.1,
        -0.45, -0.1,
        -0.7, -0.9,

        -0.7, -0.9,
        -0.55, -0.9,
        -0.3, -0.1,

        -0.3, -0.1,
        -0.05, -0.9,
        -0.2, -0.9,

        -0.2, -0.9,
        -0.45, -0.1,
        -0.3, -0.1,


        -0.55, -0.6,
        -0.55, -0.7,
        -0.25, -0.6,

        -0.25, -0.6,
        -0.25, -0.7,
        -0.55, -0.7,

        //huruf T

        0.15, -0.1,
        0.65, -0.1,
        0.15, -0.25,

        0.15, -0.25,
        0.65, -0.25,
        0.65, -0.1,

        
        0.33, -0.1,
        0.48, -0.1,
        0.33, -0.9,

        0.33, -0.9,
        0.48, -0.9,
        0.48, -0.1


    ];

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

    // Vertex shader
    var vertexShaderCode = `
    attribute vec2 aPosition;
    void main() {
        float x = aPosition.x;
        float y = aPosition.y;
        gl_PointSize = 10.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
        // x, y bisa diganti jadi aPosition.xy
    }`;
    var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShaderObject, vertexShaderCode);
    gl.compileShader(vertexShaderObject); //udh jadi object (.o)

    // Fragment shader
    var fragmentShaderCode = `
    precision mediump float;
    void main() {
        float r = 0.5;
        float g = 0.5;
        float b = 0.8;
        gl_FragColor = vec4(r, g, b, 1.0);
        
    }    
    `;
    
    var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
    gl.compileShader(fragmentShaderObject); //udh jadi object (.o)

    var shaderProgram = gl.createProgram(); //wadah executable (.exe)
    gl.attachShader(shaderProgram, vertexShaderObject);
    gl.attachShader(shaderProgram, fragmentShaderObject);
    gl.linkProgram(shaderProgram);
    gl.useProgram(shaderProgram);

    // Kita mengajarkan GPU bagaimana caranya mengoleksi
    // nilai posisi dari ARRAY_BUFFER untuk setiap
    // vertex yang sedang diproses

    var aPosition = gl.getAttribLocation(shaderProgram, 'aPosition');
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    gl.clearColor(0.9, 0.3, 0.0, 0.3);

    gl.clear(gl.COLOR_BUFFER_BIT);

    //angka 9
    gl.drawArrays(gl.LINE_LOOP, 0, 16);
    gl.drawArrays(gl.LINE_LOOP, 16, 5);

    //angka 1
    gl.drawArrays(gl.LINE_LOOP, 21, 12);
    
    //huruf A
    gl.drawArrays(gl.TRIANGLE_FAN, 33, 12);
    gl.drawArrays(gl.TRIANGLE_FAN, 45, 6);

    //huruf T
    gl.drawArrays(gl.TRIANGLE_FAN, 51, 6);
    gl.drawArrays(gl.TRIANGLE_FAN, 57, 6);
}