# Custom-Logic
Custom-Logic is a web-based tool that represents various logic structures using Google's Blockly library. Built on Node.js, it allows users to create, visualize, and manage logic blocks efficiently.
This is a project aimed to represent the various logic into blocks form, thanks the tool Features:  
- 📘Visual representation of logic structures using Blockly  
- 📦Customizable logic blocks through JSON configurations  
- 🛠️Easy integration and setup with Node.js and npm  

🛠️Prerequisites:  
- Node.js and npm installed on your device  
The link for Nodejs [download Nodejs](https://nodejs.org/en/download)  
The link for npm [download npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  

📘Visiting / Use of service:   
After installation the prerequisites, you can simply launch the program at command line of subdirectory custom logic.   
Using the command <pre>'npm start'</pre> to lauch the service, after service lauched open a web page in the browser with address: **127.0.0.1:8080** to start use the service.   

How to switch the default logics?  
To use the default logic:​
1. Navigate to the src directory.​  
2. Run this program with command <pre>"python .\Logicgenerator.py"</pre> then select the logic configuration files, that it can be the default one (in the subdirectory of src, named 'Logics'), or created by you self. 

📦Configuration for the custom logic  
To create your own logic you can create a new file json in the Logics folder or any other path, just make sure it has suffix .json.  

In the your own json file you can specify three camp inside a json array, which is "collector", "prototype", "advancedtype"(Of course it not neceessary alway be three, it depends on your need).  
Example:  
<pre>
[
    {
        "type": "collector",
        xxxxx(any other contents)
    },
    {
        "type": "prototype",
        xxxxx(any other contents)
    },
    {
        "type": "advancedtype",
        xxxxx(any other contents)
    }
]
</pre>  
  
First camp is 'collector', you can specify the "type": "collectors" to declare that you are defining the collector, you can define a json array which contain the blocks that you want them be together and use them as a list in the camp named "content".  
Example:  
<pre>  
    {
        "type": "collector",
        "contents":[
            {
                "name": "collector1",
                "elements": ["list of elements"]
            },
            {
                "name": "collector2",
                "elements": ["second list of elements"]                
            },
            xxxxx(other list)
        ]
    }
</pre>
  
Second camp is 'prototype', in this camp you also need use "type": "protoytpe" to declare that you are going to define the blocks there are prototype, you can define your prototype blocks in a json array then put this array inside the "content" camp.   

For every element of array you can define "name" as block's name, "format" as the final string format you want obtain when you are using this block.  
In prototype case can use the label(just write the word in the string that you want put in the format.) and the four default value type that start with % to represent it is value type.
- %string
- %int
- %double(which have precision 0.00)
- %bool
About "connection" this camp is defined on your need (so it is not necessary to be defined every time), if you need your ablock connected to other block just declare this camp and give it an array of blocks that you want the block you are defining to connect to or just one element.
Example for connection:  
<pre>
    [
        {
            "name":"name1",
            "format":"%string",
            "connection":"name1"
        },
        {
            "name":"name2",
            "format":"%string"
        }
    ]
</pre> 
Or  
<pre>
    [
        {
            "name":"name1",
            "format":"%string",
            "connection":["name1","name2"]
        },
        {
            "name":"name2",
            "format":"%string"
        }
    ]
</pre> 
Whole example of the prototype:
<pre>'''  
    {
        "type": "prototype",
        "contents": [
            {
                "name":"string",
                "format":"%string",
                "connection":"string" //In this case our block 'string' can concatenate with other block string
            },
            {
                "name":"integer",
                "format":"%int"
            },
            {
                "name":"double",
                "format":"%double"
            },
            {
                "name":"boolean",
                "format":"%bool"
            }
        ]
    }
'''</pre>    
**About connection!!!**   
If you want a block in some case can be concatenate and some case not, just define two block have same structure, one has connection and another one not, this is a easy way to build a constraint.  
**About differences between prototype and advanced type!!!**  
Note: the block you defined in the prototype camp in the interpretation phase it will just return the value as it is, not like the advanced type that will start with '(' and closed with ')' , unless you use the connection property, it will close the sequence of block have same 'name' property.  
And for the prototype you can specify which value represent for this block you are defining, it also can contain the other blocks just respect the syntax to contain the other blocks, but it is not reccomanded, cause it can be solved in the advanced_type, it's better to have a clear division between advanced type and prototype.  
Third camp is 'advanced_type', in this camp have same operation as prototype, use label and four default value type, the only difference is you can use the %[] to represent a single prototype input variable or an array of prototype or a collector.  



