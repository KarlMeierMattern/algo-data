# Pros:

# Fast: Merge sort is much faster than bubble sort. O(n*log(n)) instead of O(n^2).
# Stable: Merge sort is a stable sort which means that values with duplicate keys in the original list will be in the same order in the sorted list.

# Cons:
# Memory usage: Most sorting algorithms can be performed using a single copy of the original array. Merge sort requires extra subarrays in memory.
# Recursive: Merge sort requires many recursive function calls, and in many languages (like Python), this can incur a performance penalty.

def merge_sort(nums):
    if len(nums) <= 1:
        return nums

    middle = len(nums) // 2

    left = merge_sort(nums[0:middle])
    right = merge_sort(nums[middle:])

    return merge(left, right)


def merge(first, second):
    full = []
    i = 0
    j = 0

    while i < len(first) and j < len(second):
        if first[i] < second[j]:
            full.append(first[i])
            i += 1
        else:
            full.append(second[j])
            j += 1

    return full + first[i:] + second [j:]

print(merge_sort([6, 4, 9, 7, 3, 6]))
