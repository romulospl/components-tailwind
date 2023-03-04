import { defineStore } from "pinia";

export const useDrawerStore = defineStore("drawer", {
    state: () => ({
        drawer: false
    }),
    actions: {
        // alterDrower() {
        //     this.drawer = !this.drawer
        // }
    }
})