<template>
    <div>
      <h1>{{ error.message }} }}</h1>
        <p>It looks like something's wrong.</p>
        <p>
            Go back to <a @click="handleError">posts.</a>
        </p>
    </div>
</template>

<script setup>
const error = useError();

const handleError = () => {
  clearError({
    redirect: '/posts',
  });
};
</script>
