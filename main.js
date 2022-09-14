function main(){
    var kanvas = document.getElementById("kanvas");
    var gl = kanvas.getContext("webgl");

    // Vertex shader
    var vertexShaderCode = `
    void main() {
        float x = 0.0;
        float y = 0.0;
        gl_PointSize = 70.0;
        gl_Position = vec4(x, y, 0.0, 1.0);
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

    gl.clearColor(0.9, 0.3, 0.0, 0.3);

    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);

}