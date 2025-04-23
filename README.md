# Custom-Logic
Custom-Logic is a web-based tool that represents various logic structures using Google's Blockly library. Built on Node.js, it allows users to create, visualize, and manage logic blocks efficiently.
This is a project aimed to represent the various logic into blocks form, thanks the tool Features:  
- 📘Visual representation of logic structures using Blockly  
- 📦Customizable logic blocks through JSON configurations  
- 🛠️Easy integration and setup with Node.js and npm  

🛠️Prerequisites:  
- Node.js and npm installed on your device, for web service
- Python installed for the part of creation of custom logic  
The link to install Nodejs [download Nodejs](https://nodejs.org/en/download)  
The link to install npm [download npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)  
The link to install python [download python](https://www.python.org/downloads/)  

📘Visiting / Use of service:   
After installation the prerequisites, you can simply launch the program at command line of subdirectory custom logic.   
Using the command <pre>'npm start'</pre> to lauch the service, after service lauched open a web page in the browser with address: **127.0.0.1:8080** to start use the service.   

How to switch the default logics?  
To use the default logic:​
1. Navigate to the src directory.​  
2. Run this program with command <pre>"python Logicgenerator.py"</pre> then select the file that specify the block configuration for the logic you want use, that it can be the default one (in the subdirectory of src, named 'Logics'), or created by you self. 

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
            xxxxx(other collectors)
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
            "connection":"name1" // If just one element, it also can be inside the [], "connection":["name1"], just declare that our block 'name1' can concatenate with other block name1
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
If you want a block in some case can be concatenate and some case not, just define two block have same structures, one has connection and another one not, this is a easy way to build a constraint.  
**About differences between prototype and advanced type!!!**  
Note: the block you defined in the prototype camp in the interpretation phase it will just return the value as it is, not like the advanced type that will start with '(' and closed with ')' , unless you use the connection property, it will close the sequence of block have same 'name' property.  
And for the prototype you can specify which value represent for this block you are defining, it also can contain the other blocks just respect the syntax to contain the other blocks, but it is not reccomanded, cause it can be solved in the 'advancedtype', it's better to have a clear division between advanced type and prototype.  
Third camp is 'advancedtype', in this camp has same operation as prototype, can use label and four default value type (but the block which has only the default value type is reccomanded to defining it in the prototype instead in the 'advancedtype'), the only difference is in the format you can use the %[] to represent the blocks which is acceptable as input (insert the name of block as you defined), those blocks can be a sequence of prototype, other advanced type, it self, or a collector.
Example of ATL:  
<pre>
[
    {
        "type": "collector",
        "contents":[
            {
                "name": "all",
                "elements": ["atom","AND","OR","NOT","G","X","F","agents"]
            },
            {
                "name": "all_but_agents",
                "elements": ["atom","AND","OR","NOT","G","X","F"]                
            }
        ]
    },
    {
        "type": "prototype",
        "contents": [
            {
                "name":"agent",
                "format":"%string",
                "connection":["agent"]
            },
            {
                "name":"atom",
                "format":"%string"
            }
        ]
    },
    {
        "type": "advancedtype",
        "contents":[
		{
            "name": "OR",
            "format":"%['all_but_agents'] v %['all_but_agents']"
        },
        {
            "name": "AND",
            "format":"%['all_but_agents'] ^ %['all_but_agents']"
        },
        {
            "name": "NOT",
            "format":"NOT %['all_but_agents']"
        },
        {
            "name": "G",
            "format":"<<%['agent']>> G %['all_but_agents']"
        },
        {
            "name": "X",
            "format":"<<%['agent']>> X %['all_but_agents']"
        },
        {
            "name": "F",
            "format":"<<%['agent']>> F %['all_but_agents']"
        }
	]
    }
]
</pre>

***Note!!!***
Please let every block and collector has his own name, in the case of the same name for block and collector, it will cause a confusion for our program.



