import { writable } from "svelte/store"

export const taskdata = writable({
    max: 0,
    running: 0
})

export const statusdata = writable({
    status: "connecting"
})