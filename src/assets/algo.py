import nltk, re, string, collections
from nltk.util import everygrams

import csv

text = "The Parintek IP Solution"

punctuationNoPeriod = "[" + re.sub("\.","",string.punctuation) + "]"

text = re.sub(punctuationNoPeriod, "", text)

tokens = text.split();

substrings = []

grams = everygrams(tokens)

for i in grams:
    substrings.append(' '.join(i))







dict = {}

str = []

with open('check.csv', 'rt') as f:
     reader = csv.reader(f, delimiter='\t') 
     for row in reader:
         row_str = " ".join(field for field in row)
         str.append(row_str)

final_str = " ".join(s for s in str)
print("total words = ",len(set(final_str.split())))



for token in substrings:
    print(token)
    dict[token] = final_str.count(token)
 

#print(dict)
