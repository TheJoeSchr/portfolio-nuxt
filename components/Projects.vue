<template>
  <div id="blog" class="pt-36">
    <Container>
      <div class="mb-12 space-y-2 text-center">
        <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white">Latest Projects</h2>
        <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300">
            Back in Austria, I have successfully used my expertise in several professional projects.
        </p>
      </div>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
          class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src="/projects/clearing.png"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
              Ambulanz Clearing
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              <div>Documentation Management "Clearing"</div><br/> 

              <b>Fullstack Developer</b><br/>
              Typescript, Graphql/apollo, Vue<br/>
              Postgresql PHP, Laravel, graphql/lighthouse, Xataface<br/>
              Cypress<br/>
              Docker, nginx<br/>
            </p>
            <!--
            <a class="inline-block" href="#">
              <span class="text-info dark:text-blue-300">Read more</span>
            </a>
            -->
          </div>

        </div>
        <div
          class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src="/projects/ergo.png"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
              Ergo Prototype
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                <div>FH Krems, Occupational Therapy Degree Program</div><br/>
                UI Prototype<br/>
                <b>Frontend Developer</b><br/>
                Quasar, Vue 2.0 with composition api<br/>
            </p>
            <a class="inline-block" href="https://ergo-prototype.netlify.app" target="_blank">
              <span class="text-info dark:text-blue-300">Read more</span>
            </a>
          </div>

        </div>
        <div
          class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
          <div class="relative overflow-hidden rounded-xl">
            <img
              src="/projects/sprachraum.png"
              alt="art cover" loading="lazy" width="1000" height="667"
              class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
          </div>
          <div class="mt-6 relative">
            <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
              Sprachraum WorkItAut
            </h3>
            <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
              <b>Fullstack Entwickler</b><br/>
              Jamstack, Vue, Netlify-Edge<br/>
            </p>
            <a class="inline-block" href="https://sprachraum.workitaut.at" target="_blank">
              <span class="text-info dark:text-blue-300">Read more</span>
            </a>
          </div>

        </div>
      </div>
    </Container>
  </div>
</template>
