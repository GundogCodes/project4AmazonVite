import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ItemPage from '../pages/ItemPage/ItemPage.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ItemPage',
  component: ItemPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],

  // NOTE: Use decorators property to wrap stories in react-router components to simulate
  //       a route path with the id param.
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/item/64ee2bf303edb31e00ae01b7']}>
        <Routes>
          <Route path="/item/:id" element={<Story />} />
        </Routes>
      </MemoryRouter>
    ),
  ],
};

const categories = [
  { name: 'Electronics', sortOrder: 10 },
  { name: 'Sporting Goods', sortOrder: 20 },
  { name: 'Mens Clothing', sortOrder: 30 },
  { name: 'Womens Clothing', sortOrder: 40 },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PS5 = {
  args: {
    // NOTE: This function must match the equivalent one in items-api.cjs
    getById: async (id) => {
      return {
        name: 'Sony Playstation 5',
        description:
          'The PS5 console unleashes new gaming possibilities that you never anticipated. Experience lightning fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers, and 3D Audio, and an all-new generation of incredible PlayStation games.',
        category: categories[0],
        price: 547.9,
        rating: 4.9,
        image: '/img/PS5.png',
      };
    },
  },
};
