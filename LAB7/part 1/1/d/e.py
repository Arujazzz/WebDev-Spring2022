def process(array):

    result = []

    for i in range(1, len(array)-1):
        if  (array[i] < 0 and array[i-1] < 0) or\
            (array[i] < 0 and array[i+1] < 0) or\
            (array[i] > 0 and array[i-1] > 0) or\
            (array[i] > 0 and array[i+1] > 0):
            return 'YES'
    return 'NO'

 

def main():
    N = int(input())
    assert N>=1 and N<= 10000
    input_array = [int(i) for i in input().split()]  
    assert len(input_array) == N  
    print(process(input_array))

if __name__ == '__main__':
    main()