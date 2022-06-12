<template>
    <div class="flex">

        <!-- Backdrop -->
        <div class="
        fixed z-10 inset-0 bg-neutral-900 opacity-10 transition-opacity lg:hidden py-2 hidden"></div>

        <!-- End Backdrop -->
        <aside class="fixed z-20 inset-y-0 left-0 w-64 transition duration-300 transform bg-neutral-900
            overflow-y-auto lg:translate-x-0 lg:static lg:inset-0 -translate-x-full ease-in">
            <div class="flex items-center justify-center mt-5">
                <div className="flex items-center">
                    <span className="text-white text-2xl mx-2 font-semibold">
                        QueGastos
                    </span>
                </div>
            </div>
            <div class="mt-2">
                <nav>
                    <ul>
                        <li class="items-center duration-200 py-1 px-6" v-for="(item, index) in menu" :key="index">
                            <router-link v-if="item.to" :to="item.to" class="flex p-2"
                                :class="active ? 'bg-neutral-800  border-l-1 border-l-neutral-700 ' : ''">
                                <span class="bg-neutral-700 p-1 rounded-lg" v-if="item.icon">
                                    <Icon :name="item.icon" />
                                </span>
                                <span class="flex items-center text-neutral-200 mx-2 ">
                                    {{ item.title }}
                                </span>
                            </router-link>
                            <span v-else
                                class="flex  text-neutral-400  mx-2 py-1 font-semibold">
                                {{ item.title }}
                            </span>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    </div>
</template>

<script>
import { mapStores } from 'pinia'
import { useSidebarStore } from '../stores/sidebar'
import { menu } from '../menu';
import Icon from './Icon.vue'

export default {
    name: "sidebar",
    components: {
        Icon
    },
    computed: {
        ...mapStores(useSidebarStore)
    },
    data() {
        return {
            open: "",
            menu: menu,
            active: false
        }
    },
    created() {
        this.open = this.sidebarStore.isOpen;
    }

}
</script>

<style>
</style>