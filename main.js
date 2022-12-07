const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

if (!gl) {
    throw new Error('WebGL not supported');
}

const vertex9 = [

    //angka 9
    -0.550000, 0.900000, 0,         0, 0.5, 0.8,      0, 0, 1,
    -0.550000, 0.900000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.250000, 0.900000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.250000, 0.900000, 0,         0, 0.5, 0.8,    0, 0, 1,
    -0.150000, 0.800000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.150000, 0.800000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.150000, 0.200000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.150000, 0.200000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.250000, 0.100000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.250000, 0.100000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.550000, 0.100000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.550000, 0.100000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.200000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.200000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.350000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.350000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.500000, 0.350000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.500000, 0.350000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.500000, 0.250000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.500000, 0.250000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.300000, 0.250000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.300000, 0.250000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.300000, 0.450000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.300000, 0.450000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.550000, 0.450000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.550000, 0.450000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.550000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.550000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.800000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.800000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.550000, 0.900000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.550000, 0.900000, 0,         0, 0.5, 0.8,  0, 0, 1,

    // angka 9 (2)
    -0.250000, 0.900000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.250000, 0.900000, -0.3,         0, 0.5, 0.8,      0, 0, -1,
    -0.150000, 0.800000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.150000, 0.800000, 0,              0, 0.5, 0.8,  0, 0, 1,
    -0.150000, 0.200000, 0,              0, 0.5, 0.8,  0, 0, 1,
    -0.150000, 0.200000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.250000, 0.100000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.250000, 0.100000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.550000, 0.100000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.550000, 0.100000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.200000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.200000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.350000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.350000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.500000, 0.350000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.500000, 0.350000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.500000, 0.250000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.500000, 0.250000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.300000, 0.250000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.300000, 0.250000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.300000, 0.450000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.300000, 0.450000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.550000, 0.450000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.550000, 0.450000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.550000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.650000, 0.550000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.800000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.650000, 0.800000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.550000, 0.900000, 0,         0, 0.5, 0.8,  0, 0, 1,
    -0.550000, 0.900000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
    -0.250000, 0.900000, -0.3,              0, 0.5, 0.8,      0, 0, -1,

];

const indices9 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 
    20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 34, 35, 36, 37,
    38, 39, 40, 41, 42, 43, 44, 45, 46,
    47, 48, 49, 50, 51, 52, 53, 54, 55,
    56, 57, 58, 59, 60, 61, 62
];

const vertex91 = [
    // angka 9 (2)
        -0.500000, 0.760000, 0,         0, 0.5, 0.8,      0, 0, 1,
        -0.300000, 0.760000, 0,         0, 0.5, 0.8,      0, 0, 1,
        -0.300000, 0.590000, 0,         0, 0.5, 0.8,      0, 0, 1,
        -0.500000, 0.590000, 0,         0, 0.5, 0.8,      0, 0, 1,
        -0.500000, 0.760000, 0,         0, 0.5, 0.8,      0, 0, 1,
    
        // angka 9 (3)
        -0.500000, 0.760000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
        -0.300000, 0.760000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
        -0.300000, 0.590000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
        -0.500000, 0.590000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
        -0.500000, 0.760000, -0.3,              0, 0.5, 0.8,      0, 0, -1,
]

const indices91 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

const vertex1 = [
    //angka 1
    0.330000, 0.900000, 0,          0, 0.5, 0.8,
    0.330000, 0.900000, -0.3,               0, 0.5, 0.8,
    0.480000, 0.900000, -0.3,               0, 0.5, 0.8,
    0.480000, 0.900000, 0,          0, 0.5, 0.8,
    0.480000, 0.250000, 0,          0, 0.5, 0.8,
    0.480000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.630000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.630000, 0.250000, 0,          0, 0.5, 0.8,
    0.630000, 0.100000, 0,          0, 0.5, 0.8,
    0.630000, 0.100000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.100000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.100000, 0,          0, 0.5, 0.8,
    0.170000, 0.250000, 0,          0, 0.5, 0.8,
    0.170000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.320000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.320000, 0.250000, 0,          0, 0.5, 0.8,
    0.320000, 0.700000, 0,          0, 0.5, 0.8,
    0.320000, 0.700000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.700000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.700000, 0,          0, 0.5, 0.8,
    0.170000, 0.770000, 0,          0, 0.5, 0.8,
    0.170000, 0.770000, -0.3,               0, 0.5, 0.8,
    0.330000, 0.900000, -0.3,               0, 0.5, 0.8,
    0.330000, 0.900000, 0,          0, 0.5, 0.8,

    //angka 1 (2)
    0.480000, 0.900000, 0,          0, 0.5, 0.8,
    0.480000, 0.900000, -0.3,               0, 0.5, 0.8,
    0.480000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.480000, 0.250000, 0,          0, 0.5, 0.8,
    0.630000, 0.250000, 0,          0, 0.5, 0.8,
    0.630000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.630000, 0.100000, -0.3,               0, 0.5, 0.8,
    0.630000, 0.100000, 0,          0, 0.5, 0.8,
    0.170000, 0.100000, 0,          0, 0.5, 0.8,
    0.170000, 0.100000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.250000, 0,          0, 0.5, 0.8,
    0.320000, 0.250000, 0,          0, 0.5, 0.8,
    0.320000, 0.250000, -0.3,               0, 0.5, 0.8,
    0.320000, 0.700000, -0.3,               0, 0.5, 0.8,
    0.320000, 0.700000, 0,          0, 0.5, 0.8,
    0.170000, 0.700000, 0,          0, 0.5, 0.8,
    0.170000, 0.700000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.770000, -0.3,               0, 0.5, 0.8,
    0.170000, 0.770000, 0,          0, 0.5, 0.8,
    0.330000, 0.900000, 0,          0, 0.5, 0.8,
    0.330000, 0.900000, -0.3,               0, 0.5, 0.8,
   
];

const indices1 = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
    12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29,
    30, 31, 32, 33, 34, 35, 36, 37, 38,
    39, 40, 41, 42, 43, 44, 45
];

const vertexA = [
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

    //huruf A (top)
    -0.300000, -0.100000, 0,                0.5, 0.5, 0.8,
    -0.450000, -0.100000, 0,                0.5, 0.5, 0.8,
    -0.450000, -0.100000, -0.3,             0.5, 0.5, 0.8,
    -0.300000, -0.100000, -0.3,             0.5, 0.5, 0.8,

    //huruf A (outer left)
    -0.450000, -0.100000, 0,                0.5, 0.5, 0.8,
    -0.700000, -0.900000, 0,                0.5, 0.5, 0.8,
    -0.700000, -0.900000, -0.3,             0.5, 0.5, 0.8,
    -0.450000, -0.100000, -0.3,             0.5, 0.5, 0.8,

    //huruf A (inner left)
    -0.300000, -0.100000, 0,                0.5, 0.5, 0.8,
    -0.550000, -0.900000, 0,                0.5, 0.5, 0.8,
    -0.550000, -0.900000, -0.3,             0.5, 0.5, 0.8,
    -0.300000, -0.100000, -0.3,             0.5, 0.5, 0.8,

    //huruf A (outer right)
    -0.300000, -0.100000, 0,                0.5, 0.5, 0.8,
    -0.050000, -0.900000, 0,                0.5, 0.5, 0.8,
    -0.050000, -0.900000, -0.3,             0.5, 0.5, 0.8,
    -0.300000, -0.100000, -0.3,             0.5, 0.5, 0.8,

    //huruf A (inner right)
    -0.450000, -0.100000, 0,                0.5, 0.5, 0.8,
    -0.200000, -0.900000, 0,                0.5, 0.5, 0.8,
    -0.200000, -0.900000, -0.3,             0.5, 0.5, 0.8,
    -0.450000, -0.100000, -0.3,             0.5, 0.5, 0.8,

    //huruf A (bottom left)
    -0.550000, -0.900000, 0,                0, 0.5, 0.8,
    -0.700000, -0.900000, 0,                0, 0.5, 0.8,
    -0.700000, -0.900000, -0.3,             0, 0.5, 0.8,
    -0.550000, -0.900000, -0.3,             0, 0.5, 0.8,

    //huruf A (bottom right)
    -0.050000, -0.900000, 0,                0, 0.5, 0.8,
    -0.200000, -0.900000, 0,                0, 0.5, 0.8,
    -0.200000, -0.900000, -0.3,             0, 0.5, 0.8,
    -0.050000, -0.900000, -0.3,             0, 0.5, 0.8,

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
    20, 21, 22,    20, 22, 23,
    24, 25, 26,    24, 26, 27,
    28, 29, 30,    28, 30, 31,
    32, 33, 34,    32, 34, 35,
    36, 37, 38,    36, 38, 39,
    40, 41, 42,    40, 42, 43,
    44, 45, 46,    44, 46, 47,
    48, 49, 50,    48, 50, 51,
];

const vertexT = [
    //huruf T
    0.100000, -0.100000, 0,         0, 0.5, 0.8,      0, 0, 1,
    0.700000, -0.100000, 0,         0, 0.5, 0.8,      0, 0, 1,
    0.700000, -0.250000, 0,         0, 0.5, 0.8,      0, 0, 1,
    0.100000, -0.250000, 0,         0, 0.5, 0.8,      0, 0, 1,

    0.330000, -0.100000, 0,         0, 0.5, 0.8,      0, 0, 1,
    0.480000, -0.100000, 0,         0, 0.5, 0.8,      0, 0, 1,
    0.480000, -0.900000, 0,         0, 0.5, 0.8,      0, 0, 1,
    0.330000, -0.900000, 0,         0, 0.5, 0.8,      0, 0, 1,

    //huruf T (upper top)
    0.100000, -0.100000, 0,         0.5, 0.5, 0.8,    0, 1, 0,
    0.100000, -0.100000, -0.3,      0.5, 0.5, 0.8,    0, 1, 0,
    0.700000, -0.100000, -0.3,      0.5, 0.5, 0.8,    0, 1, 0,
    0.700000, -0.100000, 0,         0.5, 0.5, 0.8,    0, 1, 0,
    //huruf T (lower top)
    0.100000, -0.250000, 0,         0.5, 0.5, 0.8,    0, -1, 0,
    0.100000, -0.250000, -0.3,      0.5, 0.5, 0.8,    0, -1, 0,
    0.700000, -0.250000, -0.3,      0.5, 0.5, 0.8,    0, -1, 0,
    0.700000, -0.250000, 0,         0.5, 0.5, 0.8,    0, -1, 0,

    //huruf T (bottom)
    0.480000, -0.900000, 0,         0.5, 0.5, 0.8,    0, -1, 0,
    0.330000, -0.900000, 0,         0.5, 0.5, 0.8,    0, -1, 0,
    0.330000, -0.900000, -0.3,      0.5, 0.5, 0.8,    0, -1, 0,
    0.480000, -0.900000, -0.3,      0.5, 0.5, 0.8,    0, -1, 0,

    //huruf T (left)
    0.330000, -0.100000, 0,         0.5, 0.5, 0.8,    1, 0, 0,
    0.330000, -0.900000, 0,         0.5, 0.5, 0.8,    1, 0, 0,
    0.330000, -0.900000, -0.3,      0.5, 0.5, 0.8,    1, 0, 0,
    0.330000, -0.100000, -0.3,      0.5, 0.5, 0.8,    1, 0, 0,

    //huruf T (right)
    0.700000, -0.100000, 0,         0.5, 0.5, 0.8,    -1, 0, 0,
    0.700000, -0.250000, 0,         0.5, 0.5, 0.8,    -1, 0, 0,
    0.700000, -0.250000, -0.3,      0.5, 0.5, 0.8,    -1, 0, 0,
    0.700000, -0.100000, -0.3,      0.5, 0.5, 0.8,    -1, 0, 0,

    //huruf T (bottom left)
    0.480000, -0.100000, 0,            0.5, 0.5, 0.8,   0, -1, 0,
    0.480000, -0.900000, 0,            0.5, 0.5, 0.8,   0, -1, 0,
    0.480000, -0.900000, -0.3,         0.5, 0.5, 0.8,   0, -1, 0,
    0.480000, -0.100000, -0.3,         0.5, 0.5, 0.8,   0, -1, 0,


    // 0.1, -0.1,
    // 0.7, -0.1,
    // 0.7, -0.25,
    // 0.1, -0.25,

    // 0.33, -0.1,
    // 0.48, -0.1,
    // 0.48, -0.9,
    // 0.33, -0.9,

    //huruf T (2)
    0.100000, -0.100000, -0.3,              0, 0.5, 0.8,    0, 0, -1,
    0.700000, -0.100000, -0.3,              0, 0.5, 0.8,    0, 0, -1,
    0.700000, -0.250000, -0.3,              0, 0.5, 0.8,    0, 0, -1,
    0.100000, -0.250000, -0.3,              0, 0.5, 0.8,    0, 0, -1,

    0.330000, -0.100000, -0.3,              0, 0.5, 0.8,    0, 0, -1,
    0.480000, -0.100000, -0.3,              0, 0.5, 0.8,    0, 0, -1,
    0.480000, -0.900000, -0.3,              0, 0.5, 0.8,    0, 0, -1,
    0.330000, -0.900000, -0.3,              0, 0.5, 0.8,    0, 0, -1,

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
    20, 21, 22,    20, 22, 23,
    24, 25, 26,    24, 26, 27,
    28, 29, 30,    28, 30, 31,
    32, 33, 34,    32, 34, 35,
    36, 37, 38,    36, 38, 39,
    40, 41, 42,    40, 42, 43,
    44, 45, 46,    44, 46, 47,
];

const vertexCube = [
  //front
  0.5, 0.5, 0.5,         0, 1, 0.8,     0, 0, 1,
  0.5, -0.5, 0.5,         0, 1, 0.8,     0, 0, 1,
  -0.5, -0.5, 0.5,         0, 1, 0.8,    0, 0, 1,
  -0.5, 0.5, 0.5,         0, 1, 0.8,    0, 0, 1,

  //Back
  0.5, 0.5, -0.5,         0.8, 1, 0.8,   0, 0, -1,
  0.5, -0.5, -0.5,         0.8, 1, 0.8,   0, 0, -1,
  -0.5, -0.5, -0.5,         0.8, 1, 0.8,  0, 0, -1,
  -0.5, 0.5, -0.5,         0.8, 1, 0.8,   0, 0, -1,

  //left
  -0.5, 0.5, 0.5,         0, 1, 0.8,      -1, 0, 0,
  -0.5, -0.5, 0.5,         0, 1, 0.8,     -1, 0, 0,
  -0.5, -0.5, -0.5,         0.8, 1, 0.8,  -1, 0, 0,
  -0.5, 0.5, -0.5,         0.8, 1, 0.8,   -1, 0, 0,

  //right
  0.5, -0.5, 0.5,         0, 1, 0.8,      1, 0, 0,
  0.5, 0.5, 0.5,         0, 1, 0.8,       1, 0, 0,
  0.5, 0.5, -0.5,         0.8, 1, 0.8,    1, 0, 0,
  0.5, -0.5, -0.5,         0.8, 1, 0.8,   1, 0, 0,

  //top
  0.5, 0.5, 0.5,         0, 1, 0.8,       0, 1, 0,
  -0.5, 0.5, 0.5,         0, 1, 0.8,      0, 1, 0,
  -0.5, 0.5, -0.5,         0.8, 1, 0.8,   0, 1, 0,
  0.5, 0.5, -0.5,         0.8, 1, 0.8,    0, 1, 0,
  
  //bottom
  0.5, -0.5, 0.5,         0, 1, 0.8,      0, -1, 0,
  -0.5, -0.5, 0.5,         0, 1, 0.8,     0, -1, 0,
  -0.5, -0.5, -0.5,         0.8, 1, 0.8,  0, -1, 0,
  0.5, -0.5, -0.5,         0.8, 1, 0.8,   0, -1, 0,
];

const indicesCube = [
  0,  1,  2,     0,  2,  3,

  4,  5,  6,     4,  6,  7,

  8,  9,  10,    8,  10, 11,

  12, 13, 14,    12, 14, 15,

  16, 17, 18,    16, 18, 19,

  20, 21, 22,    20, 22, 23,
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
    {
        vertices: vertex91,
        indices: indices91,
        length: indices91.length,
        type: gl.LINE_LOOP,
    },
    {
      vertices: vertexCube,
      indices: indicesCube,
      length: indicesCube.length,
      type: gl.TRIANGLES,
    },
  ];

const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, `
precision mediump float;

attribute vec3 position;
attribute vec3 color;
attribute vec3 normal;

varying vec3 vColor;
varying vec3 vNormal;
varying vec3 vPosition;

uniform mat4 mWorld;
uniform mat4 mView;
uniform mat4 mProj;

void main() {
    vColor = color;
    // gl_Position = matrix * vec4(position, 1);
    gl_Position = mProj * mView * mWorld * vec4(position, 1);
    vPosition = (mWorld * vec4(position, 1.0)).xyz;
    vNormal = normal;
}
`);
gl.compileShader(vertexShader);

const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, `
precision mediump float;

varying vec3 vColor;
// uniform vec3 uAmbientConstant;
uniform float uAmbientIntensity;
uniform vec3 uLightConstant;
varying vec3 vNormal;
// uniform vec3 uLightDirection;
varying vec3 vPosition;
uniform vec3 uLightPosition;

uniform mat3 uNormalModel;

void main() {
    // vec3 ambient = uAmbientConstant * uAmbientIntensity;
    // vec3 phong = ambient;
    vec3 ambient = uLightConstant * uAmbientIntensity;
    // vec3 normalizedLight = normalize(-uLightDirection);
    vec3 lightRay = vPosition - uLightPosition;
    vec3 normalizedLight = normalize(-lightRay);
    vec3 normalizedNormal = normalize(uNormalModel * vNormal);
    float cosTheta = dot(normalizedNormal, normalizedLight);
    vec3 diffuse = vec3(0.0, 0.0, 0.0);
    if (cosTheta > 0.0) {
        float diffuseIntensity = cosTheta;
        diffuse = uLightConstant * diffuseIntensity;
    }
    vec3 phong = ambient + diffuse;
    gl_FragColor = vec4(phong * vColor, 1);
    // gl_FragColor = vec4(vColor, 1);
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
var moveZ = 0;
var moveX = 0;
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
glMatrix.mat4.perspective(perspective, Math.PI/2.4, 1, 0.5, 50.0);

const draw = (vertices, indices, start=0, end, type=gl.LINE_LOOP) =>{ 
  const buffer = gl.createBuffer();
  const indexBuffer = gl.createBuffer();

  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
  var aPosition = gl.getAttribLocation(program, 'position');
  var aColor = gl.getAttribLocation(program, 'color');
  var aNormal = gl.getAttribLocation(program, 'normal');

  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 
    9 * Float32Array.BYTES_PER_ELEMENT, 
    0 * Float32Array.BYTES_PER_ELEMENT
  );
  gl.enableVertexAttribArray(aPosition);

    
    gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 
      9 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT 
      );
    gl.enableVertexAttribArray(aColor);

    gl.vertexAttribPointer(aNormal, 3, gl.FLOAT, false, 
      9 * Float32Array.BYTES_PER_ELEMENT, 
      6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aNormal);

  // Pencahayaan
  // var uAmbientConstant = gl.getUniformLocation(program, 'uAmbientConstant');
  var uLightConstant = gl.getUniformLocation(program, 'uLightConstant');
  var uAmbientIntensity = gl.getUniformLocation(program, 'uAmbientIntensity');
  // gl.uniform3fv(uAmbientConstant, [0.8, 1, 0.8]);
  gl.uniform3fv(uLightConstant, [0.8, 1, 0.8]);
  gl.uniform1f(uAmbientIntensity, 0.391);
  // var uLightDirection = gl.getUniformLocation(program, "uLightDirection");
  //   gl.uniform3fv(uLightDirection, [0, 0, -2.0]);
    var uLightPosition = gl.getUniformLocation(program, "uLightPosition");
    gl.uniform3fv(uLightPosition, [2.0, 0.0, 2.0]);
    
    gl.drawElements(type, indices.length, gl.UNSIGNED_SHORT, 0);
}

gl.linkProgram(program);
gl.useProgram(program);
gl.enable(gl.DEPTH_TEST);

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

      var uNormalModel = gl.getUniformLocation(program, "uNormalModel");
      var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

      draw(objects[0].vertices, objects[0].indices, 0, objects[0].length, objects[0].type);
      draw(objects[4].vertices, objects[4].indices, 0, objects[4].length, objects[4].type);
    }
  
  // const animate1 = () =>{
  //   var model = glMatrix.mat4.create();

  //   if (scaleDelta >= 2 || scaleDelta <= -0.5) {
  //     scaleSpeed = scaleSpeed * -1;
  //   }

  //   scaleDelta += scaleSpeed;

  //   glMatrix.mat4.translate(model, model, [0, 0, scaleDelta]);
    
  //   var mWorld = gl.getUniformLocation(program, "mWorld");
  //   var mView = gl.getUniformLocation(program, "mView");
  //   var mProj = gl.getUniformLocation(program, "mProj"); 

  //   gl.uniformMatrix4fv(mWorld,false, model);
  //   gl.uniformMatrix4fv(mView, false, view);
  //   gl.uniformMatrix4fv(mProj, false, perspective);

  //   draw(objects[1].vertices, objects[1].indices, 0, objects[1].length, objects[1].type);
  // }

  // const animateA = () =>{
  //   var model = glMatrix.mat4.create();

  //   glMatrix.mat4.rotateY(
  //     model, model, rotateY
  //   );

  //   var mWorld = gl.getUniformLocation(program, "mWorld");
  //   var mView = gl.getUniformLocation(program, "mView");
  //   var mProj = gl.getUniformLocation(program, "mProj"); 

  //   gl.uniformMatrix4fv(mWorld,false, model);
  //   gl.uniformMatrix4fv(mView, false, view);
  //   gl.uniformMatrix4fv(mProj, false, perspective);

  //   draw(objects[2].vertices, objects[2].indices, 0, objects[2].length, objects[2].type);
  // }

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

    var uNormalModel = gl.getUniformLocation(program, "uNormalModel");
    var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

    draw(objects[3].vertices, objects[3].indices, 0, objects[3].length, objects[3].type);
  }

  const animateCube = () =>{
    var model = glMatrix.mat4.create();

    glMatrix.mat4.translate(model, model, [moveX, 0.0, moveZ]);

    var mWorld = gl.getUniformLocation(program, "mWorld");
    var mView = gl.getUniformLocation(program, "mView");
    var mProj = gl.getUniformLocation(program, "mProj");

    gl.uniformMatrix4fv(mWorld,false, model);
    gl.uniformMatrix4fv(mView, false, view);
    gl.uniformMatrix4fv(mProj, false, perspective);

    var uNormalModel = gl.getUniformLocation(program, "uNormalModel");
    var normalModel = glMatrix.mat3.create();
        glMatrix.mat3.normalFromMat4(normalModel, model);
        gl.uniformMatrix3fv(uNormalModel, false, normalModel);

    draw(objects[5].vertices, objects[5].indices, 0, objects[5].length, objects[5].type);
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

    if (event.keyCode == 73) { // i / arrow kiri
      moveZ -= 0.2;
    } else if (event.keyCode == 75) { // k / arrow kanan
      moveZ += 0.2;
    }

    if (event.keyCode == 74) { // j / arrow kiri
      moveX -= 0.2;
    } else if (event.keyCode == 76) { // l / arrow kanan
      moveX += 0.2;
    }
  }
  document.addEventListener("keydown", onKeydown);

  const render = () => {  
    gl.clearColor(0.02, 0.27, 0.37, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);  

    animate9();
    // animate1();
    // animateA();
    animateT();
    animateCube();
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);