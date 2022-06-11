import { defineStore, acceptHMRUpdate } from 'pinia'

export const useSidebarStore = defineStore({
    id: "sidebar",
    state: () => ({
        isOpen: false,
    }),
    getters: {

    },
    actions: {
        open(isOpen) {
            this.isOpen = isOpen;
        }
    }
});