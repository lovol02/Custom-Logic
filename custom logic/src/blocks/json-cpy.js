import * as Blockly from 'blockly';
//let blocks_lsit=["atoms","agents","container","container1","container2","container3","container4","container5","container6","container7","container8"];

let blocks_lsit=["atoms","agents","container2","container3","container4","container5","container6","container7","container8"];

function all_but_that(block){
  return blocks_lsit.filter(item => item !== block)
}

let all_but_agents = all_but_that("agents");



export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(  [  
  {
  "type": "atoms",
  "message0": "atoms %1",
  "args0":[
    {
      "type": "field_input",
      "name": "FIELDNAME",
      "text": ""
    }
  ],
  "previousStatement": "atoms",
  'colour': 200
  },
  {
  "type": "agents",
  "message0": "agent %1",
  "args0":[
    {
      "type": "field_input",
      "name": "FIELDNAME",
      "text": ""
    }
  ],
  "previousStatement": "agents",
  "nextStatement": ["agents"],
  "colour": 130
  },
  {
  "type": "container2",
  "message0": "%1",
  "message1": "%1",
  "message2": "%1",
  "args0": [
  {
    "type": "input_statement",
    "name": "input_camp1",
    "check": all_but_agents

  }],
  "args1":[
  {
      "type": "field_label",
      "name": "FieldName",
      "text": "^"
  }
  ],
  "args2": [
    {
      "type": "input_statement",
      "name": "input_camp2",
      "check": all_but_agents

    }],
  "previousStatement": "container2",
  "colour": 230,
  },
  {
  "type": "container3",
  "message0": " %1",
  "message1": "%1",
  "message2": "%1",
  "args0": [
  {
    "type": "input_statement",
    "name": "input_camp1",
    "check": all_but_agents

  }],
  "args1":[
  {
      "type": "field_label",
      "name": "FieldName",
      "text": "v"
  }
  ],
  "args2": [
    {
      "type": "input_statement",
      "name": "input_camp2",
      "check": all_but_agents

    }],
  "previousStatement": "container3",
  "colour": 230,
  },
  {
  "type": "container4",
  "message0": " %1",
  "message1": "%1",
  "args1": [
  {
    "type": "input_statement",
    "name": "input_camp1",
    "check": all_but_agents

  }],
  "args0":[
  {
      "type": "field_label",
      "name": "FieldName",
      "text": "NOT"
  }
  ],
  "previousStatement": "container4",
  "colour": 230,
  },
  {
  "type": "container5",
  "message0": " %1",
  "message1": "%1",
  "message2": "%1",
  "args0": [
  {
    "type": "input_statement",
    "name": "agentscamp",
    "check": ["agents"]

  }],
  "args1":[
  {
      "type": "field_label",
      "name": "FieldName",
      "text": "G"
  }
  ],
  "args2": [
    {
      "type": "input_statement",
      "name": "input_camp2",
      "check": all_but_agents

    }],
  "previousStatement": "container5",
  "colour": 230,
  },
  {
  "type": "container6",
  "message0": " %1",
  "message1": "%1",
  "message2": "%1",
  "args0": [
  {
    "type": "input_statement",
    "name": "agentscamp",
    "check": ["agents"]

  }],
  "args1":[
  {
      "type": "field_label",
      "name": "FieldName",
      "text": "X"
  }
  ],
  "args2": [
    {
      "type": "input_statement",
      "name": "input_camp2",
      "check": all_but_agents

    }],
  "previousStatement": "container6",
  "colour": 230,
  },
  {
  "type": "container7",
  "message0": " %1",
  "message1": "%1",
  "message2": "%1",
  "args0": [
  {
    "type": "input_statement",
    "name": "agentscamp",
    "check": ["agents"]

  }],
  "args1":[
  {
      "type": "field_label",
      "name": "FieldName",
      "text": "F"
  }
  ],
  "args2": [
    {
      "type": "input_statement",
      "name": "input_camp2",
      "check": all_but_agents

    }],
  "previousStatement": "container7",
  "colour": 230,
  },
  {
  "type": "container8",
  "message0": " %1",
  "message1": "%1",
  "message2": "%1",
  "message3": "%1",
  "args0": [
  {
    "type": "input_statement",
    "name": "agentscamp",
    "check": ["agents"]

  }],
  "args1": [
    {
      "type": "input_statement",
      "name": "input_camp1",
      "check": all_but_agents

    }],
  "args2":[
  {
      "type": "field_label", 
      "name": "FieldName",
      "text": "v"
  }
  ],
  "args3": [
    {
      "type": "input_statement",
      "name": "input_camp2",
      "check": all_but_agents

    }],
  "previousStatement": "container8",
  "colour": 230,
  },]);

