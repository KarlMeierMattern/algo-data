# Fast: for very small data sets (even faster than merge sort and quick sort)
# Adaptive: Faster for partially sorted data sets
# Stable: Does not change the relative order of elements with equal keys
# In-Place: Only requires a constant amount of memory
# Inline: Can sort a list as it receives it

def insertion_sort(nums):
    for i in range(1, len(nums)):
        j=i
        while j > 0 and nums[j-1] > nums[j]:
            nums[j-1], nums[j] = nums[j], nums[j-1]
            j -= 1

    return nums

print(insertion_sort([6, 4, 9, 7, 3, 6]))