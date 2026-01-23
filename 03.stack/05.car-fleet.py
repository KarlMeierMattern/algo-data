def car_fleet(target: int, position: list[int], speed: list[int]) -> int:
    paired = sorted(zip(position, speed), reverse=True)

    fleet_stack = []

    for p, s in paired:
        time = (target - p) / s
        if not fleet_stack or time > fleet_stack[-1]:
            fleet_stack.append(time)

    return len(fleet_stack)

print(car_fleet(10, [1, 4], [3, 2]))
print(car_fleet(10, [4, 1, 0, 7], [2, 2, 1, 1]))