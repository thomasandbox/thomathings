type Tag =
  | 'Compiler'
  | 'Design'
  | 'React'
  | 'Rust'
  | 'TypeScript'
  | 'Web'
  | 'WebAssembly'

export interface Thing {
  date: string
  title: string
  url: string
  description: string
  tags: Tag[]
}
