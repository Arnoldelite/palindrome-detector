import React from 'react'
import { observer } from 'mobx-react'
import { List, Skeleton, Icon, Avatar, Tag, Badge } from 'antd'
import Header from '../Header'
import { store } from '../..'
import ViewRepoModal from '../ViewRepoModal'
import SelectRepo from '../SelectRepo'

import { listPopular } from '../../actions'
import './style.scss'

@observer
class Popular extends React.Component {
  async componentDidMount() {
    await listPopular('All')
  }

  viewRepo(item) {
    store.viewRepoInfo(item)
    store.showViewRepoModal(true)
  }

  async handleChange(value) {
    await listPopular(value.key)
  }

  render() {
    return (
      <div>
        <Header />
        <SelectRepo />
        <div className="message">
          <List
            className="message__list"
            loading={store.isLoading}
            itemLayout="horizontal"
            dataSource={store.popularRepos}
            renderItem={item => (
              <List.Item
                key={item.objectId}
                actions={[
                  <Icon
                    type="fire"
                    onClick={() => this.viewRepo(item)}
                    theme="twoTone"
                    twoToneColor="green"
                  />,
                ]}
              >
                {item.has_issues && <Badge dot title="repo issues" offset={[25, 0]} />}
                <Skeleton title={false} loading={store.isLoading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.owner.avatar_url} />}
                    title={<a href={item.html_url}>{item.name}</a>}
                  />
                  <Tag color="green">{item.language}</Tag>
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
        <ViewRepoModal />
      </div>
    )
  }
}

export default Popular
