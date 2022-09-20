from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('https://www.melon.com/chart/index.htm')

searchInput = driver.find_element(By.ID, 'top_search')
searchInput.send_keys('아이유')
searchButton = driver.find_element(By.CSS_SELECTOR, '#gnb > fieldset > button.btn_icon.search_m')
searchButton.click()

#work2 해당 검색 결과의 활동장르를 출력해 주세요