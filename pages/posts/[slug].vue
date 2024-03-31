<template>
  <div v-if="post" class="mx-96 flex flex-wrap justify-center items-center my-10">
    <div class="prose">
      <div class="flex items-center w-full">
          <NuxtImg :src="post.user.avatar" class="w-16 h-16 rounded-full mr-4"/>
          <div class="flex flex-col">
            <h4 class="mt-0">{{ fullName.value }}</h4>
            <div> {{ fullDate.value }}</div>
          </div>
      </div>
      <div class="flex w-full">
        <h1 class="mb-0">
          {{ post.title }}
        </h1>
      </div>
      <div>
        <NuxtImg :src="post.image" :alt="post.title" placeholder />
      </div>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PostWithUser } from '~/types';
import { useBlogStore } from '~/stores'
import { useUser } from '~/composables/useUser';
import { useDate } from '~/composables/useDate';
import sanitizeHtml from 'sanitize-html';

const { params } = useRoute()

const blog = useBlogStore()
const { getPostDetail } = storeToRefs(blog)
const { fetchDetail } = blog
const post = ref<PostWithUser>()
const fullName = ref()
const fullDate = ref()
const content = ref();

watch(post, (newPost) => {
  const { getFullDate } = useDate(newPost.publishedAt)
  const { getFullName } = useUser(newPost.user)
  fullName.value = getFullName
  fullDate.value = getFullDate
}, { once: true})

onMounted(async () => {
  await nextTick();
  await fetchDetail(params.slug)
  post.value = getPostDetail.value
  if (post.value?.content) {
    content.value = sanitizeHtml(post.value.content)
  }
})
</script>
~/composables/useUser~/composables/useDate
