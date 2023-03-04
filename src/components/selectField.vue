<template>
    <div :class="['relative']" tabindex="0" @blur="dropDown = false" :style="container">
        <div @click="dropDown = true" class="inline-flex w-full h-full overflow-hidden border border-green-500">
            <div class="relative h-full w-full flex">

                <!-- prepend -->
                <div v-if="$slots.prepend" class="h-fit my-auto truncate">
                    <slot name="prepend"></slot>
                </div>

                <div class="h-fit my-auto px-2 flex-auto">
                    <span v-if="props.itemText & selected != props.label">{{ selected[props.itemText] }}</span>
                    <span v-else>{{ selected }}</span>

                </div>

                <!-- append -->
                <div v-if="$slots.append" class="h-fit my-auto truncate">
                    <slot name="append"></slot>
                </div>
                <div v-else class="h-fit my-auto truncate flex justify-end px-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16.59 8.59L12 13.17L7.41 8.59L6 10l6 6l6-6l-1.41-1.41z" />
                    </svg>
                </div>

            </div>

        </div>

        <div v-if="dropDown" :class="['absolute top-[0px] w-full bg-white shadow-box', dropDown ? 'z-10' : '']">

            <div class="w-full cursor-pointer py-2 px-2 hover:bg-gray-100 " @click="selecionar(item)"
                v-for="(item, index) in itens" :key="index">


                <span v-if="props.itemText">{{ item[itemText] }}</span>
                <span v-else>{{ item }}</span>


            </div>

        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps(['height', 'itens', 'width', 'item-text', 'label'])
const emits = defineEmits(['update:modelValue'])

const dropDown = ref(false)

const selected = ref(props.label)
watch(selected, (newX) => {
    
    emits('update:modelValue', newX)
})

const selecionar = (obj) => {
    dropDown.value = false
    selected.value = obj
}

const container = ref({
    height: props.height ? props.height : '48px',
    width: props.width ? props.width : '100%'
})


</script>

<style scoped>
.shadow-box {
    -webkit-box-shadow: 0px 3px 14px -1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 3px 14px -1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 3px 14px -1px rgba(0, 0, 0, 0.75);
}
</style>