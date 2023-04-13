import { test, expect } from '@playwright/test'

test('check every page', async ({ page }) => {
  await page.goto('https://next-demo-sandy.vercel.app/')
  await page.getByRole('link', { name: 'Static page' }).click()
  await expect(page.getByTestId('text')).toHaveText(
    'This is a static page which is really fast.'
  )

  await page.getByRole('link', { name: 'Back to start' }).click()
  await page.getByRole('link', { name: 'SSR page' }).click()
  await expect(page.getByTestId('text')).toHaveText(
    'This is a server side rendered page with faked dynamic data: this text is loaded on the server and prerenderd'
  )

  await page.getByRole('link', { name: 'Back to start' }).click()
  await page.getByRole('link', { name: 'SPA page', exact: true }).click()
  await expect(page.getByTestId('text')).toHaveText(
    'This page loads data like a classic SPA (on the client):'
  )

  await page.getByRole('link', { name: 'Back to start' }).click()
  await page.getByRole('link', { name: 'SPA page graphql' }).click()
  await expect(page.getByTestId('text')).toHaveText(
    'This page loads data like a classic SPA (on the client):'
  )

  await page.getByRole('link', { name: 'Back to start' }).click()
  await page.getByRole('link', { name: 'Env' }).click()
  await expect(page.getByTestId('text')).toHaveText(
    'This page presents an env variable, should be different based on environment: Prod env.'
  )
})
