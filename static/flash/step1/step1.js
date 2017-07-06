(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 750,
	height: 1334,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/动画3序列_00000.jpg", id:"动画3序列_00000"},
		{src:"images/动画3序列_00001.jpg", id:"动画3序列_00001"},
		{src:"images/动画3序列_00002.jpg", id:"动画3序列_00002"},
		{src:"images/动画3序列_00003.jpg", id:"动画3序列_00003"},
		{src:"images/动画3序列_00004.jpg", id:"动画3序列_00004"},
		{src:"images/动画3序列_00005.jpg", id:"动画3序列_00005"},
		{src:"images/动画3序列_00006.jpg", id:"动画3序列_00006"},
		{src:"images/动画3序列_00007.jpg", id:"动画3序列_00007"},
		{src:"images/动画3序列_00008.jpg", id:"动画3序列_00008"},
		{src:"images/动画3序列_00009.jpg", id:"动画3序列_00009"},
		{src:"images/动画3序列_00010.jpg", id:"动画3序列_00010"},
		{src:"images/动画3序列_00011.jpg", id:"动画3序列_00011"},
		{src:"images/动画3序列_00012.jpg", id:"动画3序列_00012"},
		{src:"images/动画3序列_00013.jpg", id:"动画3序列_00013"},
		{src:"images/动画3序列_00014.jpg", id:"动画3序列_00014"},
		{src:"images/动画3序列_00015.jpg", id:"动画3序列_00015"},
		{src:"images/动画3序列_00016.jpg", id:"动画3序列_00016"},
		{src:"images/动画3序列_00017.jpg", id:"动画3序列_00017"},
		{src:"images/动画3序列_00018.jpg", id:"动画3序列_00018"},
		{src:"images/动画3序列_00019.jpg", id:"动画3序列_00019"},
		{src:"images/动画3序列_00020.jpg", id:"动画3序列_00020"},
		{src:"images/动画3序列_00021.jpg", id:"动画3序列_00021"},
		{src:"images/动画3序列_00022.jpg", id:"动画3序列_00022"},
		{src:"images/动画3序列_00023.jpg", id:"动画3序列_00023"},
		{src:"images/动画3序列_00024.jpg", id:"动画3序列_00024"},
		{src:"images/动画3序列_00025.jpg", id:"动画3序列_00025"},
		{src:"images/动画3序列_00026.jpg", id:"动画3序列_00026"},
		{src:"images/动画3序列_00027.jpg", id:"动画3序列_00027"},
		{src:"images/动画3序列_00028.jpg", id:"动画3序列_00028"},
		{src:"images/动画3序列_00029.jpg", id:"动画3序列_00029"},
		{src:"images/动画3序列_00030.jpg", id:"动画3序列_00030"},
		{src:"images/动画3序列_00031.jpg", id:"动画3序列_00031"},
		{src:"images/动画3序列_00032.jpg", id:"动画3序列_00032"},
		{src:"images/动画3序列_00033.jpg", id:"动画3序列_00033"},
		{src:"images/动画3序列_00034.jpg", id:"动画3序列_00034"},
		{src:"images/动画3序列_00035.jpg", id:"动画3序列_00035"},
		{src:"images/动画3序列_00036.jpg", id:"动画3序列_00036"},
		{src:"images/动画3序列_00037.jpg", id:"动画3序列_00037"},
		{src:"images/动画3序列_00038.jpg", id:"动画3序列_00038"},
		{src:"images/动画3序列_00039.jpg", id:"动画3序列_00039"},
		{src:"images/动画3序列_00040.jpg", id:"动画3序列_00040"},
		{src:"images/动画3序列_00041.jpg", id:"动画3序列_00041"},
		{src:"images/动画3序列_00042.jpg", id:"动画3序列_00042"},
		{src:"images/动画3序列_00043.jpg", id:"动画3序列_00043"},
		{src:"images/动画3序列_00044.jpg", id:"动画3序列_00044"},
		{src:"images/动画3序列_00045.jpg", id:"动画3序列_00045"},
		{src:"images/动画3序列_00046.jpg", id:"动画3序列_00046"},
		{src:"images/动画3序列_00047.jpg", id:"动画3序列_00047"},
		{src:"images/动画3序列_00048.jpg", id:"动画3序列_00048"},
		{src:"images/动画3序列_00049.jpg", id:"动画3序列_00049"},
		{src:"images/动画3序列_00050.jpg", id:"动画3序列_00050"},
		{src:"images/动画3序列_00051.jpg", id:"动画3序列_00051"},
		{src:"images/动画3序列_00052.jpg", id:"动画3序列_00052"},
		{src:"images/动画3序列_00053.jpg", id:"动画3序列_00053"},
		{src:"images/动画3序列_00054.jpg", id:"动画3序列_00054"},
		{src:"images/动画3序列_00055.jpg", id:"动画3序列_00055"},
		{src:"images/动画3序列_00056.jpg", id:"动画3序列_00056"},
		{src:"images/动画3序列_00057.jpg", id:"动画3序列_00057"},
		{src:"images/动画3序列_00058.jpg", id:"动画3序列_00058"},
		{src:"images/动画3序列_00059.jpg", id:"动画3序列_00059"},
		{src:"images/动画3序列_00060.jpg", id:"动画3序列_00060"},
		{src:"images/动画3序列_00061.jpg", id:"动画3序列_00061"},
		{src:"images/动画3序列_00062.jpg", id:"动画3序列_00062"},
		{src:"images/动画3序列_00063.jpg", id:"动画3序列_00063"},
		{src:"images/动画3序列_00064.jpg", id:"动画3序列_00064"},
		{src:"images/动画3序列_00065.jpg", id:"动画3序列_00065"},
		{src:"images/动画3序列_00066.jpg", id:"动画3序列_00066"},
		{src:"images/动画3序列_00067.jpg", id:"动画3序列_00067"},
		{src:"images/动画3序列_00068.jpg", id:"动画3序列_00068"},
		{src:"images/动画3序列_00069.jpg", id:"动画3序列_00069"},
		{src:"images/动画3序列_00070.jpg", id:"动画3序列_00070"},
		{src:"images/动画3序列_00071.jpg", id:"动画3序列_00071"},
		{src:"images/动画3序列_00072.jpg", id:"动画3序列_00072"},
		{src:"images/动画3序列_00073.jpg", id:"动画3序列_00073"},
		{src:"images/动画3序列_00074.jpg", id:"动画3序列_00074"},
		{src:"images/动画3序列_00075.jpg", id:"动画3序列_00075"},
		{src:"images/动画3序列_00076.jpg", id:"动画3序列_00076"},
		{src:"images/动画3序列_00077.jpg", id:"动画3序列_00077"},
		{src:"images/动画3序列_00078.jpg", id:"动画3序列_00078"},
		{src:"images/动画3序列_00079.jpg", id:"动画3序列_00079"},
		{src:"images/动画3序列_00080.jpg", id:"动画3序列_00080"},
		{src:"images/动画3序列_00081.jpg", id:"动画3序列_00081"},
		{src:"images/动画3序列_00082.jpg", id:"动画3序列_00082"},
		{src:"images/动画3序列_00083.jpg", id:"动画3序列_00083"},
		{src:"images/动画3序列_00084.jpg", id:"动画3序列_00084"},
		{src:"images/动画3序列_00085.jpg", id:"动画3序列_00085"},
		{src:"images/动画3序列_00086.jpg", id:"动画3序列_00086"},
		{src:"images/动画3序列_00087.jpg", id:"动画3序列_00087"},
		{src:"images/动画3序列_00088.jpg", id:"动画3序列_00088"},
		{src:"images/动画3序列_00089.jpg", id:"动画3序列_00089"},
		{src:"images/动画3序列_00090.jpg", id:"动画3序列_00090"},
		{src:"images/动画3序列_00091.jpg", id:"动画3序列_00091"},
		{src:"images/动画3序列_00092.jpg", id:"动画3序列_00092"},
		{src:"images/动画3序列_00093.jpg", id:"动画3序列_00093"},
		{src:"images/动画3序列_00094.jpg", id:"动画3序列_00094"},
		{src:"images/动画3序列_00095.jpg", id:"动画3序列_00095"},
		{src:"images/动画3序列_00096.jpg", id:"动画3序列_00096"},
		{src:"images/动画3序列_00097.jpg", id:"动画3序列_00097"},
		{src:"images/动画3序列_00098.jpg", id:"动画3序列_00098"}
	]
};



// symbols:



(lib.动画3序列_00000 = function() {
	this.initialize(img.动画3序列_00000);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00001 = function() {
	this.initialize(img.动画3序列_00001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00002 = function() {
	this.initialize(img.动画3序列_00002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00003 = function() {
	this.initialize(img.动画3序列_00003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00004 = function() {
	this.initialize(img.动画3序列_00004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00005 = function() {
	this.initialize(img.动画3序列_00005);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00006 = function() {
	this.initialize(img.动画3序列_00006);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00007 = function() {
	this.initialize(img.动画3序列_00007);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00008 = function() {
	this.initialize(img.动画3序列_00008);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00009 = function() {
	this.initialize(img.动画3序列_00009);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00010 = function() {
	this.initialize(img.动画3序列_00010);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00011 = function() {
	this.initialize(img.动画3序列_00011);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00012 = function() {
	this.initialize(img.动画3序列_00012);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00013 = function() {
	this.initialize(img.动画3序列_00013);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00014 = function() {
	this.initialize(img.动画3序列_00014);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00015 = function() {
	this.initialize(img.动画3序列_00015);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00016 = function() {
	this.initialize(img.动画3序列_00016);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00017 = function() {
	this.initialize(img.动画3序列_00017);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00018 = function() {
	this.initialize(img.动画3序列_00018);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00019 = function() {
	this.initialize(img.动画3序列_00019);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00020 = function() {
	this.initialize(img.动画3序列_00020);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00021 = function() {
	this.initialize(img.动画3序列_00021);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00022 = function() {
	this.initialize(img.动画3序列_00022);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00023 = function() {
	this.initialize(img.动画3序列_00023);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00024 = function() {
	this.initialize(img.动画3序列_00024);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00025 = function() {
	this.initialize(img.动画3序列_00025);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00026 = function() {
	this.initialize(img.动画3序列_00026);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00027 = function() {
	this.initialize(img.动画3序列_00027);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00028 = function() {
	this.initialize(img.动画3序列_00028);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00029 = function() {
	this.initialize(img.动画3序列_00029);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00030 = function() {
	this.initialize(img.动画3序列_00030);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00031 = function() {
	this.initialize(img.动画3序列_00031);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00032 = function() {
	this.initialize(img.动画3序列_00032);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00033 = function() {
	this.initialize(img.动画3序列_00033);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00034 = function() {
	this.initialize(img.动画3序列_00034);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00035 = function() {
	this.initialize(img.动画3序列_00035);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00036 = function() {
	this.initialize(img.动画3序列_00036);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00037 = function() {
	this.initialize(img.动画3序列_00037);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00038 = function() {
	this.initialize(img.动画3序列_00038);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00039 = function() {
	this.initialize(img.动画3序列_00039);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00040 = function() {
	this.initialize(img.动画3序列_00040);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00041 = function() {
	this.initialize(img.动画3序列_00041);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00042 = function() {
	this.initialize(img.动画3序列_00042);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00043 = function() {
	this.initialize(img.动画3序列_00043);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00044 = function() {
	this.initialize(img.动画3序列_00044);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00045 = function() {
	this.initialize(img.动画3序列_00045);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00046 = function() {
	this.initialize(img.动画3序列_00046);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00047 = function() {
	this.initialize(img.动画3序列_00047);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00048 = function() {
	this.initialize(img.动画3序列_00048);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00049 = function() {
	this.initialize(img.动画3序列_00049);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00050 = function() {
	this.initialize(img.动画3序列_00050);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00051 = function() {
	this.initialize(img.动画3序列_00051);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00052 = function() {
	this.initialize(img.动画3序列_00052);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00053 = function() {
	this.initialize(img.动画3序列_00053);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00054 = function() {
	this.initialize(img.动画3序列_00054);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00055 = function() {
	this.initialize(img.动画3序列_00055);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00056 = function() {
	this.initialize(img.动画3序列_00056);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00057 = function() {
	this.initialize(img.动画3序列_00057);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00058 = function() {
	this.initialize(img.动画3序列_00058);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00059 = function() {
	this.initialize(img.动画3序列_00059);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00060 = function() {
	this.initialize(img.动画3序列_00060);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00061 = function() {
	this.initialize(img.动画3序列_00061);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00062 = function() {
	this.initialize(img.动画3序列_00062);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00063 = function() {
	this.initialize(img.动画3序列_00063);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00064 = function() {
	this.initialize(img.动画3序列_00064);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00065 = function() {
	this.initialize(img.动画3序列_00065);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00066 = function() {
	this.initialize(img.动画3序列_00066);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00067 = function() {
	this.initialize(img.动画3序列_00067);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00068 = function() {
	this.initialize(img.动画3序列_00068);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00069 = function() {
	this.initialize(img.动画3序列_00069);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00070 = function() {
	this.initialize(img.动画3序列_00070);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00071 = function() {
	this.initialize(img.动画3序列_00071);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00072 = function() {
	this.initialize(img.动画3序列_00072);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00073 = function() {
	this.initialize(img.动画3序列_00073);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00074 = function() {
	this.initialize(img.动画3序列_00074);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00075 = function() {
	this.initialize(img.动画3序列_00075);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00076 = function() {
	this.initialize(img.动画3序列_00076);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00077 = function() {
	this.initialize(img.动画3序列_00077);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00078 = function() {
	this.initialize(img.动画3序列_00078);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00079 = function() {
	this.initialize(img.动画3序列_00079);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00080 = function() {
	this.initialize(img.动画3序列_00080);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00081 = function() {
	this.initialize(img.动画3序列_00081);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00082 = function() {
	this.initialize(img.动画3序列_00082);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00083 = function() {
	this.initialize(img.动画3序列_00083);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00084 = function() {
	this.initialize(img.动画3序列_00084);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00085 = function() {
	this.initialize(img.动画3序列_00085);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00086 = function() {
	this.initialize(img.动画3序列_00086);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00087 = function() {
	this.initialize(img.动画3序列_00087);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00088 = function() {
	this.initialize(img.动画3序列_00088);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00089 = function() {
	this.initialize(img.动画3序列_00089);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00090 = function() {
	this.initialize(img.动画3序列_00090);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00091 = function() {
	this.initialize(img.动画3序列_00091);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00092 = function() {
	this.initialize(img.动画3序列_00092);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00093 = function() {
	this.initialize(img.动画3序列_00093);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00094 = function() {
	this.initialize(img.动画3序列_00094);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00095 = function() {
	this.initialize(img.动画3序列_00095);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00096 = function() {
	this.initialize(img.动画3序列_00096);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00097 = function() {
	this.initialize(img.动画3序列_00097);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.动画3序列_00098 = function() {
	this.initialize(img.动画3序列_00098);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(99));

	// 图层 1
	this.instance = new lib.动画3序列_00000();

	this.instance_1 = new lib.动画3序列_00001();

	this.instance_2 = new lib.动画3序列_00002();

	this.instance_3 = new lib.动画3序列_00003();

	this.instance_4 = new lib.动画3序列_00004();

	this.instance_5 = new lib.动画3序列_00005();

	this.instance_6 = new lib.动画3序列_00006();

	this.instance_7 = new lib.动画3序列_00007();

	this.instance_8 = new lib.动画3序列_00008();

	this.instance_9 = new lib.动画3序列_00009();

	this.instance_10 = new lib.动画3序列_00010();

	this.instance_11 = new lib.动画3序列_00011();

	this.instance_12 = new lib.动画3序列_00012();

	this.instance_13 = new lib.动画3序列_00013();

	this.instance_14 = new lib.动画3序列_00014();

	this.instance_15 = new lib.动画3序列_00015();

	this.instance_16 = new lib.动画3序列_00016();

	this.instance_17 = new lib.动画3序列_00017();

	this.instance_18 = new lib.动画3序列_00018();

	this.instance_19 = new lib.动画3序列_00019();

	this.instance_20 = new lib.动画3序列_00020();

	this.instance_21 = new lib.动画3序列_00021();

	this.instance_22 = new lib.动画3序列_00022();

	this.instance_23 = new lib.动画3序列_00023();

	this.instance_24 = new lib.动画3序列_00024();

	this.instance_25 = new lib.动画3序列_00025();

	this.instance_26 = new lib.动画3序列_00026();

	this.instance_27 = new lib.动画3序列_00027();

	this.instance_28 = new lib.动画3序列_00028();

	this.instance_29 = new lib.动画3序列_00029();

	this.instance_30 = new lib.动画3序列_00030();

	this.instance_31 = new lib.动画3序列_00031();

	this.instance_32 = new lib.动画3序列_00032();

	this.instance_33 = new lib.动画3序列_00033();

	this.instance_34 = new lib.动画3序列_00034();

	this.instance_35 = new lib.动画3序列_00035();

	this.instance_36 = new lib.动画3序列_00036();

	this.instance_37 = new lib.动画3序列_00037();

	this.instance_38 = new lib.动画3序列_00038();

	this.instance_39 = new lib.动画3序列_00039();

	this.instance_40 = new lib.动画3序列_00040();

	this.instance_41 = new lib.动画3序列_00041();

	this.instance_42 = new lib.动画3序列_00042();

	this.instance_43 = new lib.动画3序列_00043();

	this.instance_44 = new lib.动画3序列_00044();

	this.instance_45 = new lib.动画3序列_00045();

	this.instance_46 = new lib.动画3序列_00046();

	this.instance_47 = new lib.动画3序列_00047();

	this.instance_48 = new lib.动画3序列_00048();

	this.instance_49 = new lib.动画3序列_00049();

	this.instance_50 = new lib.动画3序列_00050();

	this.instance_51 = new lib.动画3序列_00051();

	this.instance_52 = new lib.动画3序列_00052();

	this.instance_53 = new lib.动画3序列_00053();

	this.instance_54 = new lib.动画3序列_00054();

	this.instance_55 = new lib.动画3序列_00055();

	this.instance_56 = new lib.动画3序列_00056();

	this.instance_57 = new lib.动画3序列_00057();

	this.instance_58 = new lib.动画3序列_00058();

	this.instance_59 = new lib.动画3序列_00059();

	this.instance_60 = new lib.动画3序列_00060();

	this.instance_61 = new lib.动画3序列_00061();

	this.instance_62 = new lib.动画3序列_00062();

	this.instance_63 = new lib.动画3序列_00063();

	this.instance_64 = new lib.动画3序列_00064();

	this.instance_65 = new lib.动画3序列_00065();

	this.instance_66 = new lib.动画3序列_00066();

	this.instance_67 = new lib.动画3序列_00067();

	this.instance_68 = new lib.动画3序列_00068();

	this.instance_69 = new lib.动画3序列_00069();

	this.instance_70 = new lib.动画3序列_00070();

	this.instance_71 = new lib.动画3序列_00071();

	this.instance_72 = new lib.动画3序列_00072();

	this.instance_73 = new lib.动画3序列_00073();

	this.instance_74 = new lib.动画3序列_00074();

	this.instance_75 = new lib.动画3序列_00075();

	this.instance_76 = new lib.动画3序列_00076();

	this.instance_77 = new lib.动画3序列_00077();

	this.instance_78 = new lib.动画3序列_00078();

	this.instance_79 = new lib.动画3序列_00079();

	this.instance_80 = new lib.动画3序列_00080();

	this.instance_81 = new lib.动画3序列_00081();

	this.instance_82 = new lib.动画3序列_00082();

	this.instance_83 = new lib.动画3序列_00083();

	this.instance_84 = new lib.动画3序列_00084();

	this.instance_85 = new lib.动画3序列_00085();

	this.instance_86 = new lib.动画3序列_00086();

	this.instance_87 = new lib.动画3序列_00087();

	this.instance_88 = new lib.动画3序列_00088();

	this.instance_89 = new lib.动画3序列_00089();

	this.instance_90 = new lib.动画3序列_00090();

	this.instance_91 = new lib.动画3序列_00091();

	this.instance_92 = new lib.动画3序列_00092();

	this.instance_93 = new lib.动画3序列_00093();

	this.instance_94 = new lib.动画3序列_00094();

	this.instance_95 = new lib.动画3序列_00095();

	this.instance_96 = new lib.动画3序列_00096();

	this.instance_97 = new lib.动画3序列_00097();

	this.instance_98 = new lib.动画3序列_00098();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,750,1334);


// stage content:
(lib.step1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.元件1();
	this.instance.setTransform(18.5,58,1,1,0,0,0,18.5,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(375,667,750,1334);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;