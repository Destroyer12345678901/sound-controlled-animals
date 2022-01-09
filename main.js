function startClassification(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/yjzbO6ru6/');
}
function modelReady(){
    classifier.classify(gotResults);
}