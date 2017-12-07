import React from 'react'
import { Icon } from 'igroot'
import classNames from 'classnames'
import styles from './index.less'
/**
 * 在数值背后添加一个小图标来标识涨跌情况。
 * 趋势符号，标记上升和下降趋势。通常用绿色代表“好”，红色代表“不好”，股票涨跌场景除外
 * colorful 是否彩色标记 默认 true
 * flag 上升下降标识: up | down
 */
export const Trend = ({ colorful = true, flag, children, className, ...rest }) => {
  const classString = classNames(styles.trendItem, {
    [styles.trendItemGrey]: !colorful,
  }, className)
  return (
    <div
      {...rest}
      className={classString}
      title={typeof children === 'string' ? children : ''}
    >
      <span className={styles.value}>{children}</span>
      {flag && <span className={styles[flag]}><Icon type={`caret-${flag}`} /></span>}
    </div>
  )
}