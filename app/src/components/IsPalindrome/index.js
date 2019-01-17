import React from 'react'
import PropTypes from 'prop-types'
import { Tag } from 'antd'

const IsPalindrome = ({ isPalindrome }) => {
  if (isPalindrome) {
    return <Tag color="green">Palindrome</Tag>
  }
  return <Tag color="pink">Not Palindrome</Tag>
}

IsPalindrome.propTypes = {
  isPalindrome: PropTypes.bool,
}

IsPalindrome.defaultProps = {
  isPalindrome: false,
}

export default IsPalindrome
