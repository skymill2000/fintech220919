from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.hankookilbo.com/News/Read/A2022091910410000417')

title = driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[3]/div/div[1]/h2')
print(title.text)

description = driver.find_element(By.XPATH, '/html/body/div[1]/div[1]/div[3]/div/div[2]/div[2]/p')
print(description.text)

# 소제목 스크래핑하기