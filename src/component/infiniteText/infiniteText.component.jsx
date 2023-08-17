import { FlexCss, OverflowContainer, Text } from "./infiniteText.styled"

const InfiniteText = () => {
    return (
        <OverflowContainer>
            <FlexCss moveUp={true}>
                <Text moveUp={true}>&nbsp;Front end * Developper * Front end *</Text>
                <Text moveUp={true}>&nbsp;Front end * Developper * Front end *</Text>
            </FlexCss>
            <FlexCss moveUp={false}>
                <Text moveUp={false}>&nbsp;Front end * Developper * Front end *</Text>
                <Text moveUp={false}>&nbsp;Front end * Developper * Front end *</Text>
            </FlexCss>
            <FlexCss moveUp={true}>
                <Text moveUp={true}>&nbsp;Front end * Developper * Front end *</Text>
                <Text moveUp={true}>&nbsp;Front end * Developper * Front end *</Text>
            </FlexCss>
        </OverflowContainer>
    )
}

export default InfiniteText;