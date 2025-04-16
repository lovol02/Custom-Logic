import * as Blockly from 'blockly';

export const jsonGenerator = new Blockly.Generator('JSON');

const Order = {
    ATOMIC: 0,
};


jsonGenerator.forBlock['logic_null'] = function(block) {
    return ['null', Order.ATOMIC];
};

jsonGenerator.forBlock['atoms'] = function(block) {
    var code = block.getFieldValue('FIELDNAME');
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock) {
        return code + ',' + jsonGenerator.blockToCode(nextBlock);
    }    
    return code;
};
jsonGenerator.forBlock['agents'] = function(block) {
    var code = block.getFieldValue('FIELDNAME');
    const nextBlock =
        block.nextConnection && block.nextConnection.targetBlock();
    if (nextBlock) {
        return code + ',' + jsonGenerator.blockToCode(nextBlock);
    }    
    return code;
};

jsonGenerator.forBlock['container2'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'input_camp1').slice(2);
    const secondelement = jsonGenerator.statementToCode(block, 'input_camp2').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '('+firstelement+" "+label+" "+secondelement+')';
    return code; 
};

jsonGenerator.forBlock['container3'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'input_camp1').slice(2);
    const secondelement = jsonGenerator.statementToCode(block, 'input_camp2').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '('+firstelement+" "+label+" "+secondelement+')';
    return code; 
};

jsonGenerator.forBlock['container4'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'input_camp1').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '('+label+" "+firstelement+')';
    return code; 
};

jsonGenerator.forBlock['container5'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'agentscamp').slice(2);
    const secondelement = jsonGenerator.statementToCode(block, 'input_camp2').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '(<<'+firstelement+'>>'+" "+label+" "+secondelement+')';
    return code; 
};

jsonGenerator.forBlock['container6'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'agentscamp').slice(2);
    const secondelement = jsonGenerator.statementToCode(block, 'input_camp2').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '(<<'+firstelement+'>>'+" "+label+" "+secondelement+')';
    return code; 
};
jsonGenerator.forBlock['container7'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'agentscamp').slice(2);
    const secondelement = jsonGenerator.statementToCode(block, 'input_camp2').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '(<<'+firstelement+'>>'+" "+label+" "+secondelement+')';
    return code; 
};


jsonGenerator.forBlock['container8'] = function(block) {
    const label= block.getFieldValue('FieldName');
    const firstelement = jsonGenerator.statementToCode(block, 'agentscamp').slice(2);
    const secondelement = jsonGenerator.statementToCode(block, 'input_camp1').slice(2);
    const thirdelement = jsonGenerator.statementToCode(block, 'input_camp2').slice(2);
    //non lo so come mai, il codice generato ha due spazi all'inizio
    const code = '(<<'+firstelement+'>> '+secondelement+" "+label+" "+thirdelement+')';
    return code; 
};