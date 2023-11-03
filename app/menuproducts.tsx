import { forwardRef } from 'react';
import * as React from 'react'

const MenuProducts = forwardRef<HTMLElement>(props, ref) => {
  return (
    <section ref={ref}>
      <h1>Hello</h1>
    </section>
  )
}
export dafault MenuProducts