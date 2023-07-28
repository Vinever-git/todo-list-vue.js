const vm = new Vue({
    el: "#app",
    data: {
        inputTarefa: "",
        tarefasAdicionadas: [],
        check: false,
    },
    methods: {
        adicionarTarefa(){
            if(this.inputTarefa.length <= 20){
                const tarefa = this.inputTarefa;
                const id = tarefa + tarefa.length
                const checkTask = this.check
                this.tarefasAdicionadas.push({ tarefa, id, checkTask });
            };
            this.inputTarefa = null
        
        },
        removerTarefa(index){
           this.tarefasAdicionadas.splice(index, 1) 
        }
    }
})