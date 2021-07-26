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
    try:
        choice = int(input("""
      Please choose the option:
      1. Add a store
      2. Add grocery items to the particular store
      3. Delete a store
      4. Delete grocery items from the particular store
      5. Display the list
      6. Quit
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

                more_choice = input(
                    "\nDo you want to add more items? (Yes/No) ")

                if more_choice.lower() == "yes":
                    continue
                else:
                    break

        elif choice == 3:
            print("\n--------------------")
            for i in range(len(shopping_lists)):
                print(f"{i+1}. {shopping_lists[i].title}")
            print("--------------------")

            store_num = int(
                input('\nEnter the number of the store to delete: '))
            del shopping_lists[store_num-1]

        elif choice == 4:
            print("\n--------------------")
            for i in range(len(shopping_lists)):
                print(f"{i+1}. {shopping_lists[i].title}")
            print("--------------------")

            store_number = int(
                input("\nEnter the number of the store to see the items: "))

            store = shopping_lists[store_number-1]

            print("\n--------------------")
            for i in range(len(store.item_lists)):
                print(f"{i+1}. {store.item_lists[i].title}")
            print("--------------------")

            item_number = int(
                input("\n Enter the number of the item to delete: "))

            del store.item_lists[item_number-1]

        elif choice == 5:
            print("\n--------------------")
            for i in range(len(shopping_lists)):
                print(shopping_lists[i].title)
                for item in shopping_lists[i].item_lists:
                    print(f" - {item.title}")
            print("--------------------")

        elif choice == 6:
            print("\nThank you for using the grocery app!")
            break

    except ValueError:
        print("\nYou entered the invalid number. Please try again.")