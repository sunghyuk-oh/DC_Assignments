shopping_lists = []


class Store:
    def __init__(self, title, address):
        self.title = title
        self.address = address
        self.item_lists = []


class Item:
    def __init__(self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity


while True:
    choice = int(input("""
  Please choose the option:
  1. Add a shopping list
  2. Add grocery items to the particular shopping list
  3. Display the list
  4. Quit
  """))

    if choice == 1:
        store_name = input("\nEnter the name of the store: ")
        store_address = input("Enter the address of the store: ")

        store = Store(store_name, store_address)
        shopping_lists.append(store)

    elif choice == 2:
        print("\n--------------------")
        for i in range(len(shopping_lists)):
            print(f"{i+1}. {shopping_lists[i].title}")
        print("--------------------")

        option = int(
            input("\nPlease enter the number according to the list to add the item(s): "))

        while True:
            name = input("\nPlease enter the name of the item: ")
            price = input("Please enter the price of the item: ")
            quantity = input("Please enter the quantity of the item: ")

            item = Item(name, price, quantity)

            shopping_lists[option-1].item_lists.append(item)

            more_choice = input("\nDo you want to add more items? (Yes/No) ")

            if more_choice.lower() == "yes":
                continue
            else:
                break

    elif choice == 3:
        print("\n--------------------")
        for i in range(len(shopping_lists)):
            print(shopping_lists[i].title)
            for item in shopping_lists[i].item_lists:
                print(f" - {item.title}")
        print("--------------------")

    elif choice == 4:
        print("\nThank you for using the grocery app!")
        break

    else:
        print("You entered the wrong number. Please try again.")