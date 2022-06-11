<template>
    <Guest>
        <h1 class="text-center text-2xl">Login</h1>
        <form method="POST" @submit.prevent="login">
            <div class="mb-3">
                <o-field label="Name">
                    <o-input type="email" name="email" v-model="form.email"></o-input>
                </o-field>
            </div>
            <div class="mb-3">
                <o-field label="Password">
                    <o-input type="password" v-model="form.password"></o-input>
                </o-field>
            </div>
            <div>
                <button
                    class=" px-4 py-2 bg-gray-900 border 
                    border-transparent rounded-md font-semibold text-xs 
                    text-white uppercase tracking-widest active:bg-gray-900 
                    transition ease-in-out duration-15 w-full text-center"
                    type="submit">
                    Inciar Sesión
                </button>
            </div>
        </form>

    </Guest>
</template>

<script>
import Guest from '../../../Layouts/Guest.vue'

export default {
    name: "login",
    components: {
        Guest,
    },
    data() {
        return {
            form: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            console.log("login", this.form)
        }
    }
}
</script>

<style>
</style>