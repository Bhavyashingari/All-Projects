import numpy as np
import pandas as pd 
from datetime import timedelta
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import KMeans
import plotly.graph_objects as go 
from data import customerData


data = pd.read_csv('./customer_segmentation.csv')
print(data.head())
print(data.describe())
print(data.info())

print("Total customers are:", (data.customerID.nunique()))
print("Total Purchases made in the store are: ", data.InvoiceNo.nunique())


data.drop(columns= ['index', 'StockCode', 'Description', 'Country'], inplace = True)
print(data.head())

print(data.isna().sum())

data.dropna(inplace = True)

data['Price'] = data['UnitPrice'] * data['Quantity']

print(data.head())

purchase_recency = data.groupby("CustomerID", group_keys=True)['InvoiceDate'].agg('max').reset_index(name='Recency').apply(lambda x: x)

print(purchase_recency.head())
