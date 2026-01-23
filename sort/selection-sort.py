def selection_sort(nums):

    n = len(nums)
    
    for i in range(n):
        smallest_idx = i
        for j in range(i+1, n):
            if nums[j] < nums[smallest_idx]:
                smallest_idx = j
        nums[i], nums[smallest_idx] = nums[smallest_idx], nums[i]

    return nums

array = [6, 4, 9, 7, 3, 6]
sorted_array = selection_sort(array)
print(sorted_array)