import styled from "styled-components"
import { motion } from "framer-motion"

export const TextContainer = styled(motion.div)`
    border-top: ${ props => props.isBorderTop ? '1px solid var(--color-cream)': 'none'};
    padding-top: ${ props => props.isBorderTop ? '6rem': 'none'};
    border-bottom: ${ props => props.isBorderBottom ? '1px solid var(--color-cream)': 'none'};
    padding-bottom: ${ props => props.isBorderBottom ? '6rem': 'none'};
    width: 100%;
`