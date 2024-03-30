<template>
    <div class="border-2 rounded-xl shadow-xl p-4 mr-5 w-1/3 mb-4 prose bg-slate-100">
        <NuxtImg :src="imageUrl" class="w-full" placeholder :alt="title" />
        <div class="my-4">
            <h4>{{ title }}</h4>
        </div>
        <div class="mb-4">
            {{ excerpt }}
        </div>
        <div class="flex justify-between items-center">
            <div class="flex items-center">
                <NuxtImg :src="user.avatar" class="w-8 h-8 rounded-full mr-4"/>
                <div>{{ fullName }}</div>
            </div>
            <NuxtLink :to="`/posts/${id}`">Read more...</NuxtLink>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { User } from '../types'

const props = defineProps<{
    id: string
    user: User
    title: string | null
    excerpt: string | null
    imageUrl: string | null
}>()

const fullName = computed(() => {
    return props.user.firstName + ' ' + props.user.lastName
})
</script>
