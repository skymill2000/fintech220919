from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.select import Select

driver = webdriver.Chrome('./chromedriver')

driver.get('https://www.leagueoflegends.com/ko-kr/')
loginButton = driver.find_element(By.XPATH, '//*[@id="riotbar-right-content"]/div[3]/div[1]/a')
loginButton.click()

username = driver.find_element(By.CSS_SELECTOR,'body > div:nth-child(3) > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div:nth-child(1) > div > input')
password = driver.find_element(By.CSS_SELECTOR,'body > div:nth-child(3) > div > div > div.grid.grid-direction__row.grid-page-web__content > div > div > div.grid.grid-align-center.grid-justify-space-between.grid-fill.grid-direction__column.grid-panel-web__content.grid-panel__content > div > div > div > div.field.password-field.field--animate > div > input')

username.send_keys('test')
password.send_keys('test')
