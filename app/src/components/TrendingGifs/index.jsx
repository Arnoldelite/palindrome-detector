import React from 'react'
import { observer } from 'mobx-react'
import { List, Skeleton, Icon, Avatar, Tag, Badge } from 'antd'
import { store } from '../..'
import ViewGifModal from '../ViewGifModal'
import SelectRepo from '../SelectRepo'

import { listTrendingGifs } from '../../actions'
import './style.scss'

@observer
class TrendingGifs extends React.Component {
  async componentDidMount() {
    await listTrendingGifs()
  }

  viewGif(item) {
    store.viewGifInfo(item)
    store.showViewGifModal(true)
  }

  render() {
    return (
      <div>
        <SelectRepo />
        <div className="message">
          <List
            className="message__list"
            loading={store.isLoading}
            itemLayout="horizontal"
            dataSource={store.gifs}
            renderItem={item => (
              <List.Item
                key={item.id}
                actions={[
                  <Icon
                    type="fire"
                    onClick={() => this.viewGif(item)}
                    theme="twoTone"
                    twoToneColor="green"
                  />,
                ]}
              >
                {/* {item.user.is_verified && <Badge dot title="user verified" offset={[25, 0]} />} */}
                <Skeleton title={false} loading={store.isLoading} active>
                  <List.Item.Meta
                    // avatar={<Avatar src={item.user.avatar_url} />}
                    title={<a href={item.html_url}>{item.title}</a>}
                  />
                  <Tag color="green">{item.type}</Tag>
                </Skeleton>
              </List.Item>
            )}
          />
        </div>
        <ViewGifModal />{' '}
      </div>
    )
  }
}

export default TrendingGifs
