todolist = []


def add_task(user_input, todolist):
    title = input("\nEnter the title: ")
    priority = input("Enter the priority (high/medium/low): ")

    todo = {"Title": title, "Priority": priority}
    todolist.append(todo)

    return todolist


def delete_task(user_input, todolist):
    for i in range(len(todolist)):
        print(f"{i + 1} - {todolist[i]['Title']} - {todolist[i]['Priority']}")

    index_num = int(
        input("\nPress the index number that you want to delete: "))

    for i in range(len(todolist)):
        if todolist[i] == todolist[index_num - 1]:
            print(f"The task, '{todolist[i]['Title']}' has been removed.")
            del todolist[i]
            break

    return todolist


def view_task(user_input, todolist):
    if len(todolist) == 0:
        print("You don't have any task to do.")
    for i in range(len(todolist)):
        print(f"{i + 1} - {todolist[i]['Title']} - {todolist[i]['Priority']}")


while True:
    user_input = input(
        "Press 1 to add task, 2 to delete task, 3 to view all task, q to quit: ")

    if user_input == '1':
        add_task(user_input, todolist)

    elif user_input == '2':
        delete_task(user_input, todolist)

    elif user_input == '3':
        view_task(user_input, todolist)

    elif user_input == 'q':
        print("Thank you for using the program.")
        break

    else:
        print("You typed the wrong input. Please enter again.")