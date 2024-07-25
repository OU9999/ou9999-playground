import { test, expect } from "@playwright/test";

test("ocr 기능 테스트 - 신분증", async ({ page }) => {
  // index 페이지에서 시작 (playwright.config.ts에서 webServer를 통해 baseURL을 설정.)
  await page.goto("/");

  // text='신분증 OCR' 텍스트가 포함된 요소를 찾고 클릭
  await page.click("text=신분증 OCR");

  // url 확인
  await expect(page).toHaveURL("/detail/ocr");

  // select 선택
  await page.locator("#\\:r0\\:\\-form-item").click();
  await page.waitForSelector("[data-radix-popper-content-wrapper]");
  await page.click("//div[span[text()='신분증']]");

  // submit
  await page.click("button[type='submit']");

  // 결과, 이름, 주민등록번호 텍스트가 나타날 때까지 기다림
  await page.waitForSelector("text=이름");
  await page.waitForSelector("text=주민등록번호");
});

test("ocr 기능 테스트 - 신용카드", async ({ page }) => {
  // index 페이지에서 시작 (playwright.config.ts에서 webServer를 통해 baseURL을 설정.)
  await page.goto("/");

  // text='신분증 OCR' 텍스트가 포함된 요소를 찾고 클릭
  await page.click("text=신분증 OCR");

  // url 확인
  await expect(page).toHaveURL("/detail/ocr");

  // select 선택
  await page.locator("#\\:r0\\:\\-form-item").click();
  await page.waitForSelector("[data-radix-popper-content-wrapper]");
  await page.click("//div[span[text()='신용 카드']]");

  // submit
  await page.click("button[type='submit']");

  // 결과, 이름, 주민등록번호 텍스트가 나타날 때까지 기다림
  await page.waitForSelector("text=카드 번호");
  await page.waitForSelector("text=카드 유효기간");
});
