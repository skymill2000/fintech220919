from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome('./chromedriver')

def getAIAData(name, birth, gender):   
    driver.get('https://www.aia.co.kr/ko/our-products/medical-protection/non-par-denteal-health-plan.html#')
    #AIA 생명 치과 보험 조회
    textBox = driver.find_element(By.XPATH, '//*[@id="aia644363719"]')
    textBox.send_keys('19'+birth)
    
    if gender == 1:
        femaleBtn = driver.find_element(By.XPATH, '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[1]')
        femaleBtn.click()
    else:
        maleBtn = driver.find_element(By.XPATH, '//*[@id="calculator-container-form"]/div[1]/div[2]/div/div[1]/div/div[3]/div[1]/div[2]')
        maleBtn.click()

    resultBtn = driver.find_element(By.XPATH,'//*[@id="btn806817556"]')
    resultBtn.click()
    driver.implicitly_wait(2)
    price = driver.find_element(By.XPATH, '//*[@id="premium-by-timespan-value"]')
    print(price.text)

    tableBody = driver.find_element(By.XPATH, '//*[@id="collapse-large-724022276"]/div[1]/div/table').find_element(By.TAG_NAME,'tbody')
    driver.find_element(By.XPATH, '//*[@id="the_fine_print"]/div[2]/div[1]/div[2]/div/a[2]').click()
    rows = tableBody.find_elements(By.TAG_NAME, "tr")
    for index, value in enumerate(rows):
        if index != 0:
            print(value.find_elements(By.TAG_NAME,'td')[0].text)
 
getAIAData("유관우", "890119", 0)