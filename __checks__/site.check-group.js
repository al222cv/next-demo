import { CheckGroup } from '@checkly/cli/constructs'

export const nextDemo = new CheckGroup('next-demo', {
  name: 'next-demo',
  activated: true,
  muted: false,
  runtimeId: '2022.10',
  locations: ['us-north-1'],
  tags: ['next-demo'],
  browserChecks: {
    testMatch: '*.spec.ts'
  }
})
