import { css } from 'styled-components';
import { breakpoints } from '../index'

export function breakpointsMedia(cssByBreakpoints) {
    const breikpointsNames = Object.keys(cssByBreakpoints)
    return breikpointsNames.map((breakpointName) => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
            ${cssByBreakpoints[breakpointName]}
        }
    `)
}