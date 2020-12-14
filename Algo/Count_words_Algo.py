# -*- coding: utf-8 -*-
"""Untitled5.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/12RTcdi4fiJiEyXbiWK5295sI-rl6qxsi
"""

!pip install nltk

import nltk, re, string, collections
from nltk.util import everygrams

#import csv

# query --->  user input
# doc   --->  csv input
def wordsCount( query,  doc):
  text = query
  
  punctuationNoPeriod = "[" + re.sub("\.","",string.punctuation) + "]"
  
  text = re.sub(punctuationNoPeriod, "", text)
  
  tokens = text.split();
  
  substrings = []
  
  grams = everygrams(tokens)
  
  for i in grams:
    substrings.append(' '.join(i))
  
  dict = {}
  
  for token in substrings:
    print(token)
    dict[token] = doc.count(token)

  print(dict)



query = 'high quality'

doc ='“At Parintek, we understand the need of having high quality IP as a backbone for R&amp;D. IP provide rights to stop others from copying, manufacturing, selling or importing your inventions. IP protection helps in having an edge over competitors. Being an IP consulting focused company, Parintek ensures a distinguished level of service which blends best quality and cost-effective solution driven by best subject matter experts. Parintek acts as your R&amp;D partner for mitigating IP risk by tracking competitors, building IP policies and culture, aligning IP strength with the business by creating, protecting, maintaining and optimizing your IP portfolio. The Parintek IP Solution is one of the leader in the market”'

wordsCount(query,doc )





#with open('check.csv', 'rt') as f:
#     reader = csv.reader(f, delimiter='\t') 
#     for row in reader:
#         row_str = " ".join(field for field in row)
#         str.append(row_str)

#final_str = " ".join(s for s in str)
#print("total words = ",len(set(final_str.split())))
