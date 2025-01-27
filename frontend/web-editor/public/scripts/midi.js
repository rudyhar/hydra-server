
/// Remove startup Popup

console.log("LOADDDED AF")

// Find the div with the ID "modal"
const modalDiv = document.getElementById('modal');

// Check if the div exists
if (modalDiv) {
  // Remove the div from its parent node
  modalDiv.parentNode.removeChild(modalDiv);
  console.log('Div with ID "modal" has been removed.');
} else {
  console.log('No div with ID "modal" found.');
}


/// make the code invisible

// Find the div with the class "codeMirror"
const codeMirrorDiv = document.querySelector('.codeMirror');

// Check if the div exists
if (codeMirrorDiv) {
  // Modify the style directly to set opacity to 0
  codeMirrorDiv.style.transition = 'opacity 1s'; // Update or set the transition
  codeMirrorDiv.style.opacity = '0';            // Set the opacity to 0

  console.log('Updated style:', codeMirrorDiv.style.cssText);
} else {
  console.log('No div with class "codeMirror" found.');
}


/// Hide curser

document.body.style.cursor = 'none';
console.log('Cursor is now hidden.'); 


// register WebMIDI
navigator.requestMIDIAccess()
    .then(onMIDISuccess, onMIDIFailure);

function onMIDISuccess(midiAccess) {
    console.log(midiAccess);
    var inputs = midiAccess.inputs;
    var outputs = midiAccess.outputs;
    for (var input of midiAccess.inputs.values()){
        input.onmidimessage = getMIDIMessage;
    }
}

function onMIDIFailure() {
    console.log('Could not access your MIDI devices.');
}

//create an array to hold our cc values and init to a normalized value
var cc=Array(128).fill(0.5)

getMIDIMessage = function(midiMessage) {
    var arr = midiMessage.data    
    var index = arr[1]
    //console.log('Midi received on cc#' + index + ' value:' + arr[2])    // uncomment to monitor incoming Midi
    var val = (arr[2]+1)/128.0  // normalize CC values to 0.0 - 1.0
    cc[index]=val
}