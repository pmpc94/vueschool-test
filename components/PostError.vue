<template>
      <div class="prose prose-2xl">
        <h1>404 - Post not found</h1>
            <p>It looks like something went wrong :(</p>
            <p>
                Go back to <NuxtLink :to="'/posts'" @click="handleError">posts.</NuxtLink>
            </p>
      </div>
</template>

<script setup>
const error = useError();
</script>
