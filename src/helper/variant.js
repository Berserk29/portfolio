export const variantUp = (duration = .5) => {
    return {
        visible: {opacity: 1, y: 0, transition: {duration: duration}},
        hidden: {opacity: 0, y: '30px'}
    }
}