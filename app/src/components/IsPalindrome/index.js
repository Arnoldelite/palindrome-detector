import React from 'react'
import PropTypes from 'prop-types'
import { Tag, Tooltip } from 'antd'

const IsPalindrome = ({ isPalindrome }) => {
  const tagText = 'palindrome status'
  if (isPalindrome) {
    return (
      <Tooltip placement="bottom" title={tagText}>
        <Tag color="green">Palindrome</Tag>
      </Tooltip>
    )
  }
  return (
    <Tooltip placement="bottom" title={tagText}>
      <Tag color="red">Palindrome</Tag>
    </Tooltip>
  )
}

IsPalindrome.propTypes = {
  isPalindrome: PropTypes.bool,
}

IsPalindrome.defaultProps = {
  isPalindrome: false,
}

export default IsPalindrome
