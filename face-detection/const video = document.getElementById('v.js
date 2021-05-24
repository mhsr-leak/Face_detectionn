const video = document.getElementById('video');
const canvas = document.getElementById('canvas');

Promise.all([
    face.api.nets.tinyFaceDetector.loadFromUri('/face-detection/models'),
])