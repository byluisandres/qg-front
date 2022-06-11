<template>
    <header className="flex justify-between items-center py-4 px-6 bg-neutral-900">
        <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none lg:hidden" @click="openSidebar">
                <MenuIcon class="h-6 w-6" />
            </button>
        </div>

        <div className="flex items-center">
            <div className="ml-3 relative">
                <UserDropdown />
            </div>
        </div>
    </header>
</template>

<script>
import UserDropdown from '../components/UserDropdown.vue'
import { MenuIcon } from "@heroicons/vue/solid"
import { mapStores } from 'pinia'
import { useSidebarStore } from '../stores/sidebar'
export default {
    name: "header",
    components: {
        UserDropdown,
        MenuIcon,
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapStores(useSidebarStore)
    },
    methods: {
        openSidebar() {
            this.sidebarStore.open(true);
        }
    }
}
</script>

<style>
</style>