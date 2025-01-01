import { _android } from 'playwright';

(async () => {
  try {
    // Step 1: Launch the Android server
    const server = await _android.launchServer();
    const wsEndpoint = server.wsEndpoint();
    console.log(`Android server launched. WebSocket endpoint: ${wsEndpoint}`);

    // Step 2: Connect to the Android device
    const androidDevice = await _android.connect(wsEndpoint);
    console.log(`Connected to device: ${androidDevice.model()}`);

    // Step 3: Launch the Chrome browser on the device
    const context = await androidDevice.launchBrowser();
    const page = await context.newPage();

    // Step 4: Navigate to a website
    await page.goto('https://www.google.com');
    console.log(`Navigated to: ${await page.url()}`);

    // Step 5: Verify the page title
    const title = await page.title();
    console.log(`Page title: ${title}`);

    // Step 6: Take a screenshot
    const screenshotPath = 'android-screenshot.png';
    await page.screenshot({ path: screenshotPath });
    console.log(`Screenshot saved at: ${screenshotPath}`);

    // Step 7: Close the browser and server
    await context.close();
    await androidDevice.close();
    server.close();
    console.log('Browser and server connections closed successfully.');
  } catch (error) {
    console.error('Error connecting to Android device:', error);
  }
})();