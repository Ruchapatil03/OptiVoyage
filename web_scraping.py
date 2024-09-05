from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By

options = Options()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("https://las.incois.gov.in/las/UI.vm#panelHeaderHidden=false;differences=false;autoContour=false;xCATID=9A02C9BF8C98DC3B8055364271BF60E4;xDSID=id-1174b2adc6;varid=PCO2-id-1174b2adc6;imageSize=auto;over=xy;compute=Nonetoken;tlo=15-Jan-2015%2000:00;thi=15-Jan-2015%2000:00;catid=9A02C9BF8C98DC3B8055364271BF60E4;dsid=id-1174b2adc6;varid=PCO2-id-1174b2adc6;avarcount=0;xlo=76;xhi=100;ylo=5;yhi=24;operation_id=Plot_2D_XY_zoom;view=xy")

# select the data to be downloaded
dataset = driver.find_element("xpath", '//div[@role="button"]')
dataset.click()

# wind speed
windspeed = driver.find_element("xpath", '//div[@id="gwt-uid-104"]')
windspeed.click()

# select the format of saving data
format = Select(driver.find_element_by_name('dataFormatComboBox'))
format.select_by_value('CSV')

select start and end dates
dates = Select(driver.find_element_by_class_name('gwt-ListBox'))
i = 0
for date in dates:
	if i == 0:
		dates.select_by_value('2024')
	elif i == 1:
		dates.select_by_value('Jul')
	elif i == 2:
		dates.select_by_value('2024')
	elif i == 3:
		dates.select_by_value('Sep')
	i = i + 1

# button = driver.find_element_by_xpath('//button[@type="button"]')
# button.click()
