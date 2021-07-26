from pool_table_class import PoolTable
from datetime import datetime, timedelta
import json
import time

tables = []
log_lists = []


def main(tables, log_lists):
    for i in range(1, 13):
        pool = PoolTable(i)
        tables.append(pool)

    def calculate_duration_time(start_time):
        current_time = datetime.now()

        time_duration = current_time - start_time

        duration_in_seconds = time_duration.total_seconds()

        minute = duration_in_seconds / 60

        if minute < 1:
            minute = 0

        return round(minute)

    def calculate_total_time_played(total_time):
        total_in_seconds = total_time.total_seconds()

        minute = total_in_seconds / 60

        if minute < 1:
            minute = 0

        return round(minute)

    def calculate_amount(min):
        hour = min / 60
        amt = hour * 30

        return amt

    def display_tables(tables):
        date = datetime.now().strftime("%m-%d-%Y")
        print(f"\nToday's date: {date}")
        print("------------------------------------------------------------------")
        for table in tables:
            if table.is_occupied:
                if table.time_start == None:
                    print(
                        f"Table {table.number}  - Occupied     ||  Checked out: {table.start_time_display})  ||  0 minute(s)")
                else:
                    minute = calculate_duration_time(table.time_start)

                    print(
                        f"Table {table.number}  - Occupied     ||  Checked out: {table.start_time_display}  ||  {'%.0f' % minute} minute(s)")
            else:
                print(f"Table {table.number}  - Not Occupied")
        print("------------------------------------------------------------------\n")

    def save_log(log_lists, number, start_time, end_time, min):
        date = datetime.now().strftime("%m-%d-%Y")

        log = {"Table Number": number,
               "Check-out Time": start_time,
               "Check-in Time": end_time,
               "Time Played (in minute)": min}

        with open(f"{date}.json", "w") as file:
            log_lists.append(log)
            json.dump(log_lists, file)

    def print_out_log():
        date = datetime.now().strftime("%m-%d-%Y")

        with open(f"{date}.json") as file:
            log_files = json.load(file)
            for file in log_files:
                print(f"Table Number: {file['Table Number']}")
                print(f"Check-out Time: {file['Check-out Time']}")
                print(f"Check-in Time: {file['Check-in Time']}")
                print(
                    f"Total Time Played: {'.%0f' % file['Time Played (in minute)']} minute(s)")
                print('-------------------------------')

    while True:
        choice = int(input("""Please choose the option number: 
                1. Display the status of the pool tables
                2. Check out the pool table
                3. Check in the pool table
                4. Quit the program
                """))

        if choice == 1:
            display_tables(tables)

        elif choice == 2:
            display_tables(tables)

            table_num = int(input(
                "\nPlease enter the table number to check out: "))

            table = tables[table_num-1]

            if table.is_occupied:
                print(f"\nPool Table {table_num} is currently occupied.\n")
            else:
                table.check_out_table()
                display_tables(tables)

        elif choice == 3:
            display_tables(tables)

            table_num = int(
                input("Please enter the table number to check in: "))

            table = tables[table_num-1]
            table.check_in_table()

            min = calculate_total_time_played(table.total_time)
            amount = calculate_amount(min)

            display_tables(tables)

            print(f"\nPool Table {table_num}")
            print(f" - Check in Time: {table.end_time_display}")
            print(f" - Total Time Played: {'%.0f' % min} minute(s)")
            print(f" - The Total Cost: ${'%.2f' % amount}\n\n")

            save_log(log_lists, table.number, table.start_time_display,
                     table.end_time_display, min)

        elif choice == 4:
            break

        else:
            print("You entered the wrong input. Please try again")

    # Reading from .json file and printing out
    # print("\nPrinting out the today's log..\n")
    # time.sleep(3)
    # print('-------------------------------')
    # print_out_log()


main(tables, log_lists)