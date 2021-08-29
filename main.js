var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    Recognition.start();
}
Recognition.onresult = function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = content;
    console.log(content);
    if(content == "take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    //Setting up of Camera
    Webcam.attach(camera);
    setTimeout(function(){
        take_snapshot();
        save();
    },5000); 
}
//Settin up of Camera
camera = document.getElementById("camera");
Webcam.set({
    width: 360, height: 240, image_format:"jpeg",jpeg_quality:90
});
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id = "selfie_img" src = " '+data_uri+'"/>';
    });
}
function save(){
    var link = document.getElementById("link");
    image = document.getElementById("selfie_img").src;
    link.href = image;
    link.click();
}