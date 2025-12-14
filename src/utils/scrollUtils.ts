// Fresh scroll utilities - minimal and clean
export const scrollToElement = (elementId: string, offset: number = 80) => {
  const element = document.getElementById(elementId.replace('#', ''));
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const scrollToTop = () => {
  // Use instant scroll first, then smooth
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
