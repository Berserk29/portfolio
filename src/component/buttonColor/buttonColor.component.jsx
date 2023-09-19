
const ButtonColor = () => {

    const clickHandler = (primaryColor) => {
        document.documentElement.style.setProperty('--color-primary', primaryColor)
    }

    return (
        <div>
            <button onClick={() => clickHandler('#719EC7')}>
                Blue World
            </button>
            <button onClick={() => clickHandler('#9A8CC0')}>
                Purple World
            </button>
        </div>
    )
}

export default ButtonColor;