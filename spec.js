describe('TC 6-10', function() {
  it('6', function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://reg.tu.ac.th/");
    element(by.css("#myPopup > div > div > div > button")).click();
    element(by.css("#f_uid")).sendKeys("x");
    element(by.css("#f_pwd")).sendKeys("x");
    element(by.css("#slider-submit")).click();
    element(by.css("#menu > ul > li:nth-child(6) > a")).click();
    element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > table > tbody > tr:nth-child(6) > td:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > select > option:nth-child(3)")).click();
    element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > table > tbody > tr:nth-child(7) > td:nth-child(2) > table > tbody > tr > td > font:nth-child(4) > input[type=submit]")).click();
    let result = element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > font > font > font > table > tbody > tr:nth-child(4) > td:nth-child(2) > font")).getText();
    expect(result).toEqual("ศูนย์รังสิต");  
  });
  it('7', function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://reg.tu.ac.th/");
    element(by.css("#myPopup > div > div > div > button")).click();
    element(by.css("#f_uid")).sendKeys("x");
    element(by.css("#f_pwd")).sendKeys("x");
    element(by.css("#slider-submit")).click();
    element(by.css("#menu > ul > li:nth-child(2) > a")).click();
    element(by.css("#menu > ul > li:nth-child(4) > a")).click();
    let result = element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > font > b")).getText();
    expect(result).toEqual("ยินดีต้อนรับเข้าสู่ระบบบริการการศึกษา");  
  });
  it('8', function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://reg.tu.ac.th/");
    element(by.css("#myPopup > div > div > div > button")).click();
    element(by.css("#f_uid")).sendKeys("x");
    element(by.css("#f_pwd")).sendKeys("x");
    element(by.css("#slider-submit")).click();
    element(by.css("#menu > ul > li:nth-child(13) > a")).click();
    
    let result = element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > table:nth-child(5) > tbody > tr:nth-child(1) > td:nth-child(2) > font > b")).getText();
    expect(result).toEqual("ตารางเรียน/สอบของรายวิชาที่จดทะเบียนไว้แล้ว");  
  });
  it('9', function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://reg.tu.ac.th/");
    element(by.css("#myPopup > div > div > div > button")).click();
    element(by.css("#f_uid")).sendKeys("x");
    element(by.css("#f_pwd")).sendKeys("x");
    element(by.css("#slider-submit")).click();
    element(by.css("#menu > ul > li:nth-child(15) > a")).click();
    element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > div > div > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(3) > font > font > font > a:nth-child(1) > b")).click();
    let result = element(by.css("body > table > tbody > tr.ContentBody > td:nth-child(2) > div > div > table:nth-child(2) > tbody > tr > td:nth-child(2) > table:nth-child(1) > tbody > tr:nth-child(1) > td > font > b")).getText();
    expect(result).toEqual("ภาคการศึกษาที่ 1/2562");  
  });
  it('10', function() {
    browser.waitForAngularEnabled(false);
    browser.get("https://reg.tu.ac.th/");
    element(by.css("#myPopup > div > div > div > button")).click();
    element(by.css("#f_uid")).sendKeys("x");
    element(by.css("#f_pwd")).sendKeys("x");
    element(by.css("#slider-submit")).click();
    element(by.css("#menu > ul > li:nth-child(1) > a")).click();
    element(by.css("#myPopup > div > div > div > button")).click();
    let result = element(by.css("#slider-submit"));
    expect(result.isDisplayed()).toBe(true);
  });
});
