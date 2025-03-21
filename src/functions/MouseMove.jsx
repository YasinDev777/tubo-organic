export const handleMouseMove = (e, setPosition) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    let offsetX = ((centerX - clientX) / centerX) * 8; // Уменьшил движение
    let offsetY = ((centerY - clientY) / centerY) * 8;

    // Ограничиваем движение в пределах ±5% от изначальной позиции
    offsetX = Math.max(-5, Math.min(5, offsetX));
    offsetY = Math.max(-5, Math.min(5, offsetY));

    setPosition({ x: offsetX, y: offsetY });
};
