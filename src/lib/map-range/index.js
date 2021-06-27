const mapRange = ({ value, min1 = 0, max1 = 1, min2, max2 }) =>
  ((value - min1) * (max2 - min2)) / (max1 - min1) + min2

export default mapRange
