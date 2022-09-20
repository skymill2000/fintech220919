from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://imnews.imbc.com/replay/2022/nw1200/article/6409452_35715.html')

title = driver.find_element(By.XPATH, '//*[@id="content"]/div/section[1]/article/div[1]/h2')
print(title.text)

description = driver.find_element(By.XPATH, '//*[@id="content"]/div/section[1]/article/div[2]/div[5]/div[1]/span')
print(description.text)

# 소제목 스크래핑하기