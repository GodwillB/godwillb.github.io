<template>
    <div class="relative bg-gray-50">
      
  
      <main class="lg:relative">
        <div class="mx-auto w-full max-w-7xl  text-center lg:py-36 lg:text-left">
          <div class="px-4 sm:px-8 lg:w-1/2 xl:pr-16">
            <h1 class="text-2xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-3xl lg:text-3xl xl:text-4xl">
              <span class="block xl:inline">Hallo !</span>
              {{ ' ' }}
             
            </h1>
            <h1 class="text-4xl font-bold mt-5 tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl">
              <span class="block xl:inline">I'm <span class="block text-indigo-600 xl:inline">Godwill Barasa</span> </span>
              {{ ' ' }}
              
            </h1>
            <h1 class="text-xl font-bold mt-5 tracking-tight text-gray-900 sm:text-3xl md:text-3xl lg:text-2xl xl:text-2xl">
              <span class="block xl:inline">Web Developer,  Technical Writer and Speaker</span>
              {{ ' ' }}
              
            </h1>
            <p class="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg">Download CV</a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="/blog" class="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg">Read My Articles</a>
              </div>
            </div>
          </div>
        </div>
        <div class="relative h-64 w-full sm:full md:full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
          <img class="absolute inset-0 h-full w-full object-cover" src="/img/godwill.codes.jpg" alt="Godwill Barasa" />
        </div>
      </main>
    </div>
   
    
  </template>
  
  
  <script setup>
  import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
  import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
  } from '@heroicons/vue/24/outline'
  import { ChevronDownIcon } from '@heroicons/vue/20/solid'
  
  useHead({
    title: 'Godwill Barasa - Software Engineer, Technical Writer and Speaker',
    meta: [
      { name: 'description', content: 'My amazing site.' }
    ],
    bodyAttrs: {
      class: 'test'
    },
    script: [ { children: 'console.log(\'Hello world\')' } ]
  })
  
  const features = [
    {
      name: 'Analytics',
      href: '#',
      description: 'Get a better understanding of where your traffic is coming from.',
      icon: ChartBarIcon,
    },
    {
      name: 'Engagement',
      href: '#',
      description: 'Speak directly to your customers in a more meaningful way.',
      icon: CursorArrowRaysIcon,
    },
    { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
    {
      name: 'Integrations',
      href: '#',
      description: "Connect with third-party tools that you're already using.",
      icon: Squares2X2Icon,
    },
    {
      name: 'Automations',
      href: '#',
      description: 'Build strategic funnels that will drive your customers to convert',
      icon: ArrowPathIcon,
    },
  ]
  const callsToAction = [
    { name: 'Watch Demo', href: '#', icon: PlayIcon },
    { name: 'Contact Sales', href: '#', icon: PhoneIcon },
  ]
  const resources = [
    {
      name: 'Help Center',
      description: 'Get all of your questions answered in our forums or contact support.',
      href: '#',
      icon: LifebuoyIcon,
    },
    {
      name: 'Guides',
      description: 'Learn how to maximize our platform to get the most out of it.',
      href: '#',
      icon: BookmarkSquareIcon,
    },
    {
      name: 'Events',
      description: 'See what meet-ups and other events we might be planning near you.',
      href: '#',
      icon: CalendarIcon,
    },
    { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
  ]
  const recentPosts = [
    { id: 1, name: 'Boost your conversion rate', href: '#' },
    { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
    { id: 3, name: 'Improve your customer experience', href: '#' },
  ]
  </script>