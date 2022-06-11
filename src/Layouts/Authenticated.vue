<template>
    <div class="flex h-screen font-roboto">
        <Sidebar />
        <div class="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                <div class="container mx-auto sm:px-4 pt-4 relative">
                    <div class="p-8 bg-white rounded-md">
                        <slot />
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import Header from '../Partials/Header.vue'
import Sidebar from '../Partials/Sidebar.vue'
export default {
    name: "Authenticated",
    components:{
        Sidebar,
        Header
    }
}
</script>

<style>
</style>