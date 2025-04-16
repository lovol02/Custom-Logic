/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly';
/*
import {blocks} from './blocks/text';
import {forBlock} from './generators/javascript';
import {javascriptGenerator} from 'blockly/javascript';
*/
import {blocks} from './blocks/json';
import {jsonGenerator} from './generators/json';
import {save, load,downloadworkspace,uploadworkspace} from './serialization';
import {toolbox} from './toolbox';
import './index.css';
// Register the blocks and generator with Blockly
Blockly.common.defineBlocks(blocks);
//Object.assign(javascriptGenerator.forBlock, forBlock);

// Set up UI elements and inject Blockly
const codeDiv = document.getElementById('generatedCode').firstChild;
const blocklyDiv = document.getElementById('blocklyDiv');



const ws = Blockly.inject(blocklyDiv, {toolbox});

// This function resets the code and output divs, shows the
// generated code from the workspace, and evals the code.
// In a real application, you probably shouldn't use `eval`.
const runCode = () => {
  const code = jsonGenerator.workspaceToCode(ws);
  codeDiv.innerText = code;
};

load(ws);
runCode();




//never been invoked
document.addEventListener("DOMContentLoaded",function(){
  console.log("DOMContentLoaded");
  // Load the initial state from storage and run the code.

});

// the following code should be put inside eventlistener
// that ensure the DOMContentLoaded is fully triggered,
// but when i used the async in my sub script my DOMContentLoaded is never been invoked 
const downloadBtn = document.getElementById("downloadWS");
const uploadBtn = document.getElementById("uploadWS");
const fileInput = document.getElementById("fileInput");
const loaded = document.getElementById("loadResult");
downloadBtn.addEventListener("click",function(){downloadworkspace(ws);});
uploadBtn.addEventListener("click",function(){fileInput.click();});
fileInput.addEventListener("change",function(event){
  uploadworkspace(ws,event,loaded);
});

// Every time the workspace changes state, save the changes to storage.
ws.addChangeListener((e) => {
  // UI events are things like scrolling, zooming, etc.
  // No need to save after one of these.
  if (e.isUiEvent) return;
  save(ws);
});

// Whenever the workspace changes meaningfully, run the code again.
ws.addChangeListener((e) => {
  // Don't run the code when the workspace finishes loading; we're
  // already running it once when the application starts.
  // Don't run the code during drags; we might have invalid state.
  if (
    e.isUiEvent ||
    e.type == Blockly.Events.FINISHED_LOADING ||
    ws.isDragging()
  ) {
    return;
  }
  runCode();
});
