<template>
    <header className="flex justify-between items-center py-4 px-6 bg-neutral-900">
        <div className="flex items-center">
            <button className="text-gray-500 focus:outline-none lg:hidden">
                <MenuIcon class="h-6 w-6"/>
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
export default {
    name: "header",
    components: {
        UserDropdown,
        MenuIcon,
    }
}
</script>

<style>
</style>