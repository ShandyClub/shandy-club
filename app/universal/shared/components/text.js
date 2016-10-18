import React from 'react'
import styles from 'css/shared/typography.css'

// TODO - http://jxnblk.com/writing/posts/patterns-for-style-composition-in-react/

const Text = ({ tag: Tag, content }) => <Tag className={ styles.h3 }>{ content }</Tag>

// export const H3

export default Text
