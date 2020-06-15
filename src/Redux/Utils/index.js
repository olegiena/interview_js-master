
import * as Validate from './Validate';
import * as Const from './Const';

const updateStateItems = (arr, item, idx, checked) => {
  if (!checked) {
    return [
      ...arr.slice(0, idx),
      ...arr.slice(idx + 1)
    ];
  }

  if (checked && idx === -1) {
    return [
      ...arr,
      item
    ];
  }

  return [
    ...arr.slice(0, idx),
    item,
    ...arr.slice(idx + 1)
  ];
};

export { Validate, Const, updateStateItems };
