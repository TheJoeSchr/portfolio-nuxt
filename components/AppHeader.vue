<script setup lang="ts">
  const links = [
      {
          to: "/#features",
          label: "Features",
      },
      {
          to: "/#solution",
          label: "Solution",
      },
      {
          to: "/#reviews",
          label: "Reviews",
      },
  ];
  let isToggled = false;
</script>

<template>
<header>
    <nav class="absolute z-10 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent">
        <Container>
            <div class="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                <div class="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                    <a href="/#home" aria-label="logo" class="flex items-center space-x-2">
                        <div aria-hidden="true" class="flex space-x-1">
                            <div class="h-4 w-4 rounded-full bg-gray-900 dark:bg-white"></div>
                            <div class="h-6 w-2 bg-primary"></div>
                        </div>
                        <span class="spectral-light-italic text-2xl font-bold text-gray-900 dark:text-white">JOE SCHROECKER</span>
                    </a>

                    <div class="relative flex max-h-10 items-center lg:hidden">
                      <Hamburger />
                    </div>
                </div>
                <div id="navLayer" aria-hidden="true" class="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
                <Nav id="navlinks" class="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none"/>
            </div>
        </Container>
    </nav>
</header>
</template>
<style>
    #toggle_nav:checked ~ div #hamburger #line {
        @apply translate-y-1.5 rotate-45;
    }

    #toggle_nav:checked ~ div #hamburger #line2 {
        @apply -translate-y-1 -rotate-45;
    }

    .toggled div:first-child {
        @apply translate-y-1.5 rotate-45;
    }
    .toggled div:last-child {
        @apply -translate-y-1 -rotate-45;
    }
</style>
