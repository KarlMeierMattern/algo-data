# Quicksort is fast on large datasets just like merge sort, but is also lighter on memory usage. Let's use quick sort for both follower count and influencer revenue sorting!

# Pros:

# Very fast: At least it is in the average case
# In-Place: Saves on memory, doesn't need to do a lot of copying and allocating
# Cons:

# Typically unstable: changes the relative order of elements with equal keys
# Recursive: can incur a performance penalty in some implementations
# Pivot sensitivity: if the pivot is poorly chosen, it can lead to poor performance

def quick_sort(nums, low, high):
    if low < high:
        middle = partition(nums, low, high)
        quick_sort(nums, low, middle - 1)
        quick_sort(nums, middle + 1, high)
    return nums


def partition(nums, low, high):
    pivot = nums[high]
    i = low

    for j in range(low, high):
        if nums[j] < pivot:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
    
    nums[i], nums[high] = nums[high], nums[i]
    return i

print(quick_sort([6, 4, 9, 7, 3, 6], 0, 5))