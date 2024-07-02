import React from 'react'
import {
  Text as KittenText,
  TextProps as KittenTextProps,
} from '@ui-kitten/components'

import { StyleSheet, Text, TextProps } from 'react-native'
import { Colors, maxScale, minScale } from '../../src/Foundation/Theme'
import { observer } from 'mobx-react'

type Props =
  | ({ kitten?: false; category?: never } & TextProps)
  | ({ kitten: true } & KittenTextProps)

const TextAtom = (props: Props) => {
  const { style, ...rest } = props
  return props?.kitten ? (
    <KittenText
      accessibilityRole="text"
      maxFontSizeMultiplier={maxScale}
      minimumFontScale={minScale}
      {...props}
    />
  ) : (
    <Text
      accessibilityRole="text"
      maxFontSizeMultiplier={maxScale}
      minimumFontScale={minScale}
      style={[styles.defaultTextStyles, style]}
      {...rest}
    />
  )
}

const styles = StyleSheet.create({
  defaultTextStyles: {
    color: Colors.brand.GraphiteGrey,
  },
})

export default observer(TextAtom)
