import React from 'react'

export interface PadProps {
  amt: number
  row?: boolean
}

export default React.memo<PadProps>(function Pad({ amt, row }) {
  return (
    <div
      style={React.useMemo<React.CSSProperties>(
        () => ({
          height: row ? undefined : amt,
          width: row ? amt : undefined,
        }),
        [amt, row],
      )}
    />
  )
})
