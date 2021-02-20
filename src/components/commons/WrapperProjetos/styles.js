import { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia'
import styled from 'styled-components'

export const WrapperProjetosContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 32px;
    padding-bottom: 32px;
        
    ${breakpointsMedia({
        md: css`
            padding-top: 64px;
            padding-bottom: 64px;
        `
    })}
`

export const SectionTitle = styled.span`
    font-family: 'Fira Sans Condensed', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 36px;
    line-height: 43px;
    text-align: center;
    padding-bottom: 32px;
    
    ${breakpointsMedia({
        md: css`
           font-size: 60px;
            line-height: 72px;
            padding-bottom: 64px; 
        `
    })}
`

export const CardSection = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    ${breakpointsMedia({
        md: css`
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: row;
            flex-wrap: wrap;            
        `
    })}
`