// modules/data.js
export const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

export function addItem(item) {
  data.push(item);
}
