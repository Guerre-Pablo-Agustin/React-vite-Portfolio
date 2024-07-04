export const fadeIn = (direction, delay) => {
    return{
        hidden: {
            y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
            x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
            opacity: direction === 'up' ? 0 : direction === 'down' ? 0 : 1,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.4,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75]

            }
    }
}
}