import { ref } from "vue";
export const useMenuItems = () => {
  const items = ref([
    {
      label: 'Router',
      icon: 'pi pi-palette',
      items: [
        {
          label: 'Styled',
          route: '/theming'
        },
        {
          label: 'Unstyled',
          route: '/unstyled'
        }
      ]
    },
    {
      label: 'External',
      icon: 'pi pi-home',
      items: [
        {
          label: 'Vue.js',
          url: 'https://vuejs.org/'
        },
        {
          label: 'Vite.js',
          url: 'https://vuejs.org/'
        }
      ]
    }
  ]);
  return { items }
}
