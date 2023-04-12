// USE COLLECTIONS WITH SOME COMPOSITION

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