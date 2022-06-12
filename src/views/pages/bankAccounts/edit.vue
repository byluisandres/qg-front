<template>
    <Authenticated>
        <section class="mb-3">
            <span class="text-2xl font-semibold">Editar</span>
        </section>
        <section>
            <QGCard :title="'Datos de la cuenta bancaria'">
                <form method="POST" class="mt-5" @submit.prevent="onSubmit">
                    <div class="mb-3">
                        <o-field label="Description">
                            <o-input type="text" name="description" v-model="form.description"></o-input>
                        </o-field>
                    </div>
                    <div class="mb-3">
                        <o-field label="Swift">
                            <o-input type="swift" v-model="form.swift"></o-input>
                        </o-field>
                    </div>
                    <div class="mb-3">
                        <o-field label="Iban">
                            <o-input type="iban" v-model="form.iban"></o-input>
                        </o-field>
                    </div>
                    <div class="flex justify-end">
                        <div>
                            <button class=" px-4 py-2 bg-green-900 border 
                            border-transparent rounded-md font-semibold text-xs 
                            text-white uppercase tracking-widest active:bg-gray-900 
                            transition ease-in-out duration-15 text-center mr-3" type="submit">
                                Guardar
                            </button>
                            <button class=" px-4 py-2 bg-red-900 border 
                            border-transparent rounded-md font-semibold text-xs 
                            text-white uppercase tracking-widest active:bg-red-900 
                            transition ease-in-out duration-15  text-center" type="button" @click="goBack">
                                Volver
                            </button>

                        </div>
                    </div>
                </form>
            </QGCard>
        </section>
    </Authenticated>
</template>

<script>
import Authenticated from '../../../Layouts/Authenticated.vue';
import QGCard from '../../../components/QGCard.vue';



export default {
    components: {
        Authenticated,
        QGCard
    },
    data() {
        return {
            form: {
                description: "",
                swift: "",
                iban: ""
            }
        }
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'cuentas-bancarias' });
        },
        onSubmit() {
            console.log(this.form)
        }
    }
}
</script>

<style>
</style>