// Utility function to dynamically import all images from a folder
export function importAll(r) {
  let images = {};
  
  // Sort the keys in order (numerical or alphabetical)
  r.keys().sort().forEach((item, index) => {
    images[item.replace('./', '')] = r(item);
  });
  
  return images;
}

