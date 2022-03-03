import { Space } from 'antd'
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  YoutubeFilled,
  InstagramFilled,
} from '@ant-design/icons'

const SocialMedia = () => {
  return (
    <Space style={{ fontSize: '32px' }}>
      <FacebookFilled width={60} />
      <TwitterSquareFilled />
      <LinkedinFilled />
      <YoutubeFilled />
      <InstagramFilled />
    </Space>
  )
}

export default SocialMedia
