/**
 * copy from https://github.com/Andarist/use-constant/blob/master/src/index.ts
 */
import { useRef } from '@bgfist/weact'

interface ResultBox<T> {
  v: T
}

export default function useConstant<T>(fn: () => T): T {
  const ref = useRef<ResultBox<T>>()

  if (!ref.current) {
    ref.current = { v: fn() }
  }

  return ref.current.v
}
