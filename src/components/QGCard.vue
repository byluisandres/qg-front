<template>
    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow rounded-lg  border-0">
        <div class="rounded-t bg-neutral-900 mb-0 px-4 py-4">
            <div class="text-center flex justify-between">
                <h6 class="text-gray-50 text-xl font-bold">
                    {{ title }}
                </h6>
            </div>
        </div>
        <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'QGCard',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style>
</style>