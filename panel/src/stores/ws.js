import { writable } from "svelte/store"

export const taskdata = writable({
    max: 0,
    running: 0,
    queued: 0
})

export const statusdata = writable({
    status: "loading"
})

export const nodesdata = writable({
    online: 0,
    faulty: 0
})

export const apisocket = writable({
    /**
     * @type {WebSocket | null}
     */
    websocket: null
})