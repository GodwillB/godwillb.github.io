<template>
  <div class="relative bg-gray-800">
    <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
      <img class="h-full w-full object-cover" src="/img/godwill.codes.jpg" alt="Godwill Barasa" />
    </div>
    <div class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div class="md:ml-auto md:w-1/2 md:pl-10">
        <h2 class="text-lg font-semibold text-gray-300">Award winning support</h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">We’re here to help</p>
        <p class="mt-3 text-lg text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt duis.</p>
        <div class="mt-8">
          <div class="inline-flex rounded-md shadow">
            <a href="#" class="inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-50">
              Invite me to speak
              <ArrowTopRightOnSquareIcon class="-mr-1 ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>

    
    
    <blog-1></blog-1>
    <Breadcrumb></Breadcrumb>
    <Footer></Footer>

</template>

<script setup>
 useHead({
    title: 'Godwill Barasa Blog - Software Engineer, Technical Writer and Speaker',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { children: 'console.log(\'Hello world\')' } ]
  })

import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Solutions', href: '#' },
  { name: 'Pricing', href: '#' },
  { name: 'Docs', href: '#' },
  { name: 'Company', href: '#' },
]
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>