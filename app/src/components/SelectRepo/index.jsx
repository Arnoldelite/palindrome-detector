import React from 'react'
import { observer } from 'mobx-react'
import { Select, Tooltip } from 'antd'

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
    const selectText = 'select a programming language'
    return (
      <Tooltip placement="bottom" title={selectText}>
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
            <Option value="C">C</Option>
            <Option value="C++">C++</Option>
            <Option value="Typescript">Typescript</Option>
            <Option value="C#">C#</Option>
            <Option value="Go">Go</Option>
            <Option value="Dart">Dart</Option>
            <Option value="HTML">HTML</Option>
            <Option value="Objective-J">Objective-J</Option>
            <Option value="Rust">Rust</Option>
            <Option value="Kotlin">Kotlin</Option>
            <Option value="Scala">Scala</Option>
            <Option value="Crystal">Crystal</Option>
          </Select>
        </div>
      </Tooltip>
    )
  }
}

export default SelectRepo
