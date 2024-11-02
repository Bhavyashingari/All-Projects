import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import scipy.stats as stats

df = pd.read_csv('msleep.csv')

np.random.seed(30)
df = df.head()
print(df.sample(n=3))