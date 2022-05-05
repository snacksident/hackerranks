def timeConversion(s):
    # // Write your code here
    # //if AM and time starts with 12
    if s[-2:] == "AM" and s[:2]== "12":
    #     //change 12 to 00, remove AM
        return "00" + s[2:-2] #add 00 to beginning, slice string up
    # //elseif AM
    elif s[-2:] == "AM":
    #     //remove AM off
        return s[:-2] #return string without the AM
    # //elseif PM and starts with 12
    elif s[-2:] == "PM" and s[:2] == "12":
    #     //remove PM
        return s[:-2] #return string without PM
    # //else
    else:
    #     //add 12 to first 2 digits, remove PM
        ans = int(s[:2]) + 12
        return str(str(ans) + s[2+8])
