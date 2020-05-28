# use "python" to run rather than "py"
import requests
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
url = "https://maps.arcgis.com/apps/opsdashboard/index.html#/ec4bffd48f7e495182226eee7962b422"
driver.get(url)

timeout = 10
try:
    featureListXpath = '//*[@id="ember20"]/div[2]/nav'
    elementPresence = EC.presence_of_element_located(
        (By.XPATH, featureListXpath))
    WebDriverWait(driver, timeout).until(elementPresence)

    featureList = driver.find_element(By.XPATH, featureListXpath)
    all_children_by_xpath = featureList.find_elements_by_xpath(".//*")

    firstXpath = '//*[@id="ember203"]/div/div/p[2]/span/span/strong'
    firstSpan = driver.find_element(By.XPATH, firstXpath)
except TimeoutException:
    print("Timed out waiting for page to load")
finally:
    print("Page loaded")

soup = BeautifulSoup(driver.page_source, 'html.parser')
# print(featureList)
# print('len(all_children_by_xpath): ' + str(len(all_children_by_xpath)))
print(firstSpan.getAttribute('innerHTML'))
driver.quit()
