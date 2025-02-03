def RecursionFunc():
    yourNum = int(input("How big should the pyramid be? "))
    pyramid(yourNum)

def pyramid(num):
    if (num<=0):
        return
    
    pyramid(num-1)

    print('*' * num)

RecursionFunc()

