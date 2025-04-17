import json
import random
import ast

jsonGenerator="""
import * as Blockly from 'blockly';
export const jsonGenerator = new Blockly.Generator('JSON');
const Order = { ATOMIC: 0,};
"""

#the filename is the filename of the input file 
#that define the features of the custom logic's block
Input_filename="Logics/Strategy_Logic.json"
with open(Input_filename,'r') as file:
    data=json.load(file)
block_list=[] 
toolbox_list=[]
color_list=[]
single_categories={}  
single_categories["kind"]="category"
single_categories["name"]=Input_filename.split('.')[0]
single_categories["name"]=Input_filename.split('/')[-1]
single_categories["contents"]=[]
collectors={} 
for elem in data:
    if elem["type"] == "collector":
        for collector in elem["contents"]:
            collectors[collector["name"]]=collector["elements"]
    else:
        for elem1 in elem["contents"]:
            dic={}
            jsonGenerator+=f"jsonGenerator.forBlock['{elem1['name']}'] = function(block) {{\n"
            code=""
            toolbox_dic={}
            toolbox_dic["kind"]="block"
            toolbox_dic["type"]=elem1["name"]
            single_categories["contents"].append(toolbox_dic)
            dic["type"] = elem1["name"]
            vars=elem1["format"].split(" ")
            print(vars)
            if vars[0]=="":
                vars=vars[1:]
            count=1
            if elem["type"] == "prototype":
                dic["message0"]=f"{elem1['name']}"
            else:
                dic["message0"]=" "
            for var in vars:
                dic[f"message{count}"]="%1"
                dic[f"args{count}"]=[]
                new_dic={}
                if var == f"%int":
                    new_dic["type"]="field_number"
                    new_dic["value"]=0
                    new_dic["precision"]=1
                    if code =="":  
                        code=f"block.getFieldValue('name{count}').toString()"
                    else:
                        code+=f"""+" "+block.getFieldValue('name{count}').toString()"""
                elif var == f"%double":
                    new_dic["type"]="field_number"
                    new_dic["value"]=0.0
                    new_dic["precision"]=0.01
                    if code =="":  
                        code=f"block.getFieldValue('name{count}').toString()"
                    else:
                        code+=f"""+" "+block.getFieldValue('name{count}').toString()"""
                elif var == f"%bool":
                    new_dic["type"]="field_dropdown"
                    new_dic["options"]=[["true","TRUE"],["false","FALSE"]]
                    if code =="":  
                        code=f"block.getFieldValue('name{count}').toString()"
                    else:
                        code+=f"""+" "+block.getFieldValue('name{count}').toString()"""
                elif var == f"%string":
                    new_dic["type"]="field_input"
                    new_dic["text"]=""
                    if code =="":  
                        code=f"block.getFieldValue('name{count}')"
                    else:
                        code+=f"""+" "+block.getFieldValue('name{count}')"""
                elif var[0] != '%' and '%' not in var:
                #the follow code not var.find('%') return false even can't find % in var
                #elif var[0] != '%' and not var.find('%'):
                    new_dic["type"]="field_label"
                    new_dic["text"]=var
                    if code =="":
                        code=f"block.getFieldValue('name{count}')"
                    else:
                        code+=f"""+" "+block.getFieldValue('name{count}')"""   
                elif var[0] == '%' and var[1] == '[':
                    new_dic["type"]="input_statement"
                    postfix_index=var.find(']')
                    postfix=""
                    if postfix_index != len(var)-1:
                        postfix=var[var.find(']')+1:]
                        var=var[0:postfix_index+1]
                    #This removes the leading % character from the string.
                    var=var.lstrip('%')
                    #this convert var into a list form, is more safe than eval()
                    var=ast.literal_eval(var)
                    new_dic["check"]=[]
                    for elemento in var:
                        if elemento in collectors:
                            new_dic["check"]=new_dic["check"]+collectors[elemento]
                        else:
                            new_dic["check"].append(elemento) 
                    #new_dic["check"]=var
                    if code =="":
                        code=f"""jsonGenerator.statementToCode(block, 'name{count}').slice(2)+"{postfix}" """
                    else:
                        code+=f"""+" "+jsonGenerator.statementToCode(block, 'name{count}').slice(2)+"{postfix}" """
                else:
                    index=var.find('%')
                    lsign=var[0:index]
                    rsign=var[-index:]
                    var=var[index:-index]
                    try:
                        if var == f"%string":
                            new_dic["type"]="field_input"
                        elif var[0] != '%' and '%' not in var:
                            new_dic["type"]="field_label"  
                        elif var[0] == '%' and var[1] == '[':
                            new_dic["type"]="input_statement"
                        else:
                            raise Exception(f"Unrecognized type error: what is the type of this variable? {var}")
                    except Exception as e:
                        print(f"An error occurred: {e}")                
                    var=var.lstrip('%')
                    var=ast.literal_eval(var)
                    new_dic["check"]=var
                    if code =="":
                        code=f""" "{lsign}"+jsonGenerator.statementToCode(block, 'name{count}').slice(2)+"{rsign}" """
                    else:
                        code+=f"""+" "+jsonGenerator.statementToCode(block, 'name{count}').slice(2)"""
                new_dic["name"]=f"name{count}"  
                dic[f"args{count}"].append(new_dic)         
                count+=1
            dic["previousStatement"]=dic["type"]
            
            f=1
            while(f):
                num=random.randint(1,256)
                if num not in color_list:
                    color_list.append(num)
                    f=0
                    dic["colour"]=f"{num}"
            if elem["type"]== "prototype":
                jsonGenerator+=f"var code={code};\n"
            else:
                jsonGenerator+=f"var code='('+{code}+')';\n"
            if elem1.get('connection'):
                if elem1["connection"]!="":
                    print(elem1["connection"])
                    connection_list=elem1["connection"].split(",")
                    dic["nextStatement"]=[]
                    dic["nextStatement"]=dic["nextStatement"]+connection_list
                    jsonGenerator+="""
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
                    \n   
                    """
            block_list.append(dic)
            jsonGenerator+="return code;};\n"
toolbox_list.append(single_categories)

print(jsonGenerator)
with open("./blocks/blockDefinition.json","w") as file:
    json.dump(block_list,file,indent=2)
with open("./toolbox1.json","w") as file:
    json.dump(toolbox_list,file,indent=2)
with open("./generators/json.js","w") as file:
    file.write(jsonGenerator)