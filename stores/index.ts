import type { Post } from '../types'
import { fetchPosts } from '../services'
 

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: <Post[]>[],
  }),
  getters: {
    getPosts({ posts }) {
      return posts
    }
  },
  actions: {
    async fetch(offset: number, order: string) {
      this.posts = await fetchPosts(offset, order)
    }
  }
})
