import React from 'react'
import { observer } from 'mobx-react'
import { List, Skeleton, Icon, Avatar, Tag, Badge, Button, Tooltip } from 'antd'
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
    const languageText = 'programming language'
    const iconText = 'repository information'
    const buttonText = 'jump to repository on github'
    return (
      <div>
        <SelectRepo />
        <div className="popular">
          <List
            className="popular__list"
            loading={store.isLoading}
            itemLayout="horizontal"
            dataSource={store.popularRepos}
            renderItem={item => (
              <List.Item
                key={item.objectId}
                actions={[
                  <Tooltip placement="bottom" title={iconText}>
                    <Icon type="fire" onClick={() => this.viewRepo(item)} theme="outlined" />
                  </Tooltip>,
                ]}
              >
                {item.has_issues && (
                  <Badge className="badge" dot title="repo issues" offset={[25, 0]} />
                )}
                <Skeleton title={false} loading={store.isLoading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.owner.avatar_url} />}
                    title={
                      <div>
                        <Tooltip placement="bottom" title={buttonText}>
                          <Button ghost href={item.html_url}>
                            {' '}
                            {item.name}
                          </Button>
                        </Tooltip>
                      </div>
                    }
                  />
                  <Tooltip placement="bottom" title={languageText}>
                    <Tag color="green" href={item.html_url}>
                      {item.language}
                    </Tag>
                  </Tooltip>
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
