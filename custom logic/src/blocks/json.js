import * as Blockly from 'blockly';
//let blocks_lsit=["atoms","agents","container","container1","container2","container3","container4","container5","container6","container7","container8"];
/*
let blocks_lsit=["atoms","agents","container2","container3","container4","container5","container6","container7","container8"];

function all_but_that(block){
  return blocks_lsit.filter(item => item !== block)
}

let all_but_agents = all_but_that("agents");
*/

/*
let data = [
  {
    "type": "agent",
    "message0": "agent",
    "message1": "%1",
    "args1": [
      {
        "type": "field_input",
        "text": "",
        "name": "name1"
      }
    ],
    "previousStatement": "agent",
    "colour": "30",
    "nextStatement": [
      "agent"
    ]
  },
  {
    "type": "atom",
    "message0": "atom",
    "message1": "%1",
    "args1": [
      {
        "type": "field_input",
        "text": "",
        "name": "name1"
      }
    ],
    "previousStatement": "atom",
    "colour": "90"
  },
  {
    "type": "OR",
    "message0": " ",
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name1"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "field_label",
        "text": "v",
        "name": "name2"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name3"
      }
    ],
    "previousStatement": "OR",
    "colour": "180"
  },
  {
    "type": "AND",
    "message0": " ",
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name1"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "field_label",
        "text": "^",
        "name": "name2"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name3"
      }
    ],
    "previousStatement": "AND",
    "colour": "63"
  },
  {
    "type": "NOT",
    "message0": " ",
    "message1": "%1",
    "args1": [
      {
        "type": "field_label",
        "text": "NOT",
        "name": "name1"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name2"
      }
    ],
    "previousStatement": "NOT",
    "colour": "213"
  },
  {
    "type": "G",
    "message0": " ",
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "check": [
          "agent"
        ],
        "name": "name1"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "field_label",
        "text": "G",
        "name": "name2"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name3"
      }
    ],
    "previousStatement": "G",
    "colour": "106"
  },
  {
    "type": "X",
    "message0": " ",
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "check": [
          "agent"
        ],
        "name": "name1"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "field_label",
        "text": "X",
        "name": "name2"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name3"
      }
    ],
    "previousStatement": "X",
    "colour": "221"
  },
  {
    "type": "F",
    "message0": " ",
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "check": [
          "agent"
        ],
        "name": "name1"
      }
    ],
    "message2": "%1",
    "args2": [
      {
        "type": "field_label",
        "text": "F",
        "name": "name2"
      }
    ],
    "message3": "%1",
    "args3": [
      {
        "type": "input_statement",
        "check": [
          "atom",
          "AND",
          "OR",
          "NOT",
          "G",
          "X",
          "F"
        ],
        "name": "name3"
      }
    ],
    "previousStatement": "F",
    "colour": "93"
  }
];

export const blocks=Blockly.common.createBlockDefinitionsFromJsonArray(data);
*/

const load_function = async () => {
  let data = [];
  try {
    const response = await fetch('/blocks/ATL1.json');
    data = await response.json();
    if (data) {
      return Blockly.common.createBlockDefinitionsFromJsonArray(data);
    } else {
      throw new Error('Data is not an array');
    }
  } catch (err) {
    console.error('Failed to load JSON:', err);
    return null;
  }
};
//If you're using ES6 Modules (i.e., type="module" in the browser 
// or using .mjs or type="module" in Node.js), top-level await is supported.
export const blocks =await load_function();
