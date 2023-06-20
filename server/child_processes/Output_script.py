import pandas as pd
import numpy as np
import requests,json,re,csv
from datetime import datetime
payroll=pd.read_csv('uploads/payrollreportexpanded.csv')
h_f_care = pd.read_csv('uploads/h_f_care_candidates.csv')
bussiness_unit = pd.read_csv('uploads/businessunits.csv')

for i in range(len(payroll)):
    if (payroll.loc[i]['Type'])!='shift':
        payroll.drop([i],axis=0,inplace=True)

pay_columns = ['Total Pay','Business Unit','Shift Date','Employee First Name','Employee Last Name','Hours','Charge Rate','Total Charge']
payroll = payroll[pay_columns]

payroll['Starting Point'] = ''
payroll['Ending Point'] = ''
#payroll['Starting address'] = ''
payroll.index = np.arange(0,len(payroll))

for i in range(len(payroll)):

    for j in range(len(h_f_care)):
        if str(h_f_care.loc[j]['First Name']).lower() == str(payroll.loc[i]['Employee First Name']).lower() and str(
                h_f_care.loc[j]['Last Name']).lower() == str(payroll.loc[i]['Employee Last Name']).lower():
            payroll.at[i, 'Starting Point'] = h_f_care.loc[j]['Post Code']
            # payroll.at[i,'Starting address']=h_f_care.loc[j]['Address Line1']

    for t in range(len(bussiness_unit)):
        if str(bussiness_unit.loc[t]['Business unit']).lower() == str(payroll.loc[i]['Business Unit']).lower():
            payroll.at[i, 'Ending Point'] = bussiness_unit.loc[t]['Address Line']

dest_columns = ['Starting Point','Ending Point','Total Pay','Business Unit','Shift Date','Employee First Name','Employee Last Name','Hours','Charge Rate','Total Charge']

payroll =payroll[dest_columns]
payroll.rename(columns = {'Total Pay':'Total Cost'},inplace = True)

payroll = payroll.dropna(subset=['Starting Point'])
payroll = payroll.dropna(subset=['Business Unit'])
payroll.index = np.arange(0,len(payroll))

payroll['Distance Traveled (Miles)'] = ''
destin = list()
dist_dict = {}

api_key = 'AIzaSyBVFrJDzhw2biufcAEcHJUChOWDx5jAdwQ'
origin = ''
dest = ''


def get_dist():
    header = "https://maps.googleapis.com/maps/api/distancematrix/json?"
    footer = "&units=imperial&key="

    url = header + 'origins=' + dest + '&destinations=' + origin + footer + api_key
    payload = {}
    headers = {}

    response = requests.request("GET", url, headers=headers, data=payload)
    r = response.json()
    print("this is r>>>>>>>>",r)
    dist = r['rows'][0]['elements'][0]['distance']['text'] if r['rows'][0]['elements'][0]['status'] !='NOT_FOUND' else  '0.0 mi'
    print(">>>>>>>>>>>>",dist,"this is dist")
    dist = float(re.sub(" mi", "", dist))
    # dist =3
    dist = (dist * 2) - 5
    return dist

for i in range(len(payroll)):
    origin=re.sub(" ","",payroll.loc[i]['Starting Point'])
    #print(origin)
    dest=re.sub(" ","",payroll.loc[i]['Ending Point'])
    #print(dest)
    both=origin+dest
    if both not in destin:
        dist = get_dist()
        payroll.at[i,'Distance Traveled (Miles)']=dist
        dist_dict[both]=dist
        destin.append(both)
    else:
        dist=dist_dict.get(both)
        payroll.at[i,'Distance Traveled (Miles)']=dist
        
payroll['Invoice_date'] = pd.Timestamp.now().strftime('%Y-%m-%d')

# Calculate due_date as one month from invoice_date
payroll['due_date'] = pd.to_datetime(payroll['Invoice_date']) + pd.DateOffset(months=1)
payroll['due_date'] = payroll['due_date'].dt.strftime('%Y-%m-%d')
payroll['status']='unpaid'

columns = ['Starting Point','Ending Point','Distance Traveled (Miles)','Total Cost','Business Unit','Shift Date','Employee First Name','Employee Last Name','Hours','Charge Rate','Total Charge','Invoice_date','due_date','status']

payroll = payroll[columns]
payroll.to_csv('Output.csv')
print("Output.csv successfully generated!!!")