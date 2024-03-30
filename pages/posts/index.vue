<template>
  <div class="mx-80 flex flex-wrap justify-center items-center">
    <div class="prose prose-xl prose-p:text-slate-600 my-10 text-center">
      <h1>Our Blog</h1>
      <p>This is a beautiful and simple blog created by Pedro Carolina specially tailored for the Senior Frontend Developer Test. I hope you enjoy it.</p>
      <input class="mr-2" type="checkbox" id="orderCheckbox" v-model="isOrderChecked" @change="onOrderChange" /> 
      <label for="orderCheckbox">Newest to oldest</label>
    </div>
  <PostCard v-for="post in posts" :key="post.id"
      :id="post.id"
      :user="post.user"
      :title="post.title" 
      :excerpt="post.excerpt" 
      :image-url="post.image"
    />
    <div class="mb-4 w-full text-center">
      <button v-if="postsOffset >= 10" @click="previousPage" class="mr-4 bg-slate-100 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Previous page</button>
      <button @click="nextPage" class=" bg-slate-100 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">Next page</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PostWithUser } from '~/types/index'
import { useBlogStore } from '../../stores'
import { ORDER } from '../../constants'
const route = useRouter()
const { query } = useRoute()
const blog = useBlogStore()
const { getPosts } = storeToRefs(blog)
const { fetch } = blog

const posts = ref([] as PostWithUser[])
const isOrderChecked = ref(query.order === ORDER.NEWEST ? true : false)
const postsOrder = ref(ORDER.OLDEST)
const postsOffset = ref(0)

const onOrderChange = async () => {
  postsOrder.value = isOrderChecked.value ? ORDER.NEWEST : ORDER.OLDEST
  route.push({
        query: { order: postsOrder.value }
      });
  await setPosts()
}

const previousPage = async () => {
  postsOffset.value -= 10
  await setPosts()
}

const nextPage = async () => {
  postsOffset.value += 10
  await setPosts()
}

const setPosts = async () => {
  await fetch(postsOffset.value, postsOrder.value)
  posts.value = getPosts.value
}

onMounted(async () => {
  await nextTick();
  if (query.order) {
    postsOrder.value = query.order
  }
  await setPosts()
})
</script>
