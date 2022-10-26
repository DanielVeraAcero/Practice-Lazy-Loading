const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const container = entry.target;
    const image = container.firstChild;
    const url = image.dataset.src;
    // load image
    image.src = url;
    // unobserve image
    observer.unobserve(container);
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(isIntersecting).forEach(loadImage)
});

export const registerImage = (image) => {
    observer.observe(image)
};

