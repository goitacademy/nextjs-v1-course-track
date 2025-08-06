import React from 'react'

type Props = {
  children: React.ReactNode
  sidebar: React.ReactNode
}

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <div style={{ display: 'flex', gap: '12px' }}>
      {sidebar}
      <hr />
      {children}
    </div>
  )
}

export default NotesLayout
