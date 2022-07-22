orejaizqX=0;
orejaizqY=0;
orejaderX=0;
orejaderY=0;
narizX=0;
narizY=0;
lenguaX=0;
lenguaY=0;




function preload(){
nariz = loadImage('nariz.png');
orejader = loadImage('orejader.png');
orejaizq = loadImage('orejaizq.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video,0,0,300,300);
    image(nariz,narizX,narizY,30,30);
    image(orejaizq,orejaizqX,orejaizqY,50,50);
    image(orejader,orejaderX,orejaderY,50,50);
}

function take_snapshot(){
    save('myDogFilterImage.png');
}
function modelLoaded(){
    console.log('PoseNet esta inicializado');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        orejaderX=results[0].pose.leftEar.x-25;
        orejaderY=results[0].pose.leftEar.y-95;
        orejaizqX=results[0].pose.rightEar.x - 22;
        orejaizqY=results[0].pose.rightEar.y-92;
        narizX=results[0].pose.nose.x - 13;
        narizY=results[0].pose.nose.y - 6;

        console.log("nose x = "+ results[0].pose.nose.x);
        console.log("nose y = "+ results[0].pose.nose.y);
        console.log("orejader x = "+ results[0].pose.leftEar.x);
        console.log("orejader y = "+ results[0].pose.leftEar.y);
        console.log("orejaizq x = "+ results[0].pose.rightEar.x);
        console.log("orejaizq y = "+ results[0].pose.rightEar.y);       
    }
}