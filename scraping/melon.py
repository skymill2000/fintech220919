from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.melon.com/chart/index.htm')

table = driver.find_element(By.XPATH,'//*[@id="frm"]/div/table/tbody')
tableRows = table.find_elements(By.TAG_NAME, 'tr')
#array 형태의 데이터 리턴

for index, value in enumerate(tableRows):
    title = value.find_elements(By.TAG_NAME, 'td')[5]
    print(title.text)