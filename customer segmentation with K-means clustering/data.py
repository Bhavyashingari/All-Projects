import pandas as pd

customerData = pd.DataFrame({
    'customerID' : [1,2,3,4,5],
    'Recency' : [10,20,15,5,25],
    'Frequency' : [5,2,8,10,3],
    'MonetaryValue' : [100,50,200,250,80]
})

customerData.to_csv('customer_segmentation_data.csv',index = False)
