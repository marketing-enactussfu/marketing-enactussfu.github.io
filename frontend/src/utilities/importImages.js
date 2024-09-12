// Utility function to dynamically import all images from a folder
export function importAll(r) {
  let images = {};
  
    r.keys().forEach((item, index) => {
      images[item.replace('./', '')] = r(item);
    });
    
  return images;
}

