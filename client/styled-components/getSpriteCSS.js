import getSpriteJSON from '../sprites/sprite';

const getSpriteCSS = specificSpriteImgName => {
  const{ width, height, offset_x, offset_y, escaped_image } = getSpriteJSON.find(item => item.name === specificSpriteImgName);

  return `
    width: ${ width }px;
    height: ${ height }px;
    background-position-x: ${ offset_x }px;
    background-position-y: ${ offset_y }px;
    background-image: url(${ escaped_image });
  `;
};

export default getSpriteCSS;