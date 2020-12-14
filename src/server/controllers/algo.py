import nltk, re, string, collections
from nltk.util import everygrams
import sys
#import csv

# query --->  user input
# doc   --->  csv input
def wordsCount(query, doc):
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

  return dict


query = sys.argv[1]
doc = sys.argv[2]

dataToSendBack = wordsCount(query, doc)

print(dataToSendBack)
sys.stdout.flush
