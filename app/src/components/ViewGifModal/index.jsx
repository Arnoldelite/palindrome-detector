import React from 'react'
import { Modal, Card, Avatar, Tag } from 'antd'
import { observer } from 'mobx-react'
import Particles from 'react-particles-js'
import { store } from '../..'
import './style.scss'

const { Meta } = Card

@observer
class ViewGifModal extends React.Component {
  render() {
    return (
      <Modal
        className="edit-modal"
        destroyOnClose
        title={`${store.gifInfo.title}`}
        onCancel={() => store.showViewGifModal(false)}
        visible={store.isViewGifModalVisible}
        footer={null}
      >
        <Card
          hoverable
          style={{ width: 400 }}
          cover={<img alt="gif" src={store.gifInfo.embed_url} />}
          actions={[
            <Tag color="green"> rating: {store.gifInfo.rating}</Tag>,
            <Tag color="green"> score: {store.gifInfo.score}</Tag>,
          ]}
        >
          <Meta
            avatar={<Avatar src={store.gifInfo.url !== undefined ? store.gifInfo.url : null} />}
            title={<a href={store.gifInfo.url}>{store.gifInfo.title}</a>}
            description={store.gifInfo.source}
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

export default ViewGifModal
