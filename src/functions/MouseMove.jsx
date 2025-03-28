export const handleMouseMove = (e, setPosition) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let offsetX = ((centerX - clientX) / centerX) * 8;
    let offsetY = ((centerY - clientY) / centerY) * 8;

    offsetX = Math.max(-5, Math.min(5, offsetX));
    offsetY = Math.max(-5, Math.min(5, offsetY));

    setPosition({ x: offsetX, y: offsetY });
};
