/*************** 
 * Teste1 *
 ***************/

import { core, data, sound, util, visual, hardware } from './lib/psychojs-2024.1.5.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'teste1';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(trial_2RoutineBegin());
flowScheduler.add(trial_2RoutineEachFrame());
flowScheduler.add(trial_2RoutineEnd());
flowScheduler.add(trial_1RoutineBegin());
flowScheduler.add(trial_1RoutineEachFrame());
flowScheduler.add(trial_1RoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'ADULT_GERMAN_WAV_CUT', 'path': 'ADULT_GERMAN_WAV_CUT'},
    {'name': 'ADULT_AMERICANENGLISH_WAV_CUT', 'path': 'ADULT_AMERICANENGLISH_WAV_CUT'},
    {'name': 'CHI3_AMERICANENGLISH_4;09_WAV_CUT', 'path': 'CHI3_AMERICANENGLISH_4;09_WAV_CUT'},
    {'name': 'CHI4_BRAZILIAN_WAV_CUT', 'path': 'CHI4_BRAZILIAN_WAV_CUT'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.WARNING);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.1.5';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var trial_2Clock;
var sound_5;
var sound_6;
var sound_7;
var sound_8;
var text_7;
var button_3;
var button_4;
var text_8;
var text_9;
var text_10;
var text_11;
var text_12;
var trial_1Clock;
var sound_1;
var sound_2;
var sound_3;
var sound_4;
var text;
var button;
var button_2;
var text_2;
var text_3;
var text_4;
var text_5;
var text_6;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "trial_2"
  trial_2Clock = new util.Clock();
  sound_5 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_5.setVolume(1.0);
  sound_6 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_6.setVolume(1.0);
  sound_7 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_7.setVolume(1.0);
  sound_8 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_8.setVolume(1.0);
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Ouça os áudios a seguir e responda: qual é português do Brasil, o áudio 2 ou o 3?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  button_3 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_3',
    text: '2',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -5
  });
  button_3.clock = new util.Clock();
  
  button_4 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_4',
    text: '3',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -6
  });
  button_4.clock = new util.Clock();
  
  text_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_8',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_10',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_11 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_11',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  text_12 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_12',
    text: 'Faça a sua escolha:',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Initialize components for Routine "trial_1"
  trial_1Clock = new util.Clock();
  sound_1 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_1.setVolume(1.0);
  sound_2 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_2.setVolume(1.0);
  sound_3 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_3.setVolume(1.0);
  sound_4 = new sound.Sound({
      win: psychoJS.window,
      value: 'A',
      secs: (- 1),
      });
  sound_4.setVolume(1.0);
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Ouça os áudios a seguir e responda: qual é português do Brasil, o áudio 2 ou o 3?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -4.0 
  });
  
  button = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button',
    text: '2',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -5
  });
  button.clock = new util.Clock();
  
  button_2 = new visual.ButtonStim({
    win: psychoJS.window,
    name: 'button_2',
    text: '3',
    fillColor: 'darkgrey',
    borderColor: null,
    color: 'white',
    colorSpace: 'rgb',
    pos: [0, 0],
    letterHeight: 0.05,
    size: [0.5, 0.5],
    depth: -6
  });
  button_2.clock = new util.Clock();
  
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -7.0 
  });
  
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: '2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -8.0 
  });
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: '3',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -9.0 
  });
  
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: '4',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -10.0 
  });
  
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Faça a sua escolha:',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 1)], height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -11.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var trial_2Components;
function trial_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_2' ---
    t = 0;
    trial_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(125.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial_2.started', globalClock.getTime());
    sound_5.setValue('C:/Users/maria/Downloads/ADULT_GERMAN_WAV_CUT');
    sound_5.secs=20;
    sound_5.setVolume(1.0);
    sound_6.setValue('C:/Users/maria/Downloads/ADULT_AMERICANENGLISH_WAV_CUT');
    sound_6.secs=20;
    sound_6.setVolume(1.0);
    sound_7.setValue('CHI3_AMERICANENGLISH_4;09_WAV_CUT');
    sound_7.secs=20;
    sound_7.setVolume(1.0);
    sound_8.setValue('CHI4_BRAZILIAN_WAV_CUT');
    sound_8.secs=20;
    sound_8.setVolume(1.0);
    // reset button_3 to account for continued clicks & clear times on/off
    button_3.reset()
    // reset button_4 to account for continued clicks & clear times on/off
    button_4.reset()
    // keep track of which components have finished
    trial_2Components = [];
    trial_2Components.push(sound_5);
    trial_2Components.push(sound_6);
    trial_2Components.push(sound_7);
    trial_2Components.push(sound_8);
    trial_2Components.push(text_7);
    trial_2Components.push(button_3);
    trial_2Components.push(button_4);
    trial_2Components.push(text_8);
    trial_2Components.push(text_9);
    trial_2Components.push(text_10);
    trial_2Components.push(text_11);
    trial_2Components.push(text_12);
    
    for (const thisComponent of trial_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function trial_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_2' ---
    // get current time
    t = trial_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_5
    if (t >= 21 && sound_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_5.tStart = t;  // (not accounting for frame time here)
      sound_5.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_5.play(); });  // screen flip
      sound_5.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 21 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_5.tStart + 0.5) {
        sound_5.stop();  // stop the sound (if longer than duration)
        sound_5.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_6
    if (t >= 42 && sound_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_6.tStart = t;  // (not accounting for frame time here)
      sound_6.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_6.play(); });  // screen flip
      sound_6.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 42 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_6.tStart + 0.5) {
        sound_6.stop();  // stop the sound (if longer than duration)
        sound_6.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_7
    if (t >= 63 && sound_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_7.tStart = t;  // (not accounting for frame time here)
      sound_7.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_7.play(); });  // screen flip
      sound_7.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 63 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_7.tStart + 0.5) {
        sound_7.stop();  // stop the sound (if longer than duration)
        sound_7.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_8
    if (t >= 84 && sound_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_8.tStart = t;  // (not accounting for frame time here)
      sound_8.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_8.play(); });  // screen flip
      sound_8.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 84 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_8.tStart + 0.5) {
        sound_8.stop();  // stop the sound (if longer than duration)
        sound_8.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text_7* updates
    if (t >= 0.0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    
    // *button_3* updates
    if (t >= 105 && button_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_3.tStart = t;  // (not accounting for frame time here)
      button_3.frameNStart = frameN;  // exact frame index
      
      button_3.setAutoDraw(true);
    }
    
    frameRemains = 105 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_3.setAutoDraw(false);
    }
    
    if (button_3.status === PsychoJS.Status.STARTED) {
      // check whether button_3 has been pressed
      if (button_3.isClicked) {
        if (!button_3.wasClicked) {
          // store time of first click
          button_3.timesOn.push(button_3.clock.getTime());
          // store time clicked until
          button_3.timesOff.push(button_3.clock.getTime());
        } else {
          // update time clicked until;
          button_3.timesOff[button_3.timesOff.length - 1] = button_3.clock.getTime();
        }
        if (!button_3.wasClicked) {
          // end routine when button_3 is clicked
          continueRoutine = false;
          
        }
        // if button_3 is still clicked next frame, it is not a new click
        button_3.wasClicked = true;
      } else {
        // if button_3 is clicked next frame, it is a new click
        button_3.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_3 hasn't started / has finished
      button_3.clock.reset();
      // if button_3 is clicked next frame, it is a new click
      button_3.wasClicked = false;
    }
    
    // *button_4* updates
    if (t >= 105 && button_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_4.tStart = t;  // (not accounting for frame time here)
      button_4.frameNStart = frameN;  // exact frame index
      
      button_4.setAutoDraw(true);
    }
    
    frameRemains = 105 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_4.setAutoDraw(false);
    }
    
    if (button_4.status === PsychoJS.Status.STARTED) {
      // check whether button_4 has been pressed
      if (button_4.isClicked) {
        if (!button_4.wasClicked) {
          // store time of first click
          button_4.timesOn.push(button_4.clock.getTime());
          // store time clicked until
          button_4.timesOff.push(button_4.clock.getTime());
        } else {
          // update time clicked until;
          button_4.timesOff[button_4.timesOff.length - 1] = button_4.clock.getTime();
        }
        if (!button_4.wasClicked) {
          // end routine when button_4 is clicked
          continueRoutine = false;
          
        }
        // if button_4 is still clicked next frame, it is not a new click
        button_4.wasClicked = true;
      } else {
        // if button_4 is clicked next frame, it is a new click
        button_4.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_4 hasn't started / has finished
      button_4.clock.reset();
      // if button_4 is clicked next frame, it is a new click
      button_4.wasClicked = false;
    }
    
    // *text_8* updates
    if (t >= 20 && text_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_8.tStart = t;  // (not accounting for frame time here)
      text_8.frameNStart = frameN;  // exact frame index
      
      text_8.setAutoDraw(true);
    }
    
    frameRemains = 20 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_8.setAutoDraw(false);
    }
    
    
    // *text_9* updates
    if (t >= 42 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }
    
    frameRemains = 42 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_9.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_9.setAutoDraw(false);
    }
    
    
    // *text_10* updates
    if (t >= 63 && text_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_10.tStart = t;  // (not accounting for frame time here)
      text_10.frameNStart = frameN;  // exact frame index
      
      text_10.setAutoDraw(true);
    }
    
    frameRemains = 63 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_10.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_10.setAutoDraw(false);
    }
    
    
    // *text_11* updates
    if (t >= 84 && text_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_11.tStart = t;  // (not accounting for frame time here)
      text_11.frameNStart = frameN;  // exact frame index
      
      text_11.setAutoDraw(true);
    }
    
    frameRemains = 84 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_11.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_11.setAutoDraw(false);
    }
    
    
    // *text_12* updates
    if (t >= 105 && text_12.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_12.tStart = t;  // (not accounting for frame time here)
      text_12.frameNStart = frameN;  // exact frame index
      
      text_12.setAutoDraw(true);
    }
    
    frameRemains = 105 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_12.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_12.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_2' ---
    for (const thisComponent of trial_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_2.stopped', globalClock.getTime());
    sound_5.stop();  // ensure sound has stopped at end of Routine
    sound_6.stop();  // ensure sound has stopped at end of Routine
    sound_7.stop();  // ensure sound has stopped at end of Routine
    sound_8.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('button_3.numClicks', button_3.numClicks);
    psychoJS.experiment.addData('button_3.timesOn', button_3.timesOn);
    psychoJS.experiment.addData('button_3.timesOff', button_3.timesOff);
    psychoJS.experiment.addData('button_4.numClicks', button_4.numClicks);
    psychoJS.experiment.addData('button_4.timesOn', button_4.timesOn);
    psychoJS.experiment.addData('button_4.timesOff', button_4.timesOff);
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var trial_1Components;
function trial_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'trial_1' ---
    t = 0;
    trial_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(125.000000);
    // update component parameters for each repeat
    psychoJS.experiment.addData('trial_1.started', globalClock.getTime());
    sound_1.setValue('C:/Users/maria/Downloads/ADULT_GERMAN_WAV_CUT');
    sound_1.secs=20;
    sound_1.setVolume(1.0);
    sound_2.setValue('C:/Users/maria/Downloads/ADULT_AMERICANENGLISH_WAV_CUT');
    sound_2.secs=20;
    sound_2.setVolume(1.0);
    sound_3.setValue('CHI3_AMERICANENGLISH_4;09_WAV_CUT');
    sound_3.secs=20;
    sound_3.setVolume(1.0);
    sound_4.setValue('CHI4_BRAZILIAN_WAV_CUT');
    sound_4.secs=20;
    sound_4.setVolume(1.0);
    // reset button to account for continued clicks & clear times on/off
    button.reset()
    // reset button_2 to account for continued clicks & clear times on/off
    button_2.reset()
    // keep track of which components have finished
    trial_1Components = [];
    trial_1Components.push(sound_1);
    trial_1Components.push(sound_2);
    trial_1Components.push(sound_3);
    trial_1Components.push(sound_4);
    trial_1Components.push(text);
    trial_1Components.push(button);
    trial_1Components.push(button_2);
    trial_1Components.push(text_2);
    trial_1Components.push(text_3);
    trial_1Components.push(text_4);
    trial_1Components.push(text_5);
    trial_1Components.push(text_6);
    
    for (const thisComponent of trial_1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trial_1RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'trial_1' ---
    // get current time
    t = trial_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // start/stop sound_1
    if (t >= 21 && sound_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_1.tStart = t;  // (not accounting for frame time here)
      sound_1.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_1.play(); });  // screen flip
      sound_1.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 21 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_1.tStart + 0.5) {
        sound_1.stop();  // stop the sound (if longer than duration)
        sound_1.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_2
    if (t >= 42 && sound_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_2.tStart = t;  // (not accounting for frame time here)
      sound_2.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_2.play(); });  // screen flip
      sound_2.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 42 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_2.tStart + 0.5) {
        sound_2.stop();  // stop the sound (if longer than duration)
        sound_2.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_3
    if (t >= 63 && sound_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_3.tStart = t;  // (not accounting for frame time here)
      sound_3.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_3.play(); });  // screen flip
      sound_3.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 63 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_3.tStart + 0.5) {
        sound_3.stop();  // stop the sound (if longer than duration)
        sound_3.status = PsychoJS.Status.FINISHED;
      }
    }
    // start/stop sound_4
    if (t >= 84 && sound_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      sound_4.tStart = t;  // (not accounting for frame time here)
      sound_4.frameNStart = frameN;  // exact frame index
      
      psychoJS.window.callOnFlip(function(){ sound_4.play(); });  // screen flip
      sound_4.status = PsychoJS.Status.STARTED;
    }
    frameRemains = 84 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (sound_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      if (t >= sound_4.tStart + 0.5) {
        sound_4.stop();  // stop the sound (if longer than duration)
        sound_4.status = PsychoJS.Status.FINISHED;
      }
    }
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text.setAutoDraw(false);
    }
    
    
    // *button* updates
    if (t >= 105 && button.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button.tStart = t;  // (not accounting for frame time here)
      button.frameNStart = frameN;  // exact frame index
      
      button.setAutoDraw(true);
    }
    
    frameRemains = 105 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button.setAutoDraw(false);
    }
    
    if (button.status === PsychoJS.Status.STARTED) {
      // check whether button has been pressed
      if (button.isClicked) {
        if (!button.wasClicked) {
          // store time of first click
          button.timesOn.push(button.clock.getTime());
          // store time clicked until
          button.timesOff.push(button.clock.getTime());
        } else {
          // update time clicked until;
          button.timesOff[button.timesOff.length - 1] = button.clock.getTime();
        }
        if (!button.wasClicked) {
          // end routine when button is clicked
          continueRoutine = false;
          
        }
        // if button is still clicked next frame, it is not a new click
        button.wasClicked = true;
      } else {
        // if button is clicked next frame, it is a new click
        button.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button hasn't started / has finished
      button.clock.reset();
      // if button is clicked next frame, it is a new click
      button.wasClicked = false;
    }
    
    // *button_2* updates
    if (t >= 105 && button_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      button_2.tStart = t;  // (not accounting for frame time here)
      button_2.frameNStart = frameN;  // exact frame index
      
      button_2.setAutoDraw(true);
    }
    
    frameRemains = 105 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (button_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      button_2.setAutoDraw(false);
    }
    
    if (button_2.status === PsychoJS.Status.STARTED) {
      // check whether button_2 has been pressed
      if (button_2.isClicked) {
        if (!button_2.wasClicked) {
          // store time of first click
          button_2.timesOn.push(button_2.clock.getTime());
          // store time clicked until
          button_2.timesOff.push(button_2.clock.getTime());
        } else {
          // update time clicked until;
          button_2.timesOff[button_2.timesOff.length - 1] = button_2.clock.getTime();
        }
        if (!button_2.wasClicked) {
          // end routine when button_2 is clicked
          continueRoutine = false;
          
        }
        // if button_2 is still clicked next frame, it is not a new click
        button_2.wasClicked = true;
      } else {
        // if button_2 is clicked next frame, it is a new click
        button_2.wasClicked = false;
      }
    } else {
      // keep clock at 0 if button_2 hasn't started / has finished
      button_2.clock.reset();
      // if button_2 is clicked next frame, it is a new click
      button_2.wasClicked = false;
    }
    
    // *text_2* updates
    if (t >= 20 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }
    
    frameRemains = 20 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_2.setAutoDraw(false);
    }
    
    
    // *text_3* updates
    if (t >= 42 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }
    
    frameRemains = 42 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_3.setAutoDraw(false);
    }
    
    
    // *text_4* updates
    if (t >= 63 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }
    
    frameRemains = 63 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_4.setAutoDraw(false);
    }
    
    
    // *text_5* updates
    if (t >= 84 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }
    
    frameRemains = 84 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_5.setAutoDraw(false);
    }
    
    
    // *text_6* updates
    if (t >= 105 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }
    
    frameRemains = 105 + 20 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_6.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_6.setAutoDraw(false);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trial_1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trial_1RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'trial_1' ---
    for (const thisComponent of trial_1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('trial_1.stopped', globalClock.getTime());
    sound_1.stop();  // ensure sound has stopped at end of Routine
    sound_2.stop();  // ensure sound has stopped at end of Routine
    sound_3.stop();  // ensure sound has stopped at end of Routine
    sound_4.stop();  // ensure sound has stopped at end of Routine
    psychoJS.experiment.addData('button.numClicks', button.numClicks);
    psychoJS.experiment.addData('button.timesOn', button.timesOn);
    psychoJS.experiment.addData('button.timesOff', button.timesOff);
    psychoJS.experiment.addData('button_2.numClicks', button_2.numClicks);
    psychoJS.experiment.addData('button_2.timesOn', button_2.timesOn);
    psychoJS.experiment.addData('button_2.timesOff', button_2.timesOff);
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
