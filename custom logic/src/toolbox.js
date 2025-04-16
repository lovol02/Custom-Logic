/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

const load_function_for_toolbox = async () => {
  let data = [];
  try {
    const response = await fetch('/toolbox1.json');
    data = await response.json();
    if (data) {
      return {
              "kind": "categoryToolbox",
              "contents": data
             };
    } else {
      throw new Error('Data is not an array');
    }
  } catch (err) {
    console.error('Failed to load JSON:', err);
    return null;
  }
};


/*
let contents= [
  {
    "kind": "category",
    "name": "prova",
    "contents": [
      {
        "kind": "block",
        "type": "agent"
      },
      {
        "kind": "block",
        "type": "atom"
      },
      {
        "kind": "block",
        "type": "OR"
      },
      {
        "kind": "block",
        "type": "AND"
      },
      {
        "kind": "block",
        "type": "NOT"
      },
      {
        "kind": "block",
        "type": "G"
      },
      {
        "kind": "block",
        "type": "X"
      },
      {
        "kind": "block",
        "type": "F"
      }
    ]
  }
];
export const toolbox = {
  "kind": "categoryToolbox",
  "contents": contents
 };
 */
//If you're using ES6 Modules (i.e., type="module" in the browser 
// or using .mjs or type="module" in Node.js), top-level await is supported.
export const toolbox = await load_function_for_toolbox();
