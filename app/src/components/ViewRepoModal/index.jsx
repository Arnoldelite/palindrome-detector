import React from 'react'
import { Modal, Card, Avatar, Tag, Badge, Icon } from 'antd'
import { observer } from 'mobx-react'
import Particles from 'react-particles-js'
import { store } from '../..'
import './style.scss'

const { Meta } = Card

@observer
class ViewRepoModal extends React.Component {
  render() {
    return (
      <Modal
        className="edit-modal"
        destroyOnClose
        title={`${store.repoInfo.language} Popular Repo info`}
        onCancel={() => store.showViewRepoModal(false)}
        visible={store.isViewRepoModalVisible}
        footer={null}
      >
        <Card
          hoverable
          style={{ width: 400 }}
          actions={[
            <Tag color="green"> stars: {store.repoInfo.stargazers_count}</Tag>,
            <Tag color="green"> watchers: {store.repoInfo.watchers}</Tag>,
            <Tag color="green"> issues: {store.repoInfo.open_issues}</Tag>,
          ]}
        >
          <Meta
            avatar={
              <Avatar
                src={store.repoInfo.owner !== undefined ? store.repoInfo.owner.avatar_url : null}
              />
            }
            title={<a href={store.repoInfo.html_url}>{store.repoInfo.full_name}</a>}
            description={store.repoInfo.description}
          />
        </Card>
        <Particles
          className="particles"
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'repulse',
                },
              },
            },
          }}
        />
      </Modal>
    )
  }
}

export default ViewRepoModal
