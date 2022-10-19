const dynamicStyles = (size) => {
    return { height: `${size}px` }
}

const Spacer = ({ size }) => {

    return <div data-testid="spacer" style={dynamicStyles(size)}></div>
}

export default Spacer;