<template>
  <div class="text-black bg-white dark:bg-gray-900">
    <AppHeader />
    <slot />
    <AppFooter />
    <div class="fixed inset-x-6 bottom-6 z-40 mx-auto w-max">
      <a href="/cv.zip" target="_blank"
        class="flex gap-3 rounded-2xl border border-yellow-900/30 bg-gradient-to-br from-white/50 to-yellow-100 p-3 shadow-2xl shadow-yellow-900/50 backdrop-blur-xl dark:border-white/10 dark:from-gray-800 dark:to-black/70 dark:shadow-primary/50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
          class="h-5 w-5 text-yellow-600 dark:text-yellow-500">
          <path fill-rule="evenodd"
            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="text-sm font-semibold tracking-wide text-yellow-900 dark:text-white">Download my CV</span>
      </a>
    </div>
    <SpeedInsights />
  </div>
</template>
<script setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt";
</script>
<style>
@import url("~/assets/css/main.css");
@import url("primeicons/primeicons.css");

.gochi-hand-regular {
  font-family: "Gochi Hand", cursive;
  font-weight: 400;
  font-style: normal;
}

.spectral-extralight {
  font-family: "Spectral", serif;
  font-weight: 200;
  font-style: normal;
}

.spectral-extralight-italic {
  font-family: "Spectral", serif;
  font-weight: 200;
  font-style: italic;
}

.spectral-light {
  font-family: "Spectral", serif;
  font-weight: 300;
  font-style: normal;
}

.spectral-light-italic {
  font-family: "Spectral", serif;
  font-weight: 300;
  font-style: italic;
}

.spectral-regular {
  font-family: "Spectral", serif;
  font-weight: 400;
  font-style: normal;
}

.spectral-regular-italic {
  font-family: "Spectral", serif;
  font-weight: 400;
  font-style: italic;
}

.spectral-medium {
  font-family: "Spectral", serif;
  font-weight: 500;
  font-style: normal;
}

.spectral-medium-italic {
  font-family: "Spectral", serif;
  font-weight: 500;
  font-style: italic;
}

.spectral-semibold {
  font-family: "Spectral", serif;
  font-weight: 600;
  font-style: normal;
}

.spectral-semibold-italic {
  font-family: "Spectral", serif;
  font-weight: 600;
  font-style: italic;
}

.spectral-bold {
  font-family: "Spectral", serif;
  font-weight: 700;
  font-style: normal;
}

.spectral-bold-italic {
  font-family: "Spectral", serif;
  font-weight: 700;
  font-style: italic;
}

.spectral-extrabold {
  font-family: "Spectral", serif;
  font-weight: 800;
  font-style: normal;
}

.spectral-extrabold-italic {
  font-family: "Spectral", serif;
  font-weight: 800;
  font-style: italic;
}
</style >
