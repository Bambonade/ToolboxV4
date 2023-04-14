// USE COLLECTIONS WITH SOME COMPOSITION
function ToolboxCollection(){
    let drawerList = [];

    drawerList.addDrawer = function(name){
        this.push(new Drawer(name, (function(name){
            drawerList.removeDrawer(name);
        })))
    }

    drawerList.removeDrawer = function(drawer){
        this.splice(this.indexOf(drawer),1);
        return this;
    }
    return drawerList;
}

function DrawerListCollection (){
    let toolList = [];

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
    this.size = size;
}