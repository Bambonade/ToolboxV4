// USE COLLECTIONS WITH SOME COMPOSITION
function ToolboxCollection(){
    let tool = [];
    let toolList = [];
    let drawerList = [];

    toolList.addTool = function(name){
        this.push(new Tool(name, (function(name){
            toolList.removeTool(name);
        })))
    }

    toolList.removeTool = function(tool){
        this.splice(this.indexOf(tool),1);
        return this;
    }
    return toolList;
}
function Tool(name, category){
    this.name = name;
    // switch to drawer
    // Maybe add composition for consumables like tape, cleaners, etc. seperate from tools but still part of drawers
    this.category = category;
}

function Drawer(name, category, size){
    this.name = name;
    this.category = category;
}