def bubble_sort(nums):
    swapping = True
    end = len(nums)

    while swapping:
        swapping = False
        # Start at the second element and compare it with the previous element
        # If we started at the first element, then i-1 would be -1 which is out of range
        for i in range(1, end):
            if nums[i - 1] > nums[i]:
                # Swap the elements
                nums[i - 1], nums[i] = nums[i], nums[i - 1]
                swapping = True
        end -= 1
        # After each pass, the largest element is moved to the end of the list
        # So we can reduce the end by 1
    
    return nums

print(bubble_sort([6, 4, 9, 7, 3, 6]))