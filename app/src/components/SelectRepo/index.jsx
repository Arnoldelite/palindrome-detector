import React from 'react'
import { observer } from 'mobx-react'
import { Select } from 'antd'

import { listPopular } from '../../actions'
import './style.scss'

const Option = Select.Option

@observer
class SelectRepo extends React.Component {
  async componentDidMount() {
    await listPopular('All')
  }

  async handleChange(value) {
    await listPopular(value.key)
  }

  render() {
    return (
      <div className="select">
        <Select
          labelInValue
          defaultValue={{ key: 'All' }}
          style={{
            width: 300,
            marginTop: 20,
            marginBottom: 20,
          }}
          onChange={this.handleChange}
        >
          <Option value="All">All</Option>
          <Option value="Javascript">Javascript</Option>
          <Option value="Ruby">Ruby</Option>
          <Option value="Java">Java</Option>
          <Option value="CSS">CSS</Option>
          <Option value="Python">Python</Option>
        </Select>
      </div>
    )
  }
}

export default SelectRepo
