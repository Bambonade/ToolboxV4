app.component('toolbox', {
    data() {
        return {
            tools: [
                new Tool('1/4" METRIC Socket Set', 'Socket'),
                new Tool('1/4" SAE Socket Set', 'Socket'),
                new Tool('3/8" METRIC Socket Set', 'Socket'),
                new Tool('3/8" SAE Socket Set', 'Socket'),
                new Tool('1/4" Ratchet', 'Ratchet'),
                new Tool('3/8" Ratchet', 'Ratchet'),
                new Tool('1/2" Ratchet', 'Ratchet'),
                new Tool('Milwaukee Ratchet', 'PowerTool'),
                new Tool('123 Piece Bit Set', 'Bit'),
                new Tool('12 Piece Metric Wrench Set'),
                new Tool('Torx/Alan Socket Set', 'Torx'),
                new Tool('3/8" MAC Air Ratchet', 'Pneumatic'),
                new Tool('Cornwell Orbital Sander (DA)', 'Pneumatic'),
                new Tool('10 Piece Screw Driver Set', 'ScrewDriver'),
                new Tool('Milwaukee 5 Piece Locking Pliers', 'Pliers'),
                new Tool('Cornwell 5 Piece Pliers Set', 'Pliers'),
                new Tool('Electrical Tape', 'Electrical'),
                new Tool('Wire Stripper', 'Electrical'),
                new Tool('Milwaukee Impact Driver', 'PowerTool'),
                new Tool('Milwaukee 1/4" Ratchet', 'PowerTool'),
                new Tool('DeWalt Drill', 'PowerTool'),
                new Tool('DeWalt Angle Grinder', 'PowerTool'),
                new Tool('DeWalt Impact Driver', 'PowerTool'),
            ],
        }
    },
    methods: {
        addTool() {
            this.dialogVisible = true
        },
        saveTool() {
            if (this.editingIndex !== null) {
                this.tools[this.editingIndex].name = this.name
                this.tools[this.editingIndex].category = this.category
            } else {
                this.tools.push({name: this.name, category: this.category})
            }
            this.name = ''
            this.category = ''
            this.dialogVisible = false
            this.editingIndex = null
        },
        editTool(index) {
            this.editingIndex = index
            this.name = this.tools[index].name
            this.category = this.tools[index].category
            this.dialogVisible = true
        },
        deleteTool(index) {
            this.tools.splice(index, 1)
        },
        cancel() {
            this.name = ''
            this.category = ''
            this.dialogVisible = false
            this.editingIndex = null
        }
    },

    template:
        `
    <q-page>
        <q-list>
            <q-item
            v-for="(tool, index) in tools"
            :key="index"
            :header="tool.name"
            :subheader="tool.category"
            >
            <q-item-label>
                <q-btn @click="editTool(index)" color="primary">Edit</q-btn>
            <q-btn @click="deleteTool(index)" color="negative">Delete</q-btn>
    </q-item-label>
</q-item>
</q-list>

<q-dialog v-model="dialogVisible">
    <q-card>
        <q-card-section>
            <q-input v-model="name" label="Name" />
            <q-input v-model="category" label="Category" />
        </q-card-section>
        <q-card-actions>
            <q-btn @click="saveTool" color="primary">Save</q-btn>
        <q-btn @click="cancel" color="negative">Cancel</q-btn>
</q-card-actions>
</q-card>
</q-dialog>

<q-btn @click="addTool" class="fixed-bottom-right" color="primary" icon="add" />
    </q-page>
`
});