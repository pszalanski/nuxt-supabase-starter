<template>
  <div>

    <CookieConsent></CookieConsent>

    <header class="z-50 w-full text-sm fixed top-0">
      <nav class="container mt-6 mx-auto relative bg-white border border-gray-200 rounded-xl p-3 flex items-center gap-2 dark:bg-gray-900 dark:border-gray-800" aria-label="Global">
        <div class="md:flex items-center justify-between">
          <NuxtLink class="flex-none gap-3 font-semibold flex items-center dark:text-white" to="/" aria-label="Brand">
            <img src="/icon.svg" class="h-[50px]" alt="brand image">
            <p class="text-sm leading-tight hidden md:block">Nuxt Supabase <br> Starter</p>
          </NuxtLink>
        </div>
      </nav>
    </header>

    <slot></slot>
  </div>
</template>
