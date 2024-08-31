import requests # for making HTTP requests

import zipfile # fro working with zip files

import os # for interacting with OS

import pandas as pd

import ftplib # for FTP operations

from getpass import getpass #to securely input a password

import xarray as xr # for working with multi-dimentional arrays and datasets

import numpy as np

from datetime import datetime, timedelta 

import matplotlib.pyplot as plt

from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split

import geopandas as gpd
from shapely.geometry import Point



salinity = pd.read_csv('salinity.txt', delimiter=',', header=0)
# print("Column Names:", salinity.columns)
# print(salinity.head())
filtered_salinity = salinity.loc[salinity['SALT'] != -1.E+34]
filtered_salinity.to_csv("filtered_salinity.csv", index=False)
# print(filtered_salinity.head())


temperature=pd.read_csv('temperature.txt', delimiter=',', header=0)
# print("Column Names:", temperature.columns)
# print(temperature.head())
filtered_temperature=temperature.loc[temperature['TEMP'] != -1.E+34]
filtered_temperature.to_csv("filtered_temperature.csv", index=False)
# print(filtered_temperature.head())

df=filtered_temperature
print(df.head())
df['SALT']=filtered_salinity['SALT']
print(df.head())
df.to_csv('actual_data.csv', index=False)

plt.scatter(df['LON'], df['LAT'], s=1)  # Adjust 's' for point size
plt.xlabel('Longitude')
plt.ylabel('Latitude')
plt.title('Spatial Distribution of Data')
plt.show()


features = ['EstimatedTime', 'LON', 'LAT', 'TEMP', 'SALT']
X = df[features]
y = df['EstimatedTime'] 

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train the Random Forest model
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Predict on the test set
df['PredictedTime'] = model.predict(X)

# Find the optimal path (for simplicity, we'll just sort by predicted time here)
df_sorted = df.sort_values(by='PredictedTime')

# Visualization
# Load map of India
world = gpd.read_file(gpd.datasets.get_path('naturalearth_lowres'))
india = world[world.name == 'India']

# Create a GeoDataFrame for the predicted path
geometry = [Point(xy) for xy in zip(df_sorted['LON'], df_sorted['LAT'])]
gdf = gpd.GeoDataFrame(df_sorted, geometry=geometry)

# Plot the map of India and the optimized path
fig, ax = plt.subplots(figsize=(10, 10))
india.plot(ax=ax, color='lightgrey')
gdf.plot(ax=ax, color='blue', markersize=5, alpha=0.7, label='Optimized Path')
plt.title('Optimized Path on Map of India')
plt.xlabel('Longitude')
plt.ylabel('Latitude')
plt.legend()
plt.show()

# zonal_current=pd.read_csv('zonal_current.txt', delimiter=',', header=0)
# print(zonal_current.head())

# zonal_wind_speed=pd.read_csv('zonal_wind_speed.txt', delimiter=',', header=0)
# print(zonal_wind_speed.head())


