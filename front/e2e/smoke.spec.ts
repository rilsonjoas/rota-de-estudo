import { expect, test } from '@playwright/test';

test('opens the StudyPath shell', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'Rota de Estudo' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Hoje' })).toBeVisible();
});
