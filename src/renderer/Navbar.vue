<template>
  <nav class="navbar">
    <ul class="navbar__nav-items">
      <li
        v-for="navbarItem in navbarItems"
        :key="navbarItem.id"
        class="navbar__nav-item"
      >
        {{ navbarItem.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navbarItems: [
        {
          name: 'Home',
          link: '#',
        },
        {
          name: 'Create',
          link: '#',
        },
        {
          name: 'Edit',
          link: '#',
        },
        {
          name: 'Save',
          link: '#',
        },
      ],
    }
  },
}
</script>
