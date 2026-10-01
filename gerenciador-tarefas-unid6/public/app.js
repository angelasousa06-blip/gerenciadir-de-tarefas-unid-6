const ItemTarefa = {
    props: {
        tarefa: {
            type: Object,
            required: true
        }
    },

    emits: ['concluir', 'excluir'],

    template: `
        <article class="tarefa">
            <h3>{{ tarefa.titulo }}</h3>

            <p v-if="tarefa.descricao">
                {{ tarefa.descricao }}
            </p>

            <p v-else>
                Sem descrição.
            </p>

            <span>
                Status: {{ tarefa.status }}
            </span>

            <button @click="$emit('concluir', tarefa.id)">
                Alterar status
            </button>

            <button @click="$emit('excluir', tarefa.id)">
                Excluir
            </button>
        </article>
    `
}

const FormularioTarefa = {
    emits: ['nova-tarefa'],

    data() {
        return {
            titulo: '',
            descricao: ''
        }
    },

    methods: {
        enviar() {
            if (!this.titulo.trim()) {
                alert('Informe o título da tarefa.')
                return
            }

            this.$emit('nova-tarefa', {
                titulo: this.titulo,
                descricao: this.descricao
            })

            this.titulo = ''
            this.descricao = ''
        }
    },

    template: `
        <form @submit.prevent="enviar">
            <input
                v-model="titulo"
                placeholder="Título da tarefa"
            >

            <textarea
                v-model="descricao"
                placeholder="Descrição"
            ></textarea>

            <button type="submit">
                Cadastrar
            </button>
        </form>
    `
}

const app = Vue.createApp({
    components: {
        FormularioTarefa,
        ItemTarefa
    },

    data() {
        return {
            tarefas: []
        }
    },

    methods: {
        cadastrarTarefa(dados) {
            console.log('Nova tarefa recebida:', dados)
        },

        alterarStatus(id) {
            console.log('Alterar status da tarefa:', id)
        },

        excluirTarefa(id) {
            console.log('Excluir tarefa:', id)
        }
    }
})

app.mount('#app')

