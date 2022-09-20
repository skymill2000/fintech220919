from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome('./chromedriver')
# 크롬을 통해서 스크래핑을 진행 크롬 드라이버 로딩
driver.get('http://www.eum.go.kr/web/am/amMain.jsp')

sido = Select(driver.find_element(By.XPATH,'//*[@id="selSido"]'))
sido.select_by_visible_text('전라남도')

#나머지 데이터를 입력해 주세요
#해당 사이트는 셀렉트 선택 이후 데이터 통신을 진행합니다.
#driver.implicitly_wait(1) <= 해당코드는 1초동안 브라우저가 대기를 하는 코드입니다.