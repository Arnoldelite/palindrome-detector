import React from 'react'
import { observer } from 'mobx-react'
import { List, Skeleton, Icon, Avatar, Tag, Badge, Button } from 'antd'
// import Header from '../Header'
import Particles from 'react-particles-js'
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

  renderParticlesBackground = () => (
    <Particles 
      className="particles"
      params={{
                    particles: {
                        shape: {
                            type: 'images',
                            images: [
                                {src: 'assets/batman-new.svg', height: 20, width: 20},
                            ],
                        },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 700,
                            },
                        },
                        move: {
                            direction: "right",
                            speed: 0.7,
                        },
                        size: {
                            value: 2,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 2,
                                opacity_min: 0.5,
                            },
                        },
                    },
                    retina_detect: true,
                }}
    />
  )

  render() {
    const renderParticles = this.renderParticlesBackground()
    return (
      <div>
        {renderParticles}
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
                  <Icon
                    type="fire"
                    onClick={() => this.viewRepo(item)}
                    theme="outlined"
                  />,
                ]}
              >
                {item.has_issues && <Badge className="badge" dot title="repo issues" offset={[25, 0]} />}
                <Skeleton title={false} loading={store.isLoading} active>
                  <List.Item.Meta
                    avatar={<Avatar src={item.owner.avatar_url} />}
                    title={(
                      <div>
                    <Button ghost href={item.html_url} > {item.name}</Button> 
                      </div>
                    )}
                  />
                  <Tag color="green" href={item.html_url}>{item.language}</Tag>
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
