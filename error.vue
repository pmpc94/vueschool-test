<template>
    <div class="h-screen flex flex-col justify-center items-center prose">
      <h1>{{ error.message }} }}</h1>
        <p>It looks like something's wrong.</p>
        <p>
            Go back to <NuxtLink :to="'/posts'" @click="handleError">posts.</NuxtLink>
        </p>
    </div>
</template>

<script setup>
const error = useError();
</script>
