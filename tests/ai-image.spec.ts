import { test, expect } from "@playwright/test";

test("ai 이미지 생성 테스트", async ({ page }) => {
  // index 페이지에서 시작 (playwright.config.ts에서 webServer를 통해 baseURL을 설정.)
  await page.goto("/");

  // text='AI 이미지 생성기' 텍스트가 포함된 요소를 찾고 클릭
  await page.click("text=AI 이미지 생성기");

  // url 확인
  await expect(page).toHaveURL("/detail/ai-tti");

  // prompt 입력
  await page.fill("#\\:r0\\:\\-form-item", "robot,dog");

  // select 선택
  await page.locator("#\\:r1\\:\\-form-item").click();
  await page.waitForSelector("[data-radix-popper-content-wrapper]");
  await page.click("//div[span[text()='stable-diffusion (realistic style)']]");

  // submit
  await page.click("button[type='submit']");

  // form이 submit된 후, 이미지가 로드될 때까지 기다림
  await page.waitForSelector("img[alt='ai-image']", { timeout: 30000 });

  // 이미지가 올바르게 로드되었는지 확인
  const imgSrc = await page.getAttribute("img[alt='ai-image']", "src");
  expect(imgSrc).not.toBeNull();
  console.log("이미지가 성공적으로 로드되었습니다.", imgSrc);
  console.log("src", imgSrc);
});
