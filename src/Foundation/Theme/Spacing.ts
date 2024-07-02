const baseUnit = 4
export const maxScale = 1.35
export const minScale = 0.8

export const Scale = (scale: number) =>
  Math.max(Math.min(scale, maxScale), minScale)

/**
 * @param {number} size - Multiplies by base unit of 4.
 **/
export const Size = (multiplier: number) => baseUnit * multiplier

export const Spacing = {
  /**
   * half: 0.5
   */
  half: Size(1 / 8),
  /**
   * one: 1
   */
  one: Size(0.25),
  /**
   * two: 2
   */
  two: Size(0.5),
  /**
   * tiny: 4
   */
  tiny: Size(1),
  /**
   * small: 8
   */
  small: Size(2),
  /**
   * medium: 12
   */
  medium: Size(3),
  /**
   * mediumX: 16
   */
  mediumX: Size(4),
  /**
   * mediumXL: 20
   */
  mediumXL: Size(5),
  /**
   * large: 24
   */
  large: Size(6),
  /**
   * largeX: 40
   */
  largeX: Size(10),
  /**
   * largeXL: 48
   */
  largeXL: Size(12),
  /**
   * huge: 64
   */
  huge: Size(16),
  /**
   * hugeX: 72
   */
  hugeX: Size(18),
  /**
   * hugeXL: 100
   */
  hugeXL: Size(25),
}
