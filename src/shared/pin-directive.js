export default function(element, binding) {
  Object.keys(binding.value).forEach(key => {
    element.style[key] = binding.value[key];
    // if (key === "top") element.style[key] = "120px";
  });
  // element.style.position = "absolute";
  // element.style.top = "5px";
  // element.style.right = "5px";
}
