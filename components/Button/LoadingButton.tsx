import React from 'react'
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import { Colors, Spacing, Typography } from '../../src/Foundation/Theme'
import { useTranslation } from 'react-i18next'
import Text from '../Text/Text'

interface Props {
  testID?: string
  label?: string
  isLoading?: boolean
  onPress: () => void
  containerStyle?: StyleProp<ViewStyle>
  buttonStyle?: StyleProp<ViewStyle>
  labelStyle?: StyleProp<TextStyle>
  activityIndicatorColor?: string
}

const LoadingButton = (props: Props) => {
  const { t } = useTranslation()
  const {
    isLoading = false,
    onPress,
    label = t('acknowledgement:continue'),
    testID,
    containerStyle = {},
    buttonStyle = {},
    labelStyle = {},
    activityIndicatorColor = Colors.brand.ArcticWhite,
  } = props

  return (
    <View style={[styles.buttonWrapper, containerStyle]}>
      <TouchableOpacity
        accessibilityRole="button"
        activeOpacity={0.8}
        // Note. This component needs refactoring as it previously assigned the testID
        // to the ActivityIndicator, not the button itself. To maintain compatibility with
        // older test cases, we now check the loading state and assign the ID accordingly.
        {...(!isLoading && { testID })}
        style={
          isLoading
            ? [styles.button, buttonStyle, styles.buttonDisabled]
            : [styles.button, buttonStyle]
        }
        disabled={isLoading}
        onPress={onPress}>
        <Text accessible={false} style={[styles.label, labelStyle]}>
          {!isLoading ? label : ' '}
        </Text>
      </TouchableOpacity>
      <View style={styles.ActivityIndicatorWrapper}>
        {isLoading ? (
          <ActivityIndicator testID={testID} color={activityIndicatorColor} />
        ) : (
          <></>
        )}
      </View>
    </View>
  )
}

export const buttonMinHeight = 48

const styles = StyleSheet.create({
  buttonWrapper: {
    width: '100%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: Colors.brand.ArcticWhite,
    borderRadius: Spacing.tiny,
    padding: 12,
    paddingHorizontal: 20,
    minHeight: buttonMinHeight,
  },
  buttonDisabled: {
    opacity: 0.2,
  },
  ActivityIndicatorWrapper: {
    alignSelf: 'center',
    position: 'absolute',
    top: 13,
  },
  label: {
    color: Colors.brand.DigitalBlue,
    fontFamily: Typography.Font.family.bold,
    fontSize: Typography.Font.size.large,
    letterSpacing: 0.2,
    lineHeight: 24,
  },
})

export default LoadingButton
