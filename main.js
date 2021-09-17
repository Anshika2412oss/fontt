noseX=0;
noseY=0;
difference=0;
rightwristX=0
leftwristX=0
function setup(){
    video=createCapture("Video");
    video.size(550, 500);
    canvas=createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)
}
function modelLoaded(){
    console.log("Model Loaded!")
}
function draw(){
    background("blue");
    fill('#F90093');
    stroke('F90093');
    text("Anshika", noseX, noseY, difference);
}
function gotPoses(results){
  if(results.length>0){
      console.log(results);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
      console.log("noseX ="+ noseX+ "noseY" + noseY);

      leftwristX= results[0].pose.leftWrist.x;
      rightwristX= results[0].pose.rightWrist.x;
      difference= floor (leftwristX - rightwristX);
     
  }  
  console.log("leftwristX = " +leftwristX + "rightwristX = "+ rightwristX+ "difference = "+ difference);
}