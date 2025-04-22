
import * as Blockly from 'blockly';
export const jsonGenerator = new Blockly.Generator('JSON');
const Order = { ATOMIC: 0,};
jsonGenerator.forBlock['agent'] = function(block) {
var code=block.getFieldValue('name1');

                    const prevBlock = block.getPreviousBlock();
                    if (prevBlock && prevBlock.type != block.type){
                        console.log(prevBlock.type);
                        code = '('+code;
                    }
                    const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
                    if (nextBlock) {
                        if(nextBlock.type != block.type){
                            code = code+')';
                        }
                        return code + ',' + jsonGenerator.blockToCode(nextBlock) ;
                    }
                    else{
                        code=code+')';
                    }
                    
   
                    return code;};
jsonGenerator.forBlock['atom'] = function(block) {
var code=block.getFieldValue('name1');
return code;};
jsonGenerator.forBlock['OR'] = function(block) {
var code='('+jsonGenerator.statementToCode(block, 'name1').slice(2)+"" +" "+block.getFieldValue('name2')+" "+jsonGenerator.statementToCode(block, 'name3').slice(2)+"" +')';
return code;};
jsonGenerator.forBlock['AND'] = function(block) {
var code='('+jsonGenerator.statementToCode(block, 'name1').slice(2)+"" +" "+block.getFieldValue('name2')+" "+jsonGenerator.statementToCode(block, 'name3').slice(2)+"" +')';
return code;};
jsonGenerator.forBlock['NOT'] = function(block) {
var code='('+block.getFieldValue('name1')+" "+jsonGenerator.statementToCode(block, 'name2').slice(2)+"" +')';
return code;};
jsonGenerator.forBlock['G'] = function(block) {
var code='('+ "<<"+jsonGenerator.statementToCode(block, 'name1').slice(2)+">>" +" "+block.getFieldValue('name2')+" "+jsonGenerator.statementToCode(block, 'name3').slice(2)+"" +')';
return code;};
jsonGenerator.forBlock['X'] = function(block) {
var code='('+ "<<"+jsonGenerator.statementToCode(block, 'name1').slice(2)+">>" +" "+block.getFieldValue('name2')+" "+jsonGenerator.statementToCode(block, 'name3').slice(2)+"" +')';
return code;};
jsonGenerator.forBlock['F'] = function(block) {
var code='('+ "<<"+jsonGenerator.statementToCode(block, 'name1').slice(2)+">>" +" "+block.getFieldValue('name2')+" "+jsonGenerator.statementToCode(block, 'name3').slice(2)+"" +')';
return code;};
