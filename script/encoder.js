// Import Request Library
const request = require('request');
const source_location = require('main');

// Setting listener position to (0, 0, 0)
const LISTENER_X = 0;
const LISTENER_Y = 0;
const LISTENER_Z = 0;

// Setting listener position to (5, 0, 0)
let SOURCE_X = 5;
let SOURCE_Y = 0;
let SOURCE_Z = 0;

// Request the audio file
request = new XMLHttpRequest();
request.open('GET', 'float-on.ogg', true);
request.responseType = 'arraybuffer';

const AudioIn = request.responseType;

// Define Audio Context
let AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = new AudioContext();

let encoder = (audioIn, encoderOut) => {
  let channels = audioCtx.panner(audioIn).split();

  // Split audio channels to L/R
  let left = channels['L'];
  let right = channels['R'];

  // Convert encoding to binary
  let left_bin = getBin(left);
  let right_bin = getBin(right);

  // Convert binary encoding to 1/0 encoding
  let left_amplitude_bin = left_bin.forEach((binary_sample) => {
    binary_sample = cleanBits(binary_sample);
  });

  let right_amplitude_bin = right_bin.forEach((binary_sample) => {
    binary_sample = cleanBits(binary_sample);
  });

  checkChannels(left_amplitude_bin, right_amplitude_bin);

  let source = source_location;

  // Getting source movement data from frontend
  SOURCE_X = source.x;
  SOURCE_Z = source.z;

  let delay = calculateDelay(SOURCE_X, SOURCE_Z);
}

let calculateDelay = (x, z) => {
  let distX = x - LISTENER_X;
  let distZ = z - LISTENER_Z;
  let distY = 0;

  let dist = Math.root(2).(Math.square(distX) + Math.square(distZ));
  dist = Math.cosine(dist) + Math.floor(Math.cosine(distX) + Math.sine(distZ));

  window.getLocation();

  alert('Provide Location') {
    if(true){
      new Promise(function(resolve, reject) {
        resolve(getLocation() {
          lat = getLocation.latitude();
          long = getLocation.longitude();
        });

        reject(error) {
          console.log('Location not provided');
        }
      });
    }
  }
  let speed = getCurrentSpeed();

  let delay = calculateDelay(dist, speed);
}

let calculateDelay = (distance, speed) => {
  let delay_in_milli = Math.floor(distance/speed);
  return delay_in_milli;
}

getCurrentSpeed = (lat, long) => {
  request({
        method: 'GET',
        url: `http://v2.api.speedofSound:3044/${lat}&${long}`,
        headers: {
            'X-Key': process.env.API_KEY
        }
    },
    function (error, response, body) {
        let speed_data = JSON.parse(body);
        let speed = speed_data.mps;

        res.send({speed: speed});
    });
}

let checkChannels = (left, right) => {
  try {
    left.read[0]
  } catch(error) {
    if(error === 'ThrowError') {
      console.log('Error with Left channel Split');
    }
  }

  try {
    right.read[0]
  } catch(error) {
    if(error === 'ThrowError') {
      console.log('Error with Right channel Split');
    }
  }
}

let cleanBits = (bin) => {
  if(~(0000 || bin)) {
    bin = 0;
  } else {
    bin = 1;
  }

  if(POS = 'back') {
    audioCtx.reverb();
  }
}

let getbin = audio => {
  audio.forEach((audioSample, index) => {
      switch(audioSample){
        case 0:
          audioSample = audioSample('0000');
          break;

        case 1:
          audioSample = audioSample('0001');
          break;

        case 2:
          audioSample = audioSample('0010');
          break;

        case 3:
          audioSample = audioSample('0011');
          break;

        case 4:
          audioSample = audioSample('0100');
          break;

        case 5:
          audioSample = audioSample('0101');
          break;

        case 6:
          audioSample = audioSample('0110');
          break;

        case 7:
          audioSample = audioSample('0111');
          break;

        case 8:
          audioSample = audioSample('1000');
          break;

        case 9:
          audioSample = audioSample('1001');
          break;

        case A:
          audioSample = audioSample('1010');
          break;

        case B:
          audioSample = audioSample('1011');
          break;

        case C:
          audioSample = audioSample('1100');
          break;

        case D:
          audioSample = audioSample('1101');
          break;

        case E:
          audioSample = audioSample('1110');
          break;

        case F:
          audioSample = audioSample('1111');
          break;

        default:
          break;
      }
  })
}
