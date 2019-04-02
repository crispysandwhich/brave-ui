/* This Source Code Form is subject to the terms of the Mozilla Public
 * License. v. 2.0. If a copy of the MPL was not distributed with this file.
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

import styled from 'styled-components'
import palette from '../../../theme/colors'

export const MainToggleWrapper = styled<{}, 'div'>('div')`
  font-family: Poppins, sans-serif;
  position: relative;
  display: flex;
  width: 100%;
  border-radius: 6px;
  background-color: #dee2e6;
  border: 1px solid #dbdfe3;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  padding: 18px 34px;
  margin-bottom: 25px;
`

export const ToggleHeading = styled<{}, 'div'>('div')`
  display: flex;
  align-items: center;
  width: 100%;
`

export const StyledTitle = styled<{}, 'div'>('div')`
  margin: 0 0 0 11px;
  flex: 1;
  font-size: 28px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.2px;
  color: #4b4c5c;
  display: flex;
  align-items: center;
`

export const StyledTM = styled<{}, 'span'>('span')`
  align-self: flex-start;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0.2px;
  text-align: center;
  color: #222326;
`

export const StyledLogoWrapper = styled<{}, 'div'>('div')`
  width: 66px;
  height: 66px;
`

export const StyledTOSWrapper = styled<{}, 'div'>('div')`
  display: block;
  margin-top: 20px;
  font-family: Muli, sans-serif;
`

export const StyledServiceText = styled<{}, 'span'>('span')`
  color: ${palette.grey800};
  font-size: 14px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 18px;
`

export const StyledServiceLink = styled<{}, 'a'>('a')`
  cursor: pointer;
  color: ${palette.blue500};
  font-weight: 600;
`
