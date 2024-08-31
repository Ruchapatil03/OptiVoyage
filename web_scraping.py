from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.by import By

options = Options()
options.add_experimental_option("detach", True)

driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)

driver.get("https://las.incois.gov.in/las/InteractiveDownloadData.html?dsID=id-483da53532&varID=wind_speed_AW-id-483da53532&initXLo=0.125&initXHi=359.88&initYLo=-89.875&initYHi=89.88&lasxmldoc=%3C%3Fxml+version%3D%221.0%22%3F%3E%3ClasRequest+href%3D%22file%3Alas.xml%22%3E%3Cargs%3E%3Clink+match%3D%22%2Flasdata%2Fdatasets%2Fid-483da53532%2Fvariables%2Fwind_speed_AW-id-483da53532%22+%2F%3E%3Cregion%3E%3Crange+type%3D%22x%22+low%3D%220.125%22+high%3D%22359.88%22+%2F%3E%3Crange+type%3D%22y%22+low%3D%22-89.875%22+high%3D%2289.88%22+%2F%3E%3Cpoint+type%3D%22t%22+v%3D%2215-Jul-2012+00%3A00%22+%2F%3E%3C%2Fregion%3E%3C%2Fargs%3E%3Clink+match%3D%22%2Flasdata%2Foperations%2Foperation%5B%40ID%3D%5C%27Interactive_Download%5C%27%5D%22+%2F%3E%3Cproperties%3E%3Cferret%3E%3Cview%3Exy%3C%2Fview%3E%3Csize%3E.8333%3C%2Fsize%3E%3Cimage_format%3Egif%3C%2Fimage_format%3E%3Cannotations%3Efile%3C%2Fannotations%3E%3C%2Fferret%3E%3Clas%3E%3Coutput_type%3Ehtml%3C%2Foutput_type%3E%3Cdebug%3Efalse%3C%2Fdebug%3E%3C%2Flas%3E%3Cproduct_server%3E%3Cversion%3E8.4%3C%2Fversion%3E%3C%2Fproduct_server%3E%3C%2Fproperties%3E%3C%2FlasRequest%3E")
# driver.maximize_window()

# select the format of saving data
format = Select(driver.find_element_by_name('dataFormatComboBox'))
format.select_by_value('CSV')

# select start and end dates
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

button = driver.find_element_by_xpath('//button[@type="button"]')
button.click()